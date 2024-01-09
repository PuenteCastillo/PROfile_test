import { useEffect } from "react";
import { Color, FontFamily, FontStyle, FontWeight, TextAlign, TextDecoration, TextTransform } from "globals/enums";
import {
  TextFieldToolbarContainer,
  TextFieldToolbarFontTypeContainer,
  TextFieldToolbarDropdownContainer,
  TextFieldToolbarDropdownButton,
  TextFieldToolbarDropdownSelected,
  TextFieldToolbarDropdownArrowIcon,
  TextFieldToolbarDropdown,
  TextFieldToolbarDropdownOption,
  TextFieldToolbarFontOptionsContainer,
  TextFieldToolbarFontOptionsTwoItemGrid,
  TextFieldToolbarLineHeightIcon,
  TextFieldToolbarFontOptionsFourItemGrid,
  TextFieldToolbarFontOptionButton,
  TextFieldToolbarBoldIcon,
  TextFieldToolbarItalicIcon,
  TextFieldToolbarUnderlineIcon,
  TextFieldToolbarCapitalizeIcon,
  TextFieldToolbarLeftAlignIcon,
  TextFieldToolbarCenterAlignIcon,
  TextFieldToolbarRightAlignIcon,
  TextFieldToolbarColorSquareIcon,
  TextFieldToolbarBlackColorSquareIcon,
  TextFieldToolbarGrayColorSquareIcon,
  TextFieldToolbarLightGrayColorSquareIcon,
  TextFieldToolbarWhiteColorSquareIcon,
  TextFieldToolbarBlueGrayColorSquareIcon,
  TextFieldToolbarRedColorSquareIcon,
  TextFieldToolbarBlueColorSquareIcon,
  TextFieldToolbarTurquoiseColorSquareIcon,
  TextFieldToolbarGreenColorSquareIcon,
  TextFieldToolbarYellowGreenColorSquareIcon,
  TextFieldToolbarYellowColorSquareIcon,
  TextFieldToolbarOrangeColorSquareIcon,
  TextFieldColorOptions
} from "./styles";
import colorOptions from "../../assets/color-options.png";

const TextFieldToolbar = ({
  id,
  field,
  fontFamilies,
  fontSizeRange,
  lineHeightRange,
  brickIndex,
  setBrickProps,
}: TextFieldToolbarProps) =>
{
  if (fontFamilies.length == 0) {
    fontFamilies.push(FontFamily.Arvo);
    fontFamilies.push(FontFamily.Anton_Thick);
    fontFamilies.push(FontFamily.Baskerville);
    fontFamilies.push(FontFamily.Inter);
    fontFamilies.push(FontFamily.Lora);
    fontFamilies.push(FontFamily.Merriweather);
    fontFamilies.push(FontFamily.Montserrat);
    fontFamilies.push(FontFamily.Open_Sans);
    fontFamilies.push(FontFamily.Poppins);
    fontFamilies.push(FontFamily.PT_Serif);
    fontFamilies.push(FontFamily.Roboto);
    fontFamilies.push(FontFamily.Sans_Serif);
    fontFamilies.push(FontFamily.Serif);
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  
  const handleClickOutside = (e: any) => {
    let fontTypeButton = document.querySelector("button.font-type") as HTMLElement;
    let lineHeightButton = document.querySelector("button.line-height") as HTMLElement;
    let fontSizeButton = document.querySelector("button.font-size") as HTMLElement;
    let fontColorButton = document.querySelector("button.font-color") as HTMLElement;

    let buttonArray = [fontTypeButton, lineHeightButton, fontSizeButton, fontColorButton];

    for (let i = 0; i < buttonArray.length; i++) {
      let dropdown = buttonArray[i].nextElementSibling as HTMLElement;

      if (e.target !== buttonArray[i] && !buttonArray[i].contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("visible");
      }
    }
  };

  const showHideDropdown = (e: React.FormEvent<HTMLButtonElement>) => {
    let element = e.currentTarget;
    let selectedDropdown = element.nextElementSibling as HTMLElement;
    let fontTypeButton = document.querySelector("button.font-type") as HTMLElement;
    let lineHeightButton = document.querySelector("button.line-height") as HTMLElement;
    let fontSizeButton = document.querySelector("button.font-size") as HTMLElement;
    let fontColorButton = document.querySelector("button.font-color") as HTMLElement;
    let fontTypeDropdown = fontTypeButton.nextElementSibling as HTMLElement;
    let lineHeightDropdown = lineHeightButton.nextElementSibling as HTMLElement;
    let fontSizeDropdown = fontSizeButton.nextElementSibling as HTMLElement;
    let fontColorDropdown = fontColorButton.nextElementSibling as HTMLElement;

    let dropdownArray = [fontTypeDropdown, lineHeightDropdown, fontSizeDropdown, fontColorDropdown];
  
    for (var i = 0; i < dropdownArray.length; i++) {
      if (dropdownArray[i] !== selectedDropdown) {
        dropdownArray[i].classList.remove("visible");
      }
    }

    selectedDropdown.classList.toggle("visible");
  }

  const updateFontFamily = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    brickIndex: number
  ) => {
    const fieldObj = {...field};
    fieldObj.fontFamily = e.currentTarget.innerHTML;
    setBrickProps(brickIndex, { [field.propName]: fieldObj });
  }

  const updateFontSize = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    brickIndex: number
  ) => {
    const fieldObj = {...field};
    fieldObj.fontSize = Number(e.currentTarget.innerHTML);
    setBrickProps(brickIndex, { [field.propName]: fieldObj });
  }

  const updateLineHeight = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    brickIndex: number
  ) => {
    const fieldObj = {...field};
    fieldObj.lineHeight = Number(e.currentTarget.innerHTML);
    setBrickProps(brickIndex, { [field.propName]: fieldObj });
  }

  const updateFontWeight =  (
    e: React.FormEvent<HTMLButtonElement>,
    brickIndex: number
  ) => {
    const element = e.currentTarget;
    element.classList.toggle("active");
    const fieldObj = {...field};
    fieldObj.fontWeight = element.classList.contains("active") ? FontWeight.Bold : FontWeight.Normal;
    setBrickProps(brickIndex, { [field.propName]: fieldObj });
  }

  const updateFontStyle =  (
    e: React.FormEvent<HTMLButtonElement>,
    brickIndex: number
  ) => {
    const element = e.currentTarget;
    element.classList.toggle("active");
    const fieldObj = {...field};
    fieldObj.fontStyle = element.classList.contains("active") ? FontStyle.Italic : FontStyle.Normal;
    setBrickProps(brickIndex, { [field.propName]: fieldObj });
  }

  const updateTextDecoration =  (
    e: React.FormEvent<HTMLButtonElement>,
    brickIndex: number
  ) => {
    const element = e.currentTarget;
    element.classList.toggle("active");
    const fieldObj = {...field};
    fieldObj.textDecoration = element.classList.contains("active") ? TextDecoration.Underline : TextDecoration.None;
    setBrickProps(brickIndex, { [field.propName]: fieldObj });
  }

  const updateTextTransform =  (
    e: React.FormEvent<HTMLButtonElement>,
    brickIndex: number
  ) => {
    const element = e.currentTarget;
    element.classList.toggle("active");
    const fieldObj = {...field};
    fieldObj.textTransform = element.classList.contains("active") ? TextTransform.Uppercase : TextTransform.None;
    setBrickProps(brickIndex, { [field.propName]: fieldObj });
  }

  const updateTextAlignment =  (
    e: React.FormEvent<HTMLButtonElement>,
    brickIndex: number,
    textAlignVal: TextAlign
  ) => {
    const element = e.currentTarget;
    let leftAlignBtn = element;
    let centerAlignBtn = element;
    let rightAlignBtn = element;

    switch (textAlignVal) {
      case TextAlign.Left:
        centerAlignBtn = element.nextElementSibling as HTMLButtonElement;
        rightAlignBtn = centerAlignBtn.nextElementSibling as HTMLButtonElement;
        leftAlignBtn.classList.add("active");
        centerAlignBtn.classList.remove("active");
        rightAlignBtn.classList.remove("active");
        break;
      case TextAlign.Center:
        leftAlignBtn = element.previousElementSibling as HTMLButtonElement;
        rightAlignBtn = element.nextElementSibling as HTMLButtonElement;
        leftAlignBtn.classList.remove("active");
        centerAlignBtn.classList.add("active");
        rightAlignBtn.classList.remove("active");
        break;
      case TextAlign.Right:
        centerAlignBtn = element.previousElementSibling as HTMLButtonElement;
        leftAlignBtn = centerAlignBtn.previousElementSibling as HTMLButtonElement;
        leftAlignBtn.classList.remove("active");
        centerAlignBtn.classList.remove("active");
        rightAlignBtn.classList.add("active");
        break;
    }
    const fieldObj = {...field};
    fieldObj.textAlign = textAlignVal;
    setBrickProps(brickIndex, { [field.propName]: fieldObj });
  }

  const updateColor = (
    e: React.FormEvent<HTMLElement>,
    brickIndex: number,
    colorVal: Color
  ) => {
    const fieldObj = {...field};
    fieldObj.color = colorVal;
    let colorOptions = document.querySelectorAll(".color-dropdown > p");

    for (let i = 0; i < colorOptions.length; i++) {
      if (colorOptions[i] !== e.currentTarget) {
        let element = colorOptions[i] as HTMLElement;
        element.classList.remove("selected");
      }
    }

    e.currentTarget.classList.add("selected");
    setBrickProps(brickIndex, { [field.propName]: fieldObj });
  }

  return (
    <>
      <TextFieldToolbarContainer id={id}>
        <TextFieldToolbarFontTypeContainer>
          <TextFieldToolbarDropdownContainer>
            <TextFieldToolbarDropdownButton type="button" className="font-type" onClick={showHideDropdown}>
              <TextFieldToolbarDropdownSelected>{field.fontFamily}</TextFieldToolbarDropdownSelected>
              <TextFieldToolbarDropdownArrowIcon />
            </TextFieldToolbarDropdownButton>

            <TextFieldToolbarDropdown>
              {fontFamilies.map((item, idx) => {
                return (
                  <TextFieldToolbarDropdownOption key={idx} onClick={e => updateFontFamily(e, brickIndex)}>
                    {item}
                  </TextFieldToolbarDropdownOption>
                );
              })}
            </TextFieldToolbarDropdown>
          </TextFieldToolbarDropdownContainer>
        </TextFieldToolbarFontTypeContainer>

        <TextFieldToolbarFontOptionsContainer>
          <TextFieldToolbarFontOptionsTwoItemGrid>
            <TextFieldToolbarDropdownContainer>
              <TextFieldToolbarDropdownButton type="button" className="font-size" onClick={showHideDropdown}>
                <TextFieldToolbarDropdownSelected>{field.fontSize}</TextFieldToolbarDropdownSelected>
                <TextFieldToolbarDropdownArrowIcon />
              </TextFieldToolbarDropdownButton>

              <TextFieldToolbarDropdown>
                {fontSizeRange.map((item, idx) => {
                  return (
                    <TextFieldToolbarDropdownOption key={idx} onClick={e => updateFontSize(e, brickIndex)}>
                      {item}
                    </TextFieldToolbarDropdownOption>
                  );
                })}
              </TextFieldToolbarDropdown>
            </TextFieldToolbarDropdownContainer>

            <TextFieldToolbarDropdownContainer>
              <TextFieldToolbarDropdownButton type="button" className="line-height" onClick={showHideDropdown}>
                <TextFieldToolbarLineHeightIcon />
                <TextFieldToolbarDropdownSelected>{field.lineHeight}</TextFieldToolbarDropdownSelected>
                <TextFieldToolbarDropdownArrowIcon />
              </TextFieldToolbarDropdownButton>

              <TextFieldToolbarDropdown>
                {lineHeightRange.map((item, idx) => {
                  return (
                    <TextFieldToolbarDropdownOption key={idx} onClick={e => updateLineHeight(e, brickIndex)}>
                      {item}
                    </TextFieldToolbarDropdownOption>
                  );
                })}
              </TextFieldToolbarDropdown>
            </TextFieldToolbarDropdownContainer>
          </TextFieldToolbarFontOptionsTwoItemGrid>

          <TextFieldToolbarFontOptionsFourItemGrid>
            <TextFieldToolbarFontOptionButton onClick={e => updateFontWeight(e, brickIndex)}>
              <TextFieldToolbarBoldIcon />
            </TextFieldToolbarFontOptionButton>

            <TextFieldToolbarFontOptionButton onClick={e => updateFontStyle(e, brickIndex)}>
              <TextFieldToolbarItalicIcon />
            </TextFieldToolbarFontOptionButton>

            <TextFieldToolbarFontOptionButton onClick={e => updateTextDecoration(e, brickIndex)}>
              <TextFieldToolbarUnderlineIcon />
            </TextFieldToolbarFontOptionButton>

            <TextFieldToolbarFontOptionButton onClick={e => updateTextTransform(e, brickIndex)}>
              <TextFieldToolbarCapitalizeIcon />
            </TextFieldToolbarFontOptionButton>

            <TextFieldToolbarFontOptionButton onClick={e => updateTextAlignment(e, brickIndex, TextAlign.Left)}>
              <TextFieldToolbarLeftAlignIcon />
            </TextFieldToolbarFontOptionButton>

            <TextFieldToolbarFontOptionButton onClick={e => updateTextAlignment(e, brickIndex, TextAlign.Center)}>
              <TextFieldToolbarCenterAlignIcon />
            </TextFieldToolbarFontOptionButton>

            <TextFieldToolbarFontOptionButton onClick={e => updateTextAlignment(e, brickIndex, TextAlign.Right)} className="active">
              <TextFieldToolbarRightAlignIcon />
            </TextFieldToolbarFontOptionButton>
          </TextFieldToolbarFontOptionsFourItemGrid>

          <TextFieldToolbarDropdownContainer>
            <TextFieldToolbarDropdownButton type="button" className="font-color" onClick={showHideDropdown}>
              <TextFieldToolbarColorSquareIcon style={{ fill: field.color }} />
              <TextFieldToolbarDropdownSelected>{field.color.toUpperCase()}</TextFieldToolbarDropdownSelected>
              <TextFieldToolbarDropdownArrowIcon />
            </TextFieldToolbarDropdownButton>

            <TextFieldToolbarDropdown className="color-dropdown">
              <TextFieldToolbarDropdownOption onClick={e => updateColor(e, brickIndex, Color.Black)}>
                <TextFieldToolbarBlackColorSquareIcon />
              </TextFieldToolbarDropdownOption>

              <TextFieldToolbarDropdownOption onClick={e => updateColor(e, brickIndex, Color.Gray6)}>
                <TextFieldToolbarGrayColorSquareIcon />
              </TextFieldToolbarDropdownOption>

              <TextFieldToolbarDropdownOption onClick={e => updateColor(e, brickIndex, Color.Gray4)}>
                <TextFieldToolbarLightGrayColorSquareIcon />
              </TextFieldToolbarDropdownOption>
              
              <TextFieldToolbarDropdownOption onClick={e => updateColor(e, brickIndex, Color.White)}>
                <TextFieldToolbarWhiteColorSquareIcon />
              </TextFieldToolbarDropdownOption>

              <TextFieldToolbarDropdownOption onClick={e => updateColor(e, brickIndex, Color.BlueGray)}>
                <TextFieldToolbarBlueGrayColorSquareIcon />
              </TextFieldToolbarDropdownOption>

              <TextFieldToolbarDropdownOption onClick={e => updateColor(e, brickIndex, Color.Red)}>
                <TextFieldToolbarRedColorSquareIcon />
              </TextFieldToolbarDropdownOption>

              <TextFieldToolbarDropdownOption onClick={e => updateColor(e, brickIndex, Color.Blue)}>
                <TextFieldToolbarBlueColorSquareIcon />
              </TextFieldToolbarDropdownOption>

              <TextFieldToolbarDropdownOption onClick={e => updateColor(e, brickIndex, Color.Turquoise)}>
                <TextFieldToolbarTurquoiseColorSquareIcon />
              </TextFieldToolbarDropdownOption>

              <TextFieldToolbarDropdownOption onClick={e => updateColor(e, brickIndex, Color.Green)}>
                <TextFieldToolbarGreenColorSquareIcon />
              </TextFieldToolbarDropdownOption>

              <TextFieldToolbarDropdownOption onClick={e => updateColor(e, brickIndex, Color.YellowGreen)}>
                <TextFieldToolbarYellowGreenColorSquareIcon />
              </TextFieldToolbarDropdownOption>

              <TextFieldToolbarDropdownOption onClick={e => updateColor(e, brickIndex, Color.Yellow)}>
                <TextFieldToolbarYellowColorSquareIcon />
              </TextFieldToolbarDropdownOption>

              <TextFieldToolbarDropdownOption onClick={e => updateColor(e, brickIndex, Color.Orange)}>
                <TextFieldToolbarOrangeColorSquareIcon />
              </TextFieldToolbarDropdownOption>

              <TextFieldColorOptions src={colorOptions} />
            </TextFieldToolbarDropdown>
          </TextFieldToolbarDropdownContainer>
        </TextFieldToolbarFontOptionsContainer>
      </TextFieldToolbarContainer>
    </>
  );
};

export default TextFieldToolbar;
