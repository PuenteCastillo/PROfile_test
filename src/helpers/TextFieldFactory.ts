import { EditableTextField } from "globals/types";
import { Color, FontFamily, FontStyle, FontWeight, TextAlign, TextDecoration, TextTransform } from "../globals/enums";

class TextFieldFactory {

  static createField = (
    brickName: string,
    propName: string,
    fieldLabel: string,
    fieldValue: string,
    fontSize: number,
    brickAddedCt: number,
    propOverrides?: any
  ) : EditableTextField => {

    const defaultValues = {
      fontFamily: FontFamily.Inter,
      fontWeight: FontWeight.Normal,
      fontStyle: FontStyle.Normal,
      textDecoration: TextDecoration.None,
      textTransform: TextTransform.None,
      textAlign: TextAlign.Right,
      color: Color.Blue,
      isToolbarOpen: false  
    };
    let fieldObj = {
      ...defaultValues,
      propName: propName,
      fieldId: brickName + "_" + propName + "_" + brickAddedCt.toString(),
      fieldLabel: fieldLabel,
      fieldValue: fieldValue,
      defaultValue: fieldValue,
      fontSize: fontSize,
      lineHeight: fontSize
    }
    if (propOverrides !== null) {
      fieldObj = {
        ...fieldObj,
        ...propOverrides
      }
    }
    return fieldObj;
  };

  static textTransform = (textTransform: string) => {
    switch (textTransform) {
      case TextTransform.None:
        return TextTransform.None;
      case TextTransform.Uppercase:
        return TextTransform.Uppercase;
    }
  };

  static textAlign = (textAlign: string) => {
    switch (textAlign) {
      case TextAlign.Left:
        return TextAlign.Left;
      case TextAlign.Center:
        return TextAlign.Center;
      case TextAlign.Right:
        return TextAlign.Right;
    }
  };
};

export default TextFieldFactory;
