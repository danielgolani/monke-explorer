import { Container, Heading, HStack, Stack, Tag } from "@chakra-ui/react";
import logo from "./lt-dan.png";

function NavBar() {
  return (
    <Stack w="100%" py="6" bg="white" justify="space-between" direction="row">
      <Container maxW="3xl">
        <HStack justify="space-between" spacing="4">
        <img src={logo} className="logo" />
          <Heading size="md">
            Monke Baby Explorer
          </Heading>
          <Tag size="lg" color="pink.700">
            Mainnet
          </Tag>
        </HStack>
      </Container>
    </Stack>
  );
}

export default NavBar;
