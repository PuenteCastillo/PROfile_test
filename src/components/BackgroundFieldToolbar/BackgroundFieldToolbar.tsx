import { useEffect, useState } from "react";
import { SketchPicker } from 'react-color';
import { ImagePicker } from "components";
import { Color } from "globals/enums";
import {
  BackgroundFieldToolbarOptionLabel,
  BackgroundFieldToolbarOptionHeader,
  BackgroundFieldToolbarContainer,
  BackgroundFieldToolbarOptions,
  BackgroundFieldToolbarOptionButton,
  BackgroundFieldToolbarBkgImageIcon,
  BackgroundFieldToolbarBkgColorIcon,
  BackgroundFieldToolbarBkgGradiantIcon,
  BackgroundFieldToolbarChoiceContainer,
  BackgroundFieldToolbarColorText,
  BackgroundFieldToolbarBlackColorSquareIcon,
  BackgroundFieldToolbarGrayColorSquareIcon,
  BackgroundFieldToolbarLightGrayColorSquareIcon,
  BackgroundFieldToolbarWhiteColorSquareIcon,
  BackgroundFieldToolbarBlueGrayColorSquareIcon,
  BackgroundFieldToolbarRedColorSquareIcon,
  BackgroundFieldToolbarBlueColorSquareIcon,
  BackgroundFieldToolbarTurquoiseColorSquareIcon,
  BackgroundFieldToolbarGreenColorSquareIcon,
  BackgroundFieldToolbarYellowGreenColorSquareIcon,
  BackgroundFieldToolbarYellowColorSquareIcon,
  BackgroundFieldToolbarOrangeColorSquareIcon,
  BackgroundFieldToolbarColorOption,
  BackgroundFieldToolbarColorContainer,
  BackgroundFieldToolbarGradiantContainer,
  BackgroundFieldToolbarGradiantOption,
  BackgroundFieldToolbarYellowOrangeGradiantIcon,
  BackgroundFieldToolbarAquaGradiantIcon,
  BackgroundFieldToolbarBlueGreenGradiantIcon,
  BackgroundFieldToolbarDarkGreenGradiantIcon,
  BackgroundFieldToolbarDarkPurpleRedGradiantIcon,
  BackgroundFieldToolbarPinkOrangeGradiantIcon,
  BackgroundFieldToolbarPurpleBlueGradiantIcon,
  BackgroundFieldToolbarPurpleOrangeGradiantIcon,
  BackgroundFieldToolbarPurpleRedOrangeGradiantIcon,
  BackgroundFieldToolbarGradiantSelected,
  BackgroundFieldToolbarGradiantRectangleIcon,
  BackgroundFieldToolbarColorOptions,
  BackgroundFieldToolbarHexRgbImage
} from "./styles";
import hexRgbImage from "../../assets/hex-rgb-section.svg";
import gradiantDirection from "../../assets/gradiant-direction.png";
import californiaSky from "../../assets/california-sky.png"
import candyCrush from "../../assets/candy-crush.png"
import instagram from "../../assets/instagram.png"
import jungleBlush from "../../assets/jungle-blush.png"
import purpleHaze from "../../assets/purple-haze.png"
import savannahSun from "../../assets/savannah-sun.png"
import springTwilight from "../../assets/spring-twilight.png"
import tropicalOcean from "../../assets/tropical-ocean.png"
import winterDusk from "../../assets/winter-dusk.png"

const BackgroundFieldToolbar = ({
  id,
  field,
  currentImage,
  brickIndex,
  setBrickProps,
}: BackgroundFieldToolbarProps) => {
  useEffect(() => {
    let bkgImageOption = document.querySelector("#bkg-image-options > button:nth-child(1)") as HTMLElement;
    let bkgImageElement = document.querySelector("#background-image") as HTMLElement;

    if (bkgImageOption !== undefined) {
      bkgImageOption.classList.add("selected-option");
    }
    if (bkgImageElement !== undefined) {
      bkgImageElement.classList.add("selected")
    }
  }, []);

  const [colorVal, setColorVal] = useState<string>("transparent");

  const bkgImageOption = (e: React.FormEvent<HTMLElement>, bkgType: string) => {
    let element = e.currentTarget;
    let bkgImageOptions = document.querySelectorAll("#bkg-image-options > button");
    let bkgImageElement = document.querySelector("#background-image") as HTMLElement;
    let bkgColorElement = document.querySelector("#bkg-image-colors") as HTMLElement;
    let bkgGradiantElement = document.querySelector("#bkg-image-gradiants") as HTMLElement;

    for (let i = 0; i < bkgImageOptions.length; i++) {
      if (e.currentTarget !== bkgImageOptions[i]) {
        bkgImageOptions[i].classList.remove("selected-option");
      }
    }

    if (bkgType === "image") {
      bkgImageElement.classList.add("selected");
      bkgColorElement.classList.remove("selected");
      bkgGradiantElement.classList.remove("selected");
    } else if (bkgType === "color") {
      bkgImageElement.classList.remove("selected");
      bkgColorElement.classList.add("selected");
      bkgGradiantElement.classList.remove("selected");
    } else if (bkgType === "gradiant") {
      bkgImageElement.classList.remove("selected");
      bkgColorElement.classList.remove("selected");
      bkgGradiantElement.classList.add("selected");
    }

    element.classList.add("selected-option");
  }

  const updateBkgColor = (e: React.FormEvent<HTMLElement>, brickIndex: number, colorVal: Color) => {
    let colorOptions = document.querySelectorAll("#bkg-image-colors > div");
    let gradiantOptions = document.querySelectorAll("#bkg-image-gradiants > div:not(:last-of-type)");

    for (let i = 0; i < gradiantOptions.length; i++) {
      let element = gradiantOptions[i] as HTMLElement;
      element.classList.remove("selected");
    }

    for (let i = 0; i < colorOptions.length; i++) {
      if (colorOptions[i] !== e.currentTarget) {
        let element = colorOptions[i] as HTMLElement;
        element.classList.remove("selected");
      }
    }

    e.currentTarget.classList.add("selected");
    setColorVal(colorVal);
    setBrickProps(brickIndex, { backgroundColor: colorVal, background: "" });
  }

  const removeSwatchHighlight = () => {
    let colorOptions = document.querySelectorAll("#bkg-image-colors > div");

    for (let i = 0; i < colorOptions.length; i++) {
      let element = colorOptions[i] as HTMLElement;
      element.classList.remove("selected");
    }
  }

  const updateBkgGradiant = (e: React.FormEvent<HTMLElement>, brickIndex: number, gradiantVal: string) => {
    let gradiantOptions = document.querySelectorAll("#bkg-image-gradiants > div:not(:last-of-type)");
    let previewGradiant = document.querySelector("#bkg-image-gradiants > div:last-of-type svg") as HTMLElement;
    let colorOptions = document.querySelectorAll("#bkg-image-colors > div");
    let gradientBkg;

    for (let i = 0; i < colorOptions.length; i++) {
      let element = colorOptions[i] as HTMLElement;
      element.classList.remove("selected");
    }

    for (let i = 0; i < gradiantOptions.length; i++) {
      if (gradiantOptions[i] !== e.currentTarget) {
        let element = gradiantOptions[i] as HTMLElement;
        element.classList.remove("selected");
      }
    }

    e.currentTarget.classList.add("selected");
    previewGradiant.style.fill = `url(#${gradiantVal})`;

    switch (gradiantVal) {
      case "yellow-orange-gradient":
        gradientBkg = savannahSun;
        break;
      case "pink-orange-gradient":
        gradientBkg = candyCrush;
        break;
      case "purple-orange-gradient":
        gradientBkg = purpleHaze;
        break;
      case "blue-green-gradient":
        gradientBkg = tropicalOcean;
        break;
      case "purple-red-orange-gradient":
        gradientBkg = instagram;
        break;
      case "aqua-gradient":
        gradientBkg = californiaSky;
        break;
      case "dark-purple-red-gradient":
        gradientBkg = winterDusk;
        break;
      case "dark-green-gradient":
        gradientBkg = jungleBlush;
        break;
      case "purple-blue-gradient":
        gradientBkg = springTwilight;
        break;
    }

    setBrickProps(brickIndex, { background: gradientBkg, backgroundColor: "" });
  }

  return (
    <>
      <BackgroundFieldToolbarOptionHeader>
        Hero Background
      </BackgroundFieldToolbarOptionHeader>

      <BackgroundFieldToolbarContainer>
        <BackgroundFieldToolbarOptions id="bkg-image-options">
          <BackgroundFieldToolbarOptionButton
            type="button"
            onClick={e => bkgImageOption(e, "image")}
            className="selected-option"
          >
            <BackgroundFieldToolbarBkgImageIcon />
          </BackgroundFieldToolbarOptionButton>
          <BackgroundFieldToolbarOptionButton
            type="button"
            onClick={e => bkgImageOption(e, "color")}
          >
            <BackgroundFieldToolbarBkgColorIcon />
          </BackgroundFieldToolbarOptionButton>
          <BackgroundFieldToolbarOptionButton
            type="button"
            onClick={e => bkgImageOption(e, "gradiant")}
          >
            <BackgroundFieldToolbarBkgGradiantIcon />
          </BackgroundFieldToolbarOptionButton>
        </BackgroundFieldToolbarOptions>
      </BackgroundFieldToolbarContainer>

      <BackgroundFieldToolbarChoiceContainer id="background-image">
        <ImagePicker
          currentImage={currentImage}
          previewText={"Background"}
          onImageSelect={(image: string) => {
            setBrickProps(brickIndex, { background: image, backgroundColor: "" });
          }}
        />

        <BackgroundFieldToolbarOptionLabel>(CLICK TO CHANGE)</BackgroundFieldToolbarOptionLabel>
      </BackgroundFieldToolbarChoiceContainer>

      <BackgroundFieldToolbarColorContainer id="bkg-image-colors">
        <BackgroundFieldToolbarColorText>PRESETS</BackgroundFieldToolbarColorText>

        <BackgroundFieldToolbarColorOption onClick={e => updateBkgColor(e, brickIndex, Color.Black)}>
          <BackgroundFieldToolbarBlackColorSquareIcon />
        </BackgroundFieldToolbarColorOption>

        <BackgroundFieldToolbarColorOption onClick={e => updateBkgColor(e, brickIndex, Color.Gray7)}>
          <BackgroundFieldToolbarGrayColorSquareIcon />
        </BackgroundFieldToolbarColorOption>

        <BackgroundFieldToolbarColorOption onClick={e => updateBkgColor(e, brickIndex, Color.Gray4)}>
          <BackgroundFieldToolbarLightGrayColorSquareIcon />
        </BackgroundFieldToolbarColorOption>

        <BackgroundFieldToolbarColorOption onClick={e => updateBkgColor(e, brickIndex, Color.White)}>
          <BackgroundFieldToolbarWhiteColorSquareIcon />
        </BackgroundFieldToolbarColorOption>

        <BackgroundFieldToolbarColorOption onClick={e => updateBkgColor(e, brickIndex, Color.BlueGray)}>
          <BackgroundFieldToolbarBlueGrayColorSquareIcon />
        </BackgroundFieldToolbarColorOption>

        <BackgroundFieldToolbarColorOption onClick={e => updateBkgColor(e, brickIndex, Color.Red)}>
          <BackgroundFieldToolbarRedColorSquareIcon />
        </BackgroundFieldToolbarColorOption>

        <BackgroundFieldToolbarColorOption onClick={e => updateBkgColor(e, brickIndex, Color.Blue)}>
          <BackgroundFieldToolbarBlueColorSquareIcon />
        </BackgroundFieldToolbarColorOption>

        <BackgroundFieldToolbarColorOption onClick={e => updateBkgColor(e, brickIndex, Color.Turquoise)}>
          <BackgroundFieldToolbarTurquoiseColorSquareIcon />
        </BackgroundFieldToolbarColorOption>

        <BackgroundFieldToolbarColorOption onClick={e => updateBkgColor(e, brickIndex, Color.Green)}>
          <BackgroundFieldToolbarGreenColorSquareIcon />
        </BackgroundFieldToolbarColorOption>

        <BackgroundFieldToolbarColorOption onClick={e => updateBkgColor(e, brickIndex, Color.YellowGreen)}>
          <BackgroundFieldToolbarYellowGreenColorSquareIcon />
        </BackgroundFieldToolbarColorOption>

        <BackgroundFieldToolbarColorOption onClick={e => updateBkgColor(e, brickIndex, Color.Yellow)}>
          <BackgroundFieldToolbarYellowColorSquareIcon />
        </BackgroundFieldToolbarColorOption>

        <BackgroundFieldToolbarColorOption onClick={e => updateBkgColor(e, brickIndex, Color.Orange)}>
          <BackgroundFieldToolbarOrangeColorSquareIcon />
        </BackgroundFieldToolbarColorOption>

        <SketchPicker
          color={colorVal}
          onChange={color => {
            setColorVal(color.hex);
            setBrickProps(brickIndex, { backgroundColor: color.hex, background: "" });
            removeSwatchHighlight();
          }}
          width="auto"
        />

        <BackgroundFieldToolbarHexRgbImage src={hexRgbImage} />
      </BackgroundFieldToolbarColorContainer>

      <BackgroundFieldToolbarGradiantContainer id="bkg-image-gradiants">
        <BackgroundFieldToolbarColorText>PRESETS</BackgroundFieldToolbarColorText>

        <BackgroundFieldToolbarGradiantOption onClick={e => updateBkgGradiant(e, brickIndex, "yellow-orange-gradient")}>
          <BackgroundFieldToolbarYellowOrangeGradiantIcon />
        </BackgroundFieldToolbarGradiantOption>

        <BackgroundFieldToolbarGradiantOption onClick={e => updateBkgGradiant(e, brickIndex, "pink-orange-gradient")}>
          <BackgroundFieldToolbarPinkOrangeGradiantIcon />
        </BackgroundFieldToolbarGradiantOption>

        <BackgroundFieldToolbarGradiantOption onClick={e => updateBkgGradiant(e, brickIndex, "purple-orange-gradient")}>
          <BackgroundFieldToolbarPurpleOrangeGradiantIcon />
        </BackgroundFieldToolbarGradiantOption>

        <BackgroundFieldToolbarGradiantOption onClick={e => updateBkgGradiant(e, brickIndex, "blue-green-gradient")}>
          <BackgroundFieldToolbarBlueGreenGradiantIcon />
        </BackgroundFieldToolbarGradiantOption>

        <BackgroundFieldToolbarGradiantOption onClick={e => updateBkgGradiant(e, brickIndex, "purple-red-orange-gradient")}>
          <BackgroundFieldToolbarPurpleRedOrangeGradiantIcon />
        </BackgroundFieldToolbarGradiantOption>

        <BackgroundFieldToolbarGradiantOption onClick={e => updateBkgGradiant(e, brickIndex, "aqua-gradient")}>
          <BackgroundFieldToolbarAquaGradiantIcon />
        </BackgroundFieldToolbarGradiantOption>

        <BackgroundFieldToolbarGradiantOption onClick={e => updateBkgGradiant(e, brickIndex, "dark-purple-red-gradient")}>
          <BackgroundFieldToolbarDarkPurpleRedGradiantIcon />
        </BackgroundFieldToolbarGradiantOption>

        <BackgroundFieldToolbarGradiantOption onClick={e => updateBkgGradiant(e, brickIndex, "dark-green-gradient")}>
          <BackgroundFieldToolbarDarkGreenGradiantIcon />
        </BackgroundFieldToolbarGradiantOption>

        <BackgroundFieldToolbarGradiantOption onClick={e => updateBkgGradiant(e, brickIndex, "purple-blue-gradient")}>
          <BackgroundFieldToolbarPurpleBlueGradiantIcon />
        </BackgroundFieldToolbarGradiantOption>

        <BackgroundFieldToolbarColorText>PREVIEW</BackgroundFieldToolbarColorText>

        <BackgroundFieldToolbarGradiantSelected>
          <BackgroundFieldToolbarGradiantRectangleIcon />
        </BackgroundFieldToolbarGradiantSelected>

        <BackgroundFieldToolbarColorOptions src={gradiantDirection} />
      </BackgroundFieldToolbarGradiantContainer>
    </>
  );
};

export default BackgroundFieldToolbar;
