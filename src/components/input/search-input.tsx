import { Box, Group, IconButton, Input, Spinner } from "@chakra-ui/react";
import type { ForwardedRef } from "react";
import { forwardRef, useState } from "react";
import { BiSearch, BiX } from "react-icons/bi";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  onFocus?: () => void;
  placeholder?: string;
  loading?: boolean;
  size?: "sm" | "md" | "lg";
}

const SearchInput = forwardRef(function SearchInput(
  {
    value,
    onChange,
    onClear,
    onFocus,
    placeholder = "Search GitHub username...",
    loading = false,
    size = "lg",
  }: SearchInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false);

  const sizeMap = {
    sm: 16,
    md: 18,
    lg: 20,
  };
  const iconSize = sizeMap[size] || 20;
  const spinnerSizeMap = {
    sm: "xs",
    md: "sm",
    lg: "md",
  } as const;
  const spinnerSize = spinnerSizeMap[size] ?? "md";

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Group
      position="relative"
      borderWidth="2px"
      borderColor={isFocused ? "primary" : "muted"}
      rounded="lg"
      overflow="hidden"
			gap={0}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={4}
        color={isFocused ? "primary" : "fg.muted"}
      >
        <BiSearch size={iconSize} />
      </Box>
      <Input
        ref={ref}
        placeholder={placeholder}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        size={size}
        border="none"
        outline="none"
        _focus={{
          outline: "none",
          boxShadow: "none",
        }}
				px={0}
      />
      <Box display="flex" alignItems="center" gap={2} px={2}>
        {loading && (
          <Box color="primary" display="flex" alignItems="center">
            <Spinner size={spinnerSize} />
          </Box>
        )}
        {value && !loading && onClear && (
          <IconButton
            aria-label="Clear search"
            onClick={onClear}
            size="xs"
            variant="ghost"
            rounded="full"
            _hover={{
              bg: "muted",
            }}
          >
            <BiX size={iconSize} />
          </IconButton>
        )}
      </Box>
    </Group>
  );
});

export default SearchInput;
