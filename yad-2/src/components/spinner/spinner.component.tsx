import { Text } from "@/styles/typography/typography.styles";
import {
  SpinnerContainer,
  SpinnerOverlay,
  TextContainer,
} from "./spinner.styles";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
      <TextContainer>
        <Text s={20} w={"bold"}>
          רק רגע, אנחנו ממלאים את כל הפרטים
        </Text>
      </TextContainer>
    </SpinnerOverlay>
  );
};

export default Spinner;
