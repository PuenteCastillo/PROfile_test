import SimpleTextField from "components/SimpleTextField";
import TextField from "components/TextField";
import TextArea from "components/TextArea";
import { BrickId, EditBrickMode, FontFamily } from "globals/enums";
import { EditableTextField } from "globals/types";
import BrickHelper from "helpers/BrickHelper";
import {
  EditBrickCopyTitle,
  EditBrickCopyMenuWrapper,
  EditBrickCopyContentWrapper,
  EditBrickCopyVerticalSpacer,
  EditBrickBodyLabel,
  EditBrickBodyTextContainer,
  EditBrickBodyTextButton,
  EditBrickBodyTextSpan,
  EditBrickCopyPlusIcon,
  EditBrickCopyBackLink,
  EditBrickCopyLeftArrowIcon,
  EditBrickCopyBackLinkText
} from "./styles";
import { EditBrickCopyMenuProps } from "./types";

const EditBrickCopyMenu = ({
  brick,
  brickIndex,
  setBrickProps,
  setEditBrickMode
}: EditBrickCopyMenuProps) => {
  const editableFields = new Array<EditableTextField>();

  const toggleToolbars = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    editableFields.map(item => {
      const toolbarContainer = document.querySelector("#toolbar_" + item.fieldId) as HTMLElement;
      const deleteFieldLink = document.querySelector("#delete_" + item.fieldId) as HTMLElement;
      const textInput = document.querySelector("#input_" + item.fieldId) as HTMLElement;

      if (item.fieldId === e.currentTarget.parentElement?.parentElement?.id && item.isToolbarOpen === false) {
        // Show toolbar
        toolbarContainer.style.display = "block";
        deleteFieldLink.style.display = "block";
        textInput.classList.add("highlight");
        item.isToolbarOpen = true;
      } else {
        // Hide toolbar
        toolbarContainer.style.display = "none";
        deleteFieldLink.style.display = "none";
        textInput.classList.remove("highlight");
        item.isToolbarOpen = false;
      }
    });
  }

  const renderOptions = (
    brick: { type: string; props: any },
    brickIndex: number
  ): JSX.Element => {
    switch (brick.type) {
      case BrickId.Hero:
        editableFields.push(brick.props.title, brick.props.subTitle);
        return (
          <div key={brickIndex}>
            <TextField
              field={brick.props.title}
              fontFamilies={[]}
              fontSizeRange={[130, 140, 150, 160, 170]}
              lineHeightRange={[130, 140, 150, 160, 170]}
              toggleToolbars={toggleToolbars}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
            <TextField
              field={brick.props.subTitle}
              fontFamilies={[]}
              fontSizeRange={[25, 30, 35, 40, 45]}
              lineHeightRange={[25, 30, 35, 40, 45]}
              toggleToolbars={toggleToolbars}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />

            <EditBrickBodyLabel>Body</EditBrickBodyLabel>

            <EditBrickBodyTextContainer>
              <EditBrickBodyTextButton type="button">
                <EditBrickCopyPlusIcon />
                <EditBrickBodyTextSpan>Add Body Text</EditBrickBodyTextSpan>
              </EditBrickBodyTextButton>
            </EditBrickBodyTextContainer>
          </div >
        );
      case BrickId.About:
        editableFields.push(brick.props.title, brick.props.body);
        return (
          <div key={brickIndex}>
            <TextField
              field={brick.props.title}
              fontFamilies={[]}
              fontSizeRange={[20, 25, 30, 35, 40]}
              lineHeightRange={[20, 25, 30, 35, 40]}
              toggleToolbars={toggleToolbars}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
            <TextField
              field={brick.props.body}
              fontFamilies={[]}
              fontSizeRange={[10, 12, 14, 16, 18]}
              lineHeightRange={[10, 12, 14, 16, 18]}
              toggleToolbars={toggleToolbars}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
            <SimpleTextField
              field={brick.props.statOneTitle}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
            <SimpleTextField
              field={brick.props.statOneData}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
            <SimpleTextField
              field={brick.props.statTwoTitle}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
            <SimpleTextField
              field={brick.props.statTwoData}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
            <SimpleTextField
              field={brick.props.statThreeTitle}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
            <SimpleTextField
              field={brick.props.statThreeData}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
            <SimpleTextField
              field={brick.props.statFourTitle}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
            <SimpleTextField
              field={brick.props.statFourData}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
          </div>
        );
      case BrickId.Quote:
        editableFields.push(brick.props.title);
        return (
          <div key={brickIndex}>
            <TextField
              field={brick.props.title}
              fontFamilies={[]}
              fontSizeRange={[25, 30, 35, 40, 45]}
              lineHeightRange={[25, 30, 35, 40, 45]}
              toggleToolbars={toggleToolbars}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
          </div>
        );
      case BrickId.Content:
        editableFields.push(brick.props.title, brick.props.body);
        return (
          <div key={brickIndex}>
            <TextField
              field={brick.props.title}
              fontFamilies={[]}
              fontSizeRange={[30, 40, 50, 60, 70]}
              lineHeightRange={[30, 40, 50, 60, 70]}
              toggleToolbars={toggleToolbars}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
            <TextArea
              field={brick.props.body}
              fontFamilies={[]}
              fontSizeRange={[25, 30, 35, 40, 45]}
              lineHeightRange={[25, 30, 35, 40, 45]}
              toggleToolbars={toggleToolbars}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
          </div>
        );
      case BrickId.Gallery:
        editableFields.push(brick.props.title, brick.props.subTitle);
        return (
          <div key={brickIndex}>
            <TextField
              field={brick.props.title}
              fontFamilies={[]}
              fontSizeRange={[40, 45, 50, 55, 60]}
              lineHeightRange={[40, 45, 50, 55, 60]}
              toggleToolbars={toggleToolbars}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
            <TextField
              field={brick.props.subTitle}
              fontFamilies={[]}
              fontSizeRange={[17, 19, 21, 23, 25]}
              lineHeightRange={[17, 19, 21, 23, 25]}
              toggleToolbars={toggleToolbars}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
          </div>
        );
      case BrickId.SocialMediaFeed:
        editableFields.push(brick.props.title, brick.props.subTitle);
        return (
          <div key={brickIndex}>
            <TextField
              field={brick.props.title}
              fontFamilies={[]}
              fontSizeRange={[48, 50, 52, 54, 56]}
              lineHeightRange={[48, 50, 52, 54, 56]}
              toggleToolbars={toggleToolbars}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
            <TextField
              field={brick.props.subTitle}
              fontFamilies={[]}
              fontSizeRange={[13, 15, 17, 19, 21]}
              lineHeightRange={[13, 15, 17, 19, 21]}
              toggleToolbars={toggleToolbars}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            />
          </div>
        );
      default:
        return <></>;
    }
  };

  return (
    <EditBrickCopyMenuWrapper>
      <EditBrickCopyBackLink onClick={() => setEditBrickMode(EditBrickMode.None)}>
        <EditBrickCopyLeftArrowIcon />
        <EditBrickCopyBackLinkText>Brick Copy</EditBrickCopyBackLinkText>
      </EditBrickCopyBackLink>

      <EditBrickCopyTitle>Edit {BrickHelper.getDisplayName(brick.type)} Copy</EditBrickCopyTitle>

      <EditBrickCopyContentWrapper>
        {renderOptions(brick, brickIndex)}
        <EditBrickCopyVerticalSpacer />
      </EditBrickCopyContentWrapper>
    </EditBrickCopyMenuWrapper>
  );
};

export default EditBrickCopyMenu;
