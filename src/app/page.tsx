import { Box, Card, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

export default function Home() {
  return (
    <Box minH="100vh" bg="bg" color="fg" py={8}>
      <Container maxW="container.lg">
        <Stack direction='row' justify="space-between" align="center" mb={8}>
          <Heading size="lg">GitHub Profile Finder</Heading>
          <ColorModeButton />
        </Stack>

        <Stack gap={6}>
          <Card.Root bg="card.bg" p={6}>
            <Card.Header>
              <Heading size="md" color="fg">
                Welcome!
              </Heading>
            </Card.Header>
            <Card.Body>
              <Text color="fg.muted">
                کلیک روی دکمه بالا برای تغییر تم - انیمیشن زیبای گسترش دایره‌ای
                رو ببین! 🎨
              </Text>
            </Card.Body>
          </Card.Root>

          <Stack direction={{ base: "column", md: "row" }} gap={4}>
            <Card.Root bg="primary" color="primary.fg" flex={1} p={6}>
              <Heading size="sm" mb={2}>
                Primary Card
              </Heading>
              <Text>با رنگ اصلی پروژه</Text>
            </Card.Root>

            <Card.Root bg="destructive" color="destructive.fg" flex={1} p={6}>
              <Heading size="sm" mb={2}>
                Secondary Card
              </Heading>
              <Text>با رنگ ثانویه</Text>
            </Card.Root>
          </Stack>

          <Card.Root bg="muted" p={6}>
            <Text color="muted.fg">این کارت با رنگ muted نمایش داده می‌شه</Text>
          </Card.Root>
        </Stack>
      </Container>
    </Box>
  );
}
