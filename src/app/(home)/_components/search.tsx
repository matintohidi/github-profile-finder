"use client";

import { Button, Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { type FormEvent, useCallback, useRef, useState } from "react";
import SearchResult from "@/app/(home)/_components/search-result";
import SearchInput from "@/components/input/search-input";
import { toaster } from "@/components/ui/toaster";
import { API_URL } from "@/configs/app.config";
import { useDebounce } from "@/hooks/useDebounce";
import type { GithubUserSummary } from "@/interfaces/github.interface";

export default function Search() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GithubUserSummary[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  // useCallback to memoize the searchUsers function and prevent unnecessary re-creations
  const searchUsers = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResult([]);
      setIsSearchOpen(false);
      return;
    }

    setLoading(true);
    try {
      const url = new URL(`${API_URL}/search/users`);

      const filters = new URLSearchParams({
        q: query,
        per_page: "6",
        sort: "followers",
        order: "desc",
      });

      url.search = filters.toString();

      const response = await fetch(url.toString());
      const data = await response.json();

      if (data.items) {
        setResult(data.items);
        setIsSearchOpen(true);
      } else {
        setResult([]);
      }
    } catch {
      toaster.create({
        title: "Error",
        description: "Failed to search users. Please try again later.",
      });
      setResult([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Use the debounce hook for the search function
  const debouncedSearch = useDebounce(searchUsers, 300);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);

    debouncedSearch(value);
  };

  const handleClear = () => {
    setUsername("");
    setResult([]);
    setIsSearchOpen(false);
    inputRef.current?.focus();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/profile/${username.trim()}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <SearchInput
          ref={inputRef}
          value={username}
          onChange={handleSearchChange}
          onClear={handleClear}
          onFocus={() => {
            if (username) setIsSearchOpen(true);
          }}
          placeholder="Search GitHub username..."
          loading={loading}
          size="lg"
        />
        <Button
          type="submit"
          bg="primary"
          color="primary.fg"
          size="lg"
          disabled={loading || !username.trim()}
          rounded="lg"
          fontWeight="bold"
        >
          {loading ? "Searching..." : "Search Profile"}
        </Button>
        {isSearchOpen && <SearchResult result={result} loading={loading} />}
      </Stack>
    </form>
  );
}
