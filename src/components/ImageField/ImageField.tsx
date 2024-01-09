import { ImageFieldClickToChangeLabel, ImageFieldContainer, ImageFieldDeleteFieldLink, ImageFieldDeleteFieldLinkContainer, ImageFieldLabel, ImageFieldLabelContainer, ImageFieldLabelWrapper, ImageFieldOpenModalButton } from "./styles";

const ImageField = ({
  field,
  brickIndex,
  setBrickProps,
}: ImageFieldProps) => {

  const deleteField = () => {
    // // Hide input text field, trash can icon, and toolbar
    // const textInputContainer = document.querySelector("#" + field.fieldId + " > div") as HTMLElement;
    // const trashCanButton = document.querySelector("#delete_" + field.fieldId) as HTMLElement;
    // const toolbarContainer = document.querySelector("#toolbar_" + field.fieldId) as HTMLElement;
    // textInputContainer.style.display = "none";
    // trashCanButton.style.display = "none";
    // toolbarContainer.style.display = "none";
    field.isToolbarOpen = false;

    // // Show field as button with plus sign
    // const addTextInputButton = document.querySelector("#add_" + field.fieldId) as HTMLElement;
    // addTextInputButton.style.display = "block";

    const fieldObj = { ...field };
    fieldObj.fieldValue = "";
    setBrickProps(brickIndex, { [field.propName]: fieldObj });
  };

  return (
    <>
      <ImageFieldLabelWrapper>
        <ImageFieldLabelContainer>
          <ImageFieldLabel>{field.fieldLabel}</ImageFieldLabel>
        </ImageFieldLabelContainer>
        <ImageFieldDeleteFieldLinkContainer>
          <ImageFieldDeleteFieldLink
            id={"delete_" + field.fieldId}
            onClick={() => deleteField()}>
            Delete field
          </ImageFieldDeleteFieldLink>
        </ImageFieldDeleteFieldLinkContainer>
      </ImageFieldLabelWrapper>

      <ImageFieldContainer>
        <ImageFieldOpenModalButton>Logo</ImageFieldOpenModalButton>
        <ImageFieldClickToChangeLabel>(CLICK TO CHANGE)</ImageFieldClickToChangeLabel>
      </ImageFieldContainer>
    </>
  );
};

export default ImageField;
