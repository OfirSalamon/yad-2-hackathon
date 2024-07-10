import Image from "next/image";
import { Container } from "./header.styles";
import yad2icon from "@assets/icons/yad2-logo.svg";

const Header = () => {
  return (
    <Container>
      <label>dsfsf</label>
      <Image src={yad2icon} alt="Yad2icon" />
    </Container>
  );
};

export default Header;
