"use client";

import {
  ButtonGroup,
  IconButton,
  Pagination,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { REPOS_PER_PAGE } from "@/app/profile/[username]/_components/repository";

interface RepositoryPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function RepositoryPagination({
  currentPage,
  totalPages,
  onPageChange,
}: RepositoryPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <Pagination.Root
      count={totalPages * REPOS_PER_PAGE}
      pageSize={REPOS_PER_PAGE}
      page={currentPage}
      onPageChange={(e) => onPageChange(e.page)}
			mb={4}
    >
      <ButtonGroup variant="ghost" size="sm">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton variant={{ base: "ghost", _selected: "outline" }}>
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  );
}
