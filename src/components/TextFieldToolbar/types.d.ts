type TextFieldToolbarProps = {
  id: string;
  field: EditableTextField;
  fontFamilies: Array<string>;
  fontSizeRange: Array<number>;
  lineHeightRange: Array<number>;
  brickIndex: number;
  setBrickProps: Dispatch<SetStateAction<{index: number, props: any}>>;
};
