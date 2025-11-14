import { Button, HStack } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

export default function Home() {
  return (
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>

      <ColorModeButton />
    </HStack>
  );
}
