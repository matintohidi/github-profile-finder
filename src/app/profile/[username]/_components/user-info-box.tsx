import { Box, HStack, Link, Stack, Text, VStack } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { Tooltip } from "@/components/ui/tooltip";

interface UserInfoBoxProps {
  icon: IconType;
  label: string;
  value: string;
  link?: boolean;
}

export function UserInfoBox({
  icon: Icon,
  label,
  value,
  link,
}: UserInfoBoxProps) {
  const displayValue = link ? value.replace(/^https?:\/\//, '') : value;
  const isLongText = displayValue.length > 20;

  return (
    <HStack 
      align="center" 
      gap={2}
      flex="1"
      minW={{ base: "100%", sm: "0" }}
    >
      <Icon size={20} color="var(--chakra-colors-primary)" />
      <Box minW={0} flex={1}>
        <Text fontSize="sm" color="fg.muted" mb={0.5}>
          {label}
        </Text>
        {link ? (
          <Tooltip content={displayValue} disabled={!isLongText}>
            <Link 
              href={value}
              target="_blank" 
              fontSize="md"
              fontWeight="semibold"
              _hover={{ 
                color: "fg.muted",
                textDecoration: "underline" 
              }}
              outline={0}
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              display="block"
            >
              {displayValue}
            </Link>
          </Tooltip>
        ) : (
          <Text 
            fontSize="md" 
            fontWeight="semibold"
            title={value}
          >
            {value}
          </Text>
        )}
      </Box>
    </HStack>
  );
}
