import { Color } from "globals/enums";
import styled from "styled-components";
import { ReactComponent as DropdownArrowIcon } from "assets/icons/dropdown-arrow.svg";
import { ReactComponent as LineHeightIcon } from "assets/icons/line-height.svg";
import { ReactComponent as BoldIcon } from "assets/icons/bold.svg";
import { ReactComponent as ItalicIcon } from "assets/icons/italic.svg";
import { ReactComponent as UnderlineIcon } from "assets/icons/underline.svg";
import { ReactComponent as CapitalizeIcon } from "assets/icons/capitalize.svg";
import { ReactComponent as LeftAlignIcon } from "assets/icons/left-align.svg";
import { ReactComponent as CenterAlignIcon } from "assets/icons/center-align.svg";
import { ReactComponent as RightAlignIcon } from "assets/icons/right-align.svg";
import { ReactComponent as ColorSquare } from "assets/icons/color-square.svg";

export const TextFieldToolbarContainer = styled.div`
  display: none;
`;

export const TextFieldToolbarFontTypeContainer = styled.div`
  margin-bottom: 10px;
`;

export const TextFieldToolbarDropdownContainer = styled.div`
  position: relative;
`;

export const TextFieldToolbarDropdownButton = styled.button`
  position: relative;
  width: 100%;
  background-color: #ffffff;
  text-align: left;
  border: 1px solid ${Color.Gray3};
  border-radius: 8px;
  padding: 10px;
  height: 50px;
  cursor: pointer;

  &.font-type {
    span {
      margin: 0px;
    }

    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
    }
  }

  &.font-size,
  &.line-height {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.font-color {
    svg:nth-of-type(1) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 5px;
    }

    span {
      margin-left: 50px;
    }

    svg:nth-of-type(2) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
    }
  }
`;

export const TextFieldToolbarDropdownSelected = styled.span`
  margin: 0px 10px;
`;

export const TextFieldToolbarDropdownArrowIcon = styled(DropdownArrowIcon)`
  fill: ${Color.Gray9};
`;

export const TextFieldToolbarDropdown = styled.div`
  display: none;
  position: absolute;
  z-index: 10;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid ${Color.Gray3};
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;

  &.visible {
    display: block;
  }

  &.visible.color-dropdown {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    p {
      margin-bottom: 0px;
    }

    svg {
      display: block;
      width: 35px;
      height: 35px;
    }
  }
`;

export const TextFieldToolbarDropdownOption = styled.p`
  margin-bottom: 5px;

  svg {
    border-radius: 4px;
  }

  &:hover {
    svg {
      stroke: #3392CE;
      stroke-width: 5;
    }
  }

  &.selected {
    svg {
      stroke: #3392CE;
      stroke-width: 5;
    }
  }
`;

export const TextFieldToolbarFontOptionsContainer = styled.div`
  margin-bottom: 30px;
`;

export const TextFieldToolbarFontOptionsTwoItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 10px;
`;

export const TextFieldToolbarLineHeightIcon = styled(LineHeightIcon)`
  fill: ${Color.Gray9};
`;

export const TextFieldToolbarFontOptionsFourItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 10px;
`;

export const TextFieldToolbarFontOptionButton = styled.button`
  border: 1px solid ${Color.Gray3};
  border-radius: 8px;
  background-color: #ffffff;
  padding: 10px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    background-color: ${Color.Blue};
    border-color: ${Color.Blue};

    svg {
      fill: ${Color.White};
    }
  }
`;

export const TextFieldColorOptions = styled.img`
  max-width: 100%;
  grid-column: 1 / -1;
`;

export const TextFieldToolbarBoldIcon = styled(BoldIcon)``;

export const TextFieldToolbarItalicIcon = styled(ItalicIcon)``;

export const TextFieldToolbarUnderlineIcon = styled(UnderlineIcon)``;

export const TextFieldToolbarCapitalizeIcon = styled(CapitalizeIcon)``;

export const TextFieldToolbarLeftAlignIcon = styled(LeftAlignIcon)``;

export const TextFieldToolbarCenterAlignIcon = styled(CenterAlignIcon)``;

export const TextFieldToolbarRightAlignIcon = styled(RightAlignIcon)``;

export const TextFieldToolbarColorSquareIcon = styled(ColorSquare)``;

export const TextFieldToolbarBlackColorSquareIcon = styled(ColorSquare)`
  fill: ${Color.Black};
  stroke: #9F9F9F;
`;

export const TextFieldToolbarGrayColorSquareIcon = styled(ColorSquare)`
  fill: ${Color.Gray6};
  stroke: #9F9F9F;
`;

export const TextFieldToolbarLightGrayColorSquareIcon = styled(ColorSquare)`
  fill: ${Color.Gray4};
  stroke: #9F9F9F;
`;

export const TextFieldToolbarWhiteColorSquareIcon = styled(ColorSquare)`
  fill: ${Color.White};
  stroke: #9F9F9F;
`;

export const TextFieldToolbarBlueGrayColorSquareIcon = styled(ColorSquare)`
  fill: ${Color.BlueGray};
  stroke: #9F9F9F;
`;

export const TextFieldToolbarRedColorSquareIcon = styled(ColorSquare)`
  fill: ${Color.Red};
  stroke: #9F9F9F;
`;

export const TextFieldToolbarBlueColorSquareIcon = styled(ColorSquare)`
  fill: ${Color.Blue};
  stroke: #9F9F9F;
`;

export const TextFieldToolbarTurquoiseColorSquareIcon = styled(ColorSquare)`
  fill: ${Color.Turquoise};
  stroke: #9F9F9F;
`;

export const TextFieldToolbarGreenColorSquareIcon = styled(ColorSquare)`
  fill: ${Color.Green};
  stroke: #9F9F9F;
`;

export const TextFieldToolbarYellowGreenColorSquareIcon = styled(ColorSquare)`
  fill: ${Color.YellowGreen};
  stroke: #9F9F9F;
`;

export const TextFieldToolbarYellowColorSquareIcon = styled(ColorSquare)`
  fill: ${Color.Yellow};
  stroke: #9F9F9F;
`;

export const TextFieldToolbarOrangeColorSquareIcon = styled(ColorSquare)`
  fill: ${Color.Orange};
  stroke: #9F9F9F;
`;
