import Image from "next/image";
import { Container } from "./header.styles";
import yad2icon from "@assets/icons/yad2-logo.svg";
import { Row } from "@/styles/container/container.styles";
import { Text } from "@/styles/typography/typography.styles";
import User from "./user.component";

const Header = () => {
  return (
    <Container>
      <Row $aic $gap={1}>
        <Image src={yad2icon} alt="Yad2icon" />
        <Text w={"medium"} s={24}>
          פרסום מודעה
        </Text>
      </Row>
      <User></User>
    </Container>
  );
};

export default Header;
