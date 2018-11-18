import { css } from "styled-components";
import PropTypes from "prop-types";
import { myTheme } from "../../theme/MyThemeComponent";
import { textBase } from "../text/textBase";

export const buttonBase = css`
  ${textBase};
  color: ${props => props.theme.color.button};
  background: ${props => props.theme.button.background};
  border: ${props => props.theme.button.border};
`;

export const buttonProps = {
  theme: PropTypes.object
};

export const buttonDefaults = {
  theme: {
    button: myTheme.button,
    color: myTheme.color,
    font: myTheme.font
  }
};
