type ImageFieldProps = {
  field: EditableImageField;
  brickIndex: number;
  setBrickProps: Dispatch<SetStateAction<{index: number, props: any}>>;
};