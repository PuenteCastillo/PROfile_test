import {
  SimpleTextFieldInput,
  SimpleTextFieldInputContainer,
  SimpleTextFieldContainer,
  SimpleTextFieldLabel
} from "./styles";

const SimpleTextField = ({
  field,
  brickIndex,
  setBrickProps,
}: SimpleTextFieldProps) => {

  return (
    <>
      <SimpleTextFieldLabel>{field.fieldLabel}</SimpleTextFieldLabel>

      <SimpleTextFieldContainer id={field.fieldId}>
        <SimpleTextFieldInputContainer>
          <SimpleTextFieldInput
            defaultValue={field.fieldValue}
            onChange={e => {
              const fieldObj = { ...field };
              fieldObj.fieldValue = e.target.value;
              setBrickProps(brickIndex, { [field.propName]: fieldObj });
            }}
          />
        </SimpleTextFieldInputContainer>
            
      </SimpleTextFieldContainer>
    </>
  );
};

export default SimpleTextField;
