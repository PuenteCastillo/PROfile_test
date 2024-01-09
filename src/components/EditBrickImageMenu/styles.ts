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

export const EditBrickImageLeftArrowIcon = styled(LeftArrowSVG)`
  position: relative;
  top: 3px;
  fill: ${Color.LightBlue};
`;

const panelWidth = '320px;'

export const EditBrickImageMenuWrapper = styled.div`
  position: fixed;
  left: 80px;
  top: 0;
  height: 100vh;
  width: ${panelWidth};
  box-shadow: 2px 0 6px -2px ${Color.Black}29;
`;

export const EditBrickImageContentWrapper = styled.div`
  overflow-y: auto;
  height: calc(100vh - 105px);
  width: ${panelWidth};
  padding: 0 20px;
`;

export const EditBrickImageBackLink = styled.div`
  margin-top: 40px;
  padding-left: 20px;
  cursor: pointer;
`;

export const EditBrickImageBackLinkText = styled.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.22px;
  color: ${Color.LightBlue};
  padding-left: 7px;
`;

export const EditBrickImageTitle = styled.h2`
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

export const EditBrickImageOptionHeader = styled.h3`
  margin-top: 20px;
`;

// export const EditBrickImageOptionHeader = styled.h2`
//   position: relative;
//   font-size: 18px;
//   font-weight: bold;
//   letter-spacing: 0.22px;
//   margin-top: 40px;
// `;

export const EditBrickImageOptionLabel = styled.label`
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 10px;
  text-align: center;
`;

export const EditBrickImageSmallGallery = styled.div`
  margin: 0 -10px;
`;

export const EditBrickImageBigGallery = styled.div`
  position: relative;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const EditBrickImageGalleryImageWrapper = styled.div`
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
export const EditBrickImageBlackColorSquareIcon = styled(ColorSquare)`
  fill: #000000;
  stroke: #9F9F9F;
`;

export const EditBrickImageGrayColorSquareIcon = styled(ColorSquare)`
  fill: #A8AAAD;
  stroke: #9F9F9F;
`;

export const EditBrickImageLightGrayColorSquareIcon = styled(ColorSquare)`
  fill: #DCDCDE;
  stroke: #9F9F9F;
`;

export const EditBrickImageWhiteColorSquareIcon = styled(ColorSquare)`
  fill: #FFFFFF;
  stroke: #9F9F9F;
`;

export const EditBrickImageBlueGrayColorSquareIcon = styled(ColorSquare)`
  fill: #E9F1FE;
  stroke: #9F9F9F;
`;

export const EditBrickImageRedColorSquareIcon = styled(ColorSquare)`
  fill: #EF1552;
  stroke: #9F9F9F;
`;

export const EditBrickImageBlueColorSquareIcon = styled(ColorSquare)`
  fill: #3392ce;
  stroke: #9F9F9F;
`;

export const EditBrickImageTurquoiseColorSquareIcon = styled(ColorSquare)`
  fill: #54BAD2;
  stroke: #9F9F9F;
`;

export const EditBrickImageGreenColorSquareIcon = styled(ColorSquare)`
  fill: #67AE5B;
  stroke: #9F9F9F;
`;

export const EditBrickImageYellowGreenColorSquareIcon = styled(ColorSquare)`
  fill: #D0DB59;
  stroke: #9F9F9F;
`;

export const EditBrickImageYellowColorSquareIcon = styled(ColorSquare)`
  fill: #FCEB61;
  stroke: #9F9F9F;
`;

export const EditBrickImageOrangeColorSquareIcon = styled(ColorSquare)`
  fill: #FF7F00;
  stroke: #9F9F9F;
`;

export const EditBrickYellowOrangeGradiantIcon = styled(YellowOrangeGradiantIcon)``;

export const EditBrickAquaGradiantIcon = styled(AquaGradiantIcon)``;

export const EditBrickBlueGreenGradiantIcon = styled(BlueGreenGradiantIcon)``;

export const EditBrickDarkGreenGradiantIcon = styled(DarkGreenGradiantIcon)``;

export const EditBrickDarkPurpleRedGradiantIcon = styled(DarkPurpleRedGradiantIcon)``;

export const EditBrickPinkOrangeGradiantIcon = styled(PinkOrangeGradiantIcon)``;

export const EditBrickPurpleBlueGradiantIcon = styled(PurpleBlueGradiantIcon)``;

export const EditBrickPurpleOrangeGradiantIcon = styled(PurpleOrangeGradiantIcon)``;

export const EditBrickPurpleRedOrangeGradiantIcon = styled(PurpleRedOrangeGradiantIcon)``;

export const EditBrickGradiantRectangleIcon = styled(GradiantRectangle)`
  fill: url(#yellow-orange-gradient);
`;

export const EditBrickBkgImageIcon = styled(BkgImageIcon)`
  fill: #3392CE;
  cursor: pointer;
`;

export const EditBrickBkgColorIcon = styled(BkgColorIcon)`
  fill: #3392CE;
  cursor: pointer;
`;

export const EditBrickBkgGradiantIcon = styled(BkgGradiantIcon)`
  fill: #3392CE;
  cursor: pointer;
`;

export const EditBrickImageContainer = styled.div`
  margin-top: 20px;
`;

export const EditBrickImageOptions = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #e6e5e5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const EditBrickImageOptionButton = styled.button`
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

export const EditBrickImageChoiceContainer = styled.div`
  display: none;
  margin-top : 20px;

  &.selected {
    display: block;
  }
`;

export const EditBrickChosenImage = styled.div``;

export const EditBrickImageChoiceText = styled.p``;

export const EditBrickImageColorOption = styled.div`
  cursor: pointer;

  &.selected {
    svg {
      stroke: #3392CE;
      stroke-width: 5;
    }
  }
`;

export const EditBrickImageColorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  background-color: #F9FAFC;
  border: 1px solid #e6e5e5;
  border-radius: 8px;
  padding: 10px;
  display: none;
  margin-top : 20px;

  svg {
    display: block;
    width: 35px;
    height: 35px;
  }

  &.selected {
    display: grid;
  }
`;

export const EditBrickImageColorText = styled.p`
  grid-column: 1 / -1;
  margin-bottom: 0px;
`;

export const EditBrickImageGradiantContainer = styled.div`
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

export const EditBrickImageGradiantOption = styled.div`
  cursor: pointer;

  &.selected {
    svg {
      stroke: #3392CE;
      stroke-width: 5;
    }
  }
`;

export const EditBrickImageGradiantSelected = styled.div`
  grid-column: 1 / -1;
`;

export const EditBrickImageColorOptions = styled.img`
  max-width: 100%;
  grid-column: 1 / -1;
`;
