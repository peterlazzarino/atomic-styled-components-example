import styled from "styled-components";
import { buttonBase, buttonProps, buttonDefaults } from "./buttonBase";

const Button = styled.button`
  ${buttonBase};
`;

Button.propTypes = buttonProps;

Button.defaultProps = buttonDefaults;

export default Button;
