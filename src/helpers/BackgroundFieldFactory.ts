import { EditableBackgroundField } from "globals/types";

class BackgroundFieldFactory {

  static createField = (
    brickName: string,
    propName: string,
    fieldLabel: string,
    fieldValue: string,
    bricksAddedCt: number,
    propOverrides?: any
  ) : EditableBackgroundField => {

    const defaultValues = {
      isToolbarOpen: false  
    };
    let fieldObj = {
      ...defaultValues,
      propName: propName,
      fieldId: brickName + "_" + propName + "_" + bricksAddedCt.toString(),
      fieldLabel: fieldLabel,
      fieldValue: fieldValue,
      defaultValue: fieldValue,
    }
    if (propOverrides !== null) {
      fieldObj = {
        ...fieldObj,
        ...propOverrides
      }
    }
    return fieldObj;
  };
};

export default BackgroundFieldFactory;
