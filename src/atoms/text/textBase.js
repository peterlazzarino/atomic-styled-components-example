import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { myTheme } from "../../theme/MyThemeComponent";

export const textBase = css`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size};
  font-weight: ${props => props.theme.font.weight};
  color: ${props => props.theme.color.default};
`;

export const textProps = {
  theme: PropTypes.object
};

export const textDefaults = {
  theme: {
    font: myTheme.font,
    color: myTheme.color
  }
};
