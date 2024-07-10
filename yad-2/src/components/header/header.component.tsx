import Image from "next/image";
import { Container } from "./header.styles";
import yad2icon from "@assets/icons/yad2-logo.svg";
import { Row } from "@/styles/container/container.styles";

const Header = () => {
  return (
    <Container>
      <Row $aic $gap={1}>
        <Image src={yad2icon} alt="Yad2icon" />
        <label>פרסום מודעה</label>
      </Row>
    </Container>
  );
};

export default Header;
