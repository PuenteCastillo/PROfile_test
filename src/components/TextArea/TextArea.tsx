import TextFieldToolbar from "components/TextFieldToolbar";
import {
  TextAreaInput,
  TextAreaInputContainer,
  TextAreaContainer,
  TextAreaLabel,
  TextAreaEditIcon,
  AddTextAreaContainer,
  AddTextAreaButton,
  AddTextAreaPlusIcon,
  AddTextAreaSpan,
  TextAreaLabelContainer,
  TextAreaDeleteFieldLink,
  TextAreaLabelWrapper,
  TextAreaDeleteFieldLinkContainer
} from "./styles";

const TextArea = ({
  field,
  fontFamilies,
  fontSizeRange,
  lineHeightRange,
  toggleToolbars,
  brickIndex,
  setBrickProps,
}: TextAreaProps) => {

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
      <TextAreaLabelWrapper>
        <TextAreaLabelContainer>
          <TextAreaLabel>{field.fieldLabel}</TextAreaLabel>
        </TextAreaLabelContainer>
        <TextAreaDeleteFieldLinkContainer>
          <TextAreaDeleteFieldLink
            id={"delete_" + field.fieldId}
            onClick={() => deleteField()}>
            Delete field
          </TextAreaDeleteFieldLink>
        </TextAreaDeleteFieldLinkContainer>
      </TextAreaLabelWrapper>

      <TextAreaContainer id={field.fieldId}>
        <TextAreaInputContainer>
          <TextAreaInput
            id={"input_" + field.fieldId}
            defaultValue={field.fieldValue}
            onChange={e => {
              const fieldObj = { ...field };
              fieldObj.fieldValue = e.target.value;
              setBrickProps(brickIndex, { [field.propName]: fieldObj });
            }}
          />
          <TextAreaEditIcon
            onClick={e => {
              highlightTextInput(e);
              toggleToolbars(e);
            }}
          />
        </TextAreaInputContainer>
      </TextAreaContainer>

      <TextFieldToolbar id={"toolbar_" + field.fieldId}
        field={field}
        fontFamilies={fontFamilies}
        fontSizeRange={fontSizeRange}
        lineHeightRange={lineHeightRange}
        brickIndex={brickIndex}
        setBrickProps={setBrickProps}
      />

      <AddTextAreaContainer id={"add_" + field.fieldId}>
        <AddTextAreaButton onClick={() => addField()}>
          <AddTextAreaPlusIcon />
          <AddTextAreaSpan>Add {field.fieldLabel} Text</AddTextAreaSpan>
        </AddTextAreaButton>
      </AddTextAreaContainer>
    </>
  );
};

export default TextArea;
