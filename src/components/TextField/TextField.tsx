import TextFieldToolbar from "components/TextFieldToolbar";
import {
  TextFieldInput,
  TextFieldInputContainer,
  TextFieldContainer,
  TextFieldLabel,
  TextFieldEditIcon,
  AddTextFieldContainer,
  AddTextFieldButton,
  AddTextFieldPlusIcon,
  AddTextFieldSpan,
  TextFieldLabelContainer,
  TextFieldDeleteFieldLink,
  TextFieldLabelWrapper,
  TextFieldDeleteFieldLinkContainer
} from "./styles";

const TextField = ({
  field,
  fontFamilies,
  fontSizeRange,
  lineHeightRange,
  toggleToolbars,
  brickIndex,
  setBrickProps,
}: TextFieldProps) => {

  const addField = () => {
    // Show input text field & trash can icon
    const textInputContainer = document.querySelector("#" + field.fieldId + " > div") as HTMLElement;
    const trashCanButton = document.querySelector("#delete_" + field.fieldId) as HTMLElement;
    textInputContainer.style.display = "block";
    trashCanButton.style.display = "none";

    // Hide add field button
    const addTextInputButton = document.querySelector("#add_" + field.fieldId) as HTMLElement;
    addTextInputButton.style.display = "none";

    const fieldObj = { ...field };
    fieldObj.fieldValue = field.defaultValue;
    setBrickProps(brickIndex, { [field.propName]: fieldObj });
  };

  const deleteField = () => {
    // Hide input text field, trash can icon, and toolbar
    const textInputContainer = document.querySelector("#" + field.fieldId + " > div") as HTMLElement;
    const trashCanButton = document.querySelector("#delete_" + field.fieldId) as HTMLElement;
    const toolbarContainer = document.querySelector("#toolbar_" + field.fieldId) as HTMLElement;
    textInputContainer.style.display = "none";
    trashCanButton.style.display = "none";
    toolbarContainer.style.display = "none";
    field.isToolbarOpen = false;

    // Show field as button with plus sign
    const addTextInputButton = document.querySelector("#add_" + field.fieldId) as HTMLElement;
    addTextInputButton.style.display = "block";

    const fieldObj = { ...field };
    fieldObj.fieldValue = "";
    setBrickProps(brickIndex, { [field.propName]: fieldObj });
  };

  const highlightTextInput = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const textInput = document.querySelector("#input_" + field.fieldId) as HTMLElement;
    if (textInput.classList.contains("highlight")) {
      e.currentTarget.focus();
      textInput.classList.remove("highlight");  
    } else {
      textInput.focus();
      textInput.classList.add("highlight");
    }
  };

  return (
    <>
      <TextFieldLabelWrapper>
        <TextFieldLabelContainer>
          <TextFieldLabel>{field.fieldLabel}</TextFieldLabel>
        </TextFieldLabelContainer>
        <TextFieldDeleteFieldLinkContainer>
          <TextFieldDeleteFieldLink
            id={"delete_" + field.fieldId}
            onClick={() => deleteField()}>
            Delete field
          </TextFieldDeleteFieldLink>
        </TextFieldDeleteFieldLinkContainer>
      </TextFieldLabelWrapper>

      <TextFieldContainer id={field.fieldId}>
        <TextFieldInputContainer>
          <TextFieldInput
            id={"input_" + field.fieldId}
            defaultValue={field.fieldValue}
            onChange={e => {
              const fieldObj = { ...field };
              fieldObj.fieldValue = e.target.value;
              setBrickProps(brickIndex, { [field.propName]: fieldObj });
            }}
          />
          <TextFieldEditIcon
            onClick={e => {
              highlightTextInput(e);
              toggleToolbars(e);
            }}
          />
        </TextFieldInputContainer>
      </TextFieldContainer>

      <TextFieldToolbar id={"toolbar_" + field.fieldId}
        field={field}
        fontFamilies={fontFamilies}
        fontSizeRange={fontSizeRange}
        lineHeightRange={lineHeightRange}
        brickIndex={brickIndex}
        setBrickProps={setBrickProps}
      />

      <AddTextFieldContainer id={"add_" + field.fieldId}>
        <AddTextFieldButton onClick={() => addField()}>
          <AddTextFieldPlusIcon />
          <AddTextFieldSpan>Add {field.fieldLabel} Text</AddTextFieldSpan>
        </AddTextFieldButton>
      </AddTextFieldContainer>
    </>
  );
};

export default TextField;
