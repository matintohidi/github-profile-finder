import { Box, Button, Center, Heading, Separator, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FiGithub, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <Center flex="1" bg="bg" color="fg">
      <Stack align="center" gap={8}>
        <Box position="relative">
          <Text fontWeight="bold" fontSize="9xl" color="primary">
            404
          </Text>

          <Center
            position="absolute"
            top="20px"
            right="-65px"
            bg="primary/30"
            backdropFilter="blur(10px)"
            rounded="full"
            p={5}
            borderWidth="1px"
            borderColor="primary/50"
          >
            <BiSearch color="var(--chakra-colors-primary)" size="48" />
          </Center>
        </Box>

        <Stack align="center" gap={4} textAlign="center">
          <Heading size="xl" color="fg">
						Page Not Found!
          </Heading>
          <Text color="fg.muted" fontSize="lg" maxW="md">
						Unfortunately, the page you are looking for does not exist
          </Text>
        </Stack>

				<Stack direction="row" align="center" w="full">
					<Separator flex="1" />
					<FiGithub size={20} color="var(--chakra-colors-fg-muted)" />
					<Separator flex="1" />
				</Stack>

        <Link href="/">
          <Button
            bg="primary"
            color="primary.fg"
            size="lg"
            px={8}
          >
            <FiHome />
            Back to Home
          </Button>
        </Link>
      </Stack>
    </Center>
  );
}
