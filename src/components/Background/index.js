import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export default styled(LinearGradient).attrs({
  colors: ["#464769", "#1b1a1f"],
})`
  flex: 1;
  padding-top: 50px;
`;
