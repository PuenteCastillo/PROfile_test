import { Color } from "globals/enums";
import styled from "styled-components";

import { ReactComponent as LeftArrowSVG } from "assets/icons/left-arrow.svg";
import { ReactComponent as BkgImageIcon } from "assets/icons/bkg-image.svg";
import { ReactComponent as BkgColorIcon } from "assets/icons/color-palette.svg";
import { ReactComponent as BkgGradiantIcon } from "assets/icons/bkg-image-option.svg";
import { ReactComponent as ColorSquare } from "assets/icons/color-square.svg";
import { ReactComponent as GradiantRectangle } from "assets/icons/gradiant-rectangle.svg";
import { ReactComponent as YellowOrangeGradiantIcon } from "assets/icons/yellow-orange-gradiant.svg";
import { ReactComponent as PinkOrangeGradiantIcon } from "assets/icons/pink-orange-gradiant.svg";
import { ReactComponent as PurpleOrangeGradiantIcon } from "assets/icons/purple-orange-gradiant.svg";
import { ReactComponent as PurpleBlueGradiantIcon } from "assets/icons/purple-blue-gradiant.svg";
import { ReactComponent as PurpleRedOrangeGradiantIcon } from "assets/icons/purple-red-orange-gradiant.svg";
import { ReactComponent as AquaGradiantIcon } from "assets/icons/aqua-gradiant.svg";
import { ReactComponent as BlueGreenGradiantIcon } from "assets/icons/blue-green-gradiant.svg";
import { ReactComponent as DarkGreenGradiantIcon } from "assets/icons/dark-green-gradiant.svg";
import { ReactComponent as DarkPurpleRedGradiantIcon } from "assets/icons/dark-purple-red-gradiant.svg";

export const BackgroundFieldToolbarLeftArrowIcon = styled(LeftArrowSVG)`
  position: relative;
  top: 3px;
  fill: ${Color.LightBlue};
`;

const panelWidth = '320px;'

export const BackgroundFieldToolbarMenuWrapper = styled.div`
  position: fixed;
  left: 80px;
  top: 0;
  height: 100vh;
  width: ${panelWidth};
  box-shadow: 2px 0 6px -2px ${Color.Black}29;
`;

export const BackgroundFieldToolbarContentWrapper = styled.div`
  overflow-y: auto;
  height: calc(100vh - 105px);
  width: ${panelWidth};
  padding: 0 20px;
`;

export const BackgroundFieldToolbarBackLink = styled.div`
  margin-top: 40px;
  padding-left: 20px;
  cursor: pointer;
`;

export const BackgroundFieldToolbarBackLinkText = styled.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.22px;
  color: ${Color.LightBlue};
  padding-left: 7px;
`;

export const BackgroundFieldToolbarTitle = styled.h2`
  position: relative;
  display: inline-block;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.22px;
  margin-top: 40px;
  margin-left: 20px;

  &:after {
    content: "";
    background: ${Color.Black};
    position: absolute;
    left: 0px;
    top: 35px;
    height: 3px;
    width: 100%;
  }
`;

export const BackgroundFieldToolbarOptionHeader = styled.h3`
  margin-top: 20px;
`;

// export const BackgroundFieldToolbarOptionHeader = styled.h2`
//   position: relative;
//   font-size: 18px;
//   font-weight: bold;
//   letter-spacing: 0.22px;
//   margin-top: 40px;
// `;

export const BackgroundFieldToolbarOptionLabel = styled.label`
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 10px;
  text-align: center;
`;

export const BackgroundFieldToolbarSmallGallery = styled.div`
  margin: 0 -10px;
`;

export const BackgroundFieldToolbarBigGallery = styled.div`
  position: relative;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const BackgroundFieldToolbarGalleryImageWrapper = styled.div`
  position: absolute;
  padding: 5px;

  div {
    height: 100%;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      height: 100%;
    }

    img {
      height: 100%;
    }
  }

  &:nth-child(1) {
    top: 0;
    left: 0;
    height: 50%;
    width: 60%;
  }

  &:nth-child(2) {
    top: 0;
    left: 60%;
    height: 25%;
    width: 40%;
  }

  &:nth-child(3) {
    top: 50%;
    left: 0;
    height: 20%;
    width: 30%;
  }

  &:nth-child(4) {
    top: 50%;
    left: 30%;
    height: 20%;
    width: 30%;
  }

  &:nth-child(5) {
    top: 25%;
    left: 60%;
    height: 45%;
    width: 40%;
  }

  &:nth-child(6) {
    top: 70%;
    left: 0;
    height: 30%;
    width: 30%;
  }

  &:nth-child(7) {
    top: 70%;
    left: 30%;
    height: 30%;
    width: 70%;
  }
`;

/** 
 * Hero Background Image Components
 */
export const BackgroundFieldToolbarBlackColorSquareIcon = styled(ColorSquare)`
  fill: #000000;
  stroke: #9F9F9F;
`;

export const BackgroundFieldToolbarGrayColorSquareIcon = styled(ColorSquare)`
  fill: #A8AAAD;
  stroke: #9F9F9F;
`;

export const BackgroundFieldToolbarLightGrayColorSquareIcon = styled(ColorSquare)`
  fill: #DCDCDE;
  stroke: #9F9F9F;
`;

export const BackgroundFieldToolbarWhiteColorSquareIcon = styled(ColorSquare)`
  fill: #FFFFFF;
  stroke: #9F9F9F;
`;

export const BackgroundFieldToolbarBlueGrayColorSquareIcon = styled(ColorSquare)`
  fill: #E9F1FE;
  stroke: #9F9F9F;
`;

export const BackgroundFieldToolbarRedColorSquareIcon = styled(ColorSquare)`
  fill: #EF1552;
  stroke: #9F9F9F;
`;

export const BackgroundFieldToolbarBlueColorSquareIcon = styled(ColorSquare)`
  fill: #3392ce;
  stroke: #9F9F9F;
`;

export const BackgroundFieldToolbarTurquoiseColorSquareIcon = styled(ColorSquare)`
  fill: #54BAD2;
  stroke: #9F9F9F;
`;

export const BackgroundFieldToolbarGreenColorSquareIcon = styled(ColorSquare)`
  fill: #67AE5B;
  stroke: #9F9F9F;
`;

export const BackgroundFieldToolbarYellowGreenColorSquareIcon = styled(ColorSquare)`
  fill: #D0DB59;
  stroke: #9F9F9F;
`;

export const BackgroundFieldToolbarYellowColorSquareIcon = styled(ColorSquare)`
  fill: #FCEB61;
  stroke: #9F9F9F;
`;

export const BackgroundFieldToolbarOrangeColorSquareIcon = styled(ColorSquare)`
  fill: #FF7F00;
  stroke: #9F9F9F;
`;

export const BackgroundFieldToolbarYellowOrangeGradiantIcon = styled(YellowOrangeGradiantIcon)``;

export const BackgroundFieldToolbarAquaGradiantIcon = styled(AquaGradiantIcon)``;

export const BackgroundFieldToolbarBlueGreenGradiantIcon = styled(BlueGreenGradiantIcon)``;

export const BackgroundFieldToolbarDarkGreenGradiantIcon = styled(DarkGreenGradiantIcon)``;

export const BackgroundFieldToolbarDarkPurpleRedGradiantIcon = styled(DarkPurpleRedGradiantIcon)``;

export const BackgroundFieldToolbarPinkOrangeGradiantIcon = styled(PinkOrangeGradiantIcon)``;

export const BackgroundFieldToolbarPurpleBlueGradiantIcon = styled(PurpleBlueGradiantIcon)``;

export const BackgroundFieldToolbarPurpleOrangeGradiantIcon = styled(PurpleOrangeGradiantIcon)``;

export const BackgroundFieldToolbarPurpleRedOrangeGradiantIcon = styled(PurpleRedOrangeGradiantIcon)``;

export const BackgroundFieldToolbarGradiantRectangleIcon = styled(GradiantRectangle)`
  fill: url(#yellow-orange-gradient);
`;

export const BackgroundFieldToolbarBkgImageIcon = styled(BkgImageIcon)`
  fill: #3392CE;
  cursor: pointer;
`;

export const BackgroundFieldToolbarBkgColorIcon = styled(BkgColorIcon)`
  fill: #3392CE;
  cursor: pointer;
`;

export const BackgroundFieldToolbarBkgGradiantIcon = styled(BkgGradiantIcon)`
  fill: #3392CE;
  cursor: pointer;
`;

export const BackgroundFieldToolbarContainer = styled.div`
  margin-top: 20px;
  background-color: white;
`;

export const BackgroundFieldToolbarOptions = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #e6e5e5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const BackgroundFieldToolbarOptionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 8px;

  &.selected-option {
    background-color: #3392CE;

    svg {
      fill: #FFFFFF;
    }
  }
`;

export const BackgroundFieldToolbarChoiceContainer = styled.div`
  display: none;
  margin-top : 20px;

  &.selected {
    display: block;
  }
`;

export const BackgroundFieldToolbarChosenImage = styled.div``;

export const BackgroundFieldToolbarChoiceText = styled.p``;

export const BackgroundFieldToolbarColorOption = styled.div`
  cursor: pointer;

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

export const BackgroundFieldToolbarHexRgbImage = styled.img`
  max-width: 100%;
  grid-column: 1 / -1;
  position: relative;
  top: -40px;
`;

export const BackgroundFieldToolbarColorContainer = styled.div`
  background-color: white;
  border: 1px solid #e6e5e5;
  border-radius: 8px;
  padding: 10px;
  display: none;
  margin-top : 20px;

  svg {
    display: block;
    width: 35px;
    height: 35px;
    margin: 0px auto;
  }

  &.selected {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 5px;
  }

  div.sketch-picker {
    margin: 10px auto 0px;
    grid-column: 1 / -1;
    padding: 0px !important;
    box-shadow: none !important;
    background-color: transparent !important;

    .flexbox-fix:nth-last-child(-n + 2) {
      visibility: hidden;
    }

    .flexbox-fix:last-child {
      display: none !important;
    }
  }
`;

export const BackgroundFieldToolbarColorText = styled.p`
  grid-column: 1 / -1;
  margin-bottom: 0px;
`;

export const BackgroundFieldToolbarGradiantContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  background-color: #F9FAFC;
  border: 1px solid #e6e5e5;
  border-radius: 8px;
  padding: 10px;
  display: none;
  margin-top : 20px;

  &.selected {
    display: grid;
  }
`;

export const BackgroundFieldToolbarGradiantOption = styled.div`
  cursor: pointer;

  svg {
    border-radius: 8px;
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

export const BackgroundFieldToolbarGradiantSelected = styled.div`
  grid-column: 1 / -1;
`;

export const BackgroundFieldToolbarColorOptions = styled.img`
  max-width: 100%;
  grid-column: 1 / -1;
`;
