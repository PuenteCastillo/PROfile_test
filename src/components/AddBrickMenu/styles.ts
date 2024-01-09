import styled from "styled-components";
import { Button } from "antd";
import { Color } from "globals/enums";

const panelWidth = '320px;'

const brickContent = `
  box-shadow: 0 0 3px ${Color.Black}29;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const brickHeading = `
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.22px;
  line-height: 20px;
  margin: 0;
`;

const brickButton = `
  border: none;
  margin-top: 20px;
  font-weight: 600;
`;

export const AddBrickMenuWrapper = styled.div`
  position: fixed;
  left: 80px; // 100px
  top: 0;
  height: 100vh;
  width: ${panelWidth};
  box-shadow: 2px 0 6px -2px ${Color.Black}29;
`;

export const AddBrickContentWrapper = styled.div`
  overflow-y: auto;
  scrollbar-width: thin;
  height: calc(100vh - 105px);
  margin-top: 30px;
  width: ${panelWidth};
  padding: 0 20px;
`;

export const AddBrickTitle = styled.h2`
  position: relative;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.22px;
  margin-top: 40px;
  padding-left: 20px;

  &:after {
    content: "";
    background: ${Color.Black};
    position: absolute;
    left: 20px;
    top: 35px;
    height: 3px;
    width: 155px;
  }
`;

export const AddBrickContent = styled.div`
  ${brickContent};
  background-color: ${Color.White};
`;

export const AddBrickHeading = styled.h3`
  ${brickHeading}
`;

export const AddBrickButton = styled(Button)`
  ${brickButton};
  background-color: ${Color.Gray2};

  &.active,
  &:hover {
    background: ${Color.Blue};
    color: ${Color.White};
  }
`;

export const AddBrickContentPremium = styled.div`
  ${brickContent}
  background: ${Color.LightOrange};
`;

export const AddBrickHeadingPremium = styled.h3`
  ${brickHeading}
  color: ${Color.RedOrange};

  svg {
    height: 21px;
    margin-right: 8px;
  }
`;

export const AddBrickButtonPremium = styled(Button)`
  ${brickButton}
  background: ${Color.White};

  &.active,
  &:hover {
    background: ${Color.RedOrange};
    color: ${Color.White};
  }
`;
