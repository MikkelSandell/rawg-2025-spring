import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColderModeSwirch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <ColderModeSwirch></ColderModeSwirch>
    </HStack>
  );
};

export default NavBar;

