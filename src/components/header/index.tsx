import { Heading, HStack } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { ColorModeButton } from "@/components/ui/color-mode";

export default function Header() {
  return (
    <HStack justify="space-between" align="center" mb={8} mt={4}>
      <HStack gap="8px">
        <FiGithub size={20} style={{ color: "var(--chakra-colors-primary)" }} />
        <Heading size="lg">GitHub Profile Finder</Heading>
      </HStack>
      <ColorModeButton />
    </HStack>
  );
}
