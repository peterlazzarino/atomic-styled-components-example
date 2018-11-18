import styled from "styled-components";
import { textBase, textProps, textDefaults } from "./textBase";

const Paragraph = styled.p`
  ${textBase};
  margin-bottom: 15px;
`;

Paragraph.propTypes = textProps;

Paragraph.defaultProps = textDefaults;

export default Paragraph;
