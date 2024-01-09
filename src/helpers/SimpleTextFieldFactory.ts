import { SimpleTextField } from "globals/types";

class SimpleTextFieldFactory {

  static createField = (
    brickName: string,
    propName: string,
    fieldLabel: string,
    fieldValue: string,
    fontSize: number,
    color: string,
    brickAddedCt: number
  ) : SimpleTextField => {

    const fieldObj = {
      propName: propName,
      fieldId: brickName + "_" + propName + "_" + brickAddedCt.toString(),
      fieldLabel: fieldLabel,
      fieldValue: fieldValue,
      defaultValue: fieldValue,
      fontSize: fontSize,
      color: color
    }
    return fieldObj;
  };
};

export default SimpleTextFieldFactory;
