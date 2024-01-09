import { Col, Row, Switch } from "antd";
import { ImagePicker, BackgroundFieldToolbar } from "components";
import ImageField from "components/ImageField/ImageField";
import { BrickId, EditBrickMode } from "globals/enums";
import { BrickInstance } from "globals/types";
import BrickHelper from "helpers/BrickHelper";
import {
  EditBrickImageTitle,
  EditBrickImageMenuWrapper,
  EditBrickImageContentWrapper,
  EditBrickImageOptionLabel,
  EditBrickImageSmallGallery,
  EditBrickImageBigGallery,
  EditBrickImageGalleryImageWrapper,
  EditBrickImageOptionHeader,
  EditBrickImageBackLink,
  EditBrickImageLeftArrowIcon,
  EditBrickImageBackLinkText
} from "./styles";
import { EditBrickImageMenuProps } from "./types";

const EditBrickImageMenu = ({
  brick,
  brickIndex,
  setBrickProps,
  setEditBrickMode
}: EditBrickImageMenuProps) => {
  
  const renderOptions = (
    brick: BrickInstance,
    brickIndex: number
  ): JSX.Element => {    
    switch (brick.type) {
      case BrickId.Header:
        return (
          <div key={brickIndex}>
            {/* <ImageField
              field={brick.props.logoImage}
              brickIndex={brickIndex}
              setBrickProps={setBrickProps}
            /> */}

            <EditBrickImageOptionHeader>
              Logo Image
            </EditBrickImageOptionHeader>
            <ImagePicker
              currentImage={brick.props.logo}
              previewText={"Logo"}
              onImageSelect={(image: string) => {
                setBrickProps(brickIndex, { logo: image });
              }}
            />
            <EditBrickImageOptionLabel>(CLICK TO CHANGE)</EditBrickImageOptionLabel>
          </div>
        );
      case BrickId.Hero:
        return (
          <div key={brickIndex}>
            <BackgroundFieldToolbar id="background" field="son" currentImage={brick.props.background} brickIndex={brickIndex} setBrickProps={setBrickProps} />
          </div>
        );
      case BrickId.About:
        return (
          <div key={brickIndex}>
            <EditBrickImageOptionLabel>
              About Background (CLICK TO CHANGE)
            </EditBrickImageOptionLabel>
            <ImagePicker
              currentImage={brick.props.background}
              previewText={"Background"}
              onImageSelect={(image: string) => {
                setBrickProps(brickIndex, { background: image });
              }}
            />
            <EditBrickImageOptionLabel>
              Click a number to upload an image
            </EditBrickImageOptionLabel>
            <EditBrickImageSmallGallery>
              <Row gutter={[20, 10]}>
                <Col span={12}>
                  <ImagePicker
                    currentImage={brick.props.imageOne}
                    previewText={"1"}
                    onImageSelect={(image: string) => {
                      setBrickProps(brickIndex, { imageOne: image });
                    }}
                  />
                </Col>
                <Col span={12}>
                  <ImagePicker
                    currentImage={brick.props.imageTwo}
                    previewText={"2"}
                    onImageSelect={(image: string) => {
                      setBrickProps(brickIndex, { imageTwo: image });
                    }}
                  />
                </Col>
                <Col span={24}>
                  <ImagePicker
                    currentImage={brick.props.imageThree}
                    previewText={"3"}
                    onImageSelect={(image: string) => {
                      setBrickProps(brickIndex, { imageThree: image });
                    }}
                  />
                </Col>
              </Row>
            </EditBrickImageSmallGallery>
          </div>
        );
      case BrickId.Quote:
        return (
          <div key={brickIndex}>
            <EditBrickImageOptionLabel>
              Quote Background (CLICK TO CHANGE)
            </EditBrickImageOptionLabel>
            <ImagePicker
              currentImage={brick.props.background}
              previewText={"Background"}
              onImageSelect={(image: string) => {
                setBrickProps(brickIndex, { background: image });
              }}
            />
          </div>
        );
      case BrickId.Content:
        return (
          <div key={brickIndex}>
            <div>
              <EditBrickImageOptionLabel>
                Content Background (CLICK TO CHANGE)
              </EditBrickImageOptionLabel>
              <ImagePicker
                currentImage={brick.props.background}
                previewText={"Background"}
                onImageSelect={(image: string) => {
                  setBrickProps(brickIndex, { background: image });
                }}
              />
            </div>
            <div>
              <EditBrickImageOptionLabel>
                Rounded
                <Switch
                  style={{ float: "right" }}
                  checked={brick.props.isRounded}
                  onChange={(checked: boolean) => {
                    setBrickProps(brickIndex, { isRounded: checked });
                  }}
                />
              </EditBrickImageOptionLabel>
            </div>
            <div>
              <EditBrickImageOptionLabel>
                Content Image (CLICK TO CHANGE)
              </EditBrickImageOptionLabel>
              <ImagePicker
                currentImage={brick.props.imageOne}
                previewText={"Image 1"}
                onImageSelect={(image: string) => {
                  setBrickProps(brickIndex, { imageOne: image });
                }}
              />
            </div>
            <div>
              <EditBrickImageOptionLabel>
                Content Image (CLICK TO CHANGE)
              </EditBrickImageOptionLabel>
              <ImagePicker
                currentImage={brick.props.imageTwo}
                previewText={"Image 2"}
                onImageSelect={(image: string) => {
                  setBrickProps(brickIndex, { imageTwo: image });
                }}
              />
            </div>
            <div>
              <EditBrickImageOptionLabel>
                Content Image (CLICK TO CHANGE)
              </EditBrickImageOptionLabel>
              <ImagePicker
                currentImage={brick.props.imageThree}
                previewText={"Image 3"}
                onImageSelect={(image: string) => {
                  setBrickProps(brickIndex, { imageThree: image });
                }}
              />
            </div>
            <div>
              <EditBrickImageOptionLabel>
                Content Image (CLICK TO CHANGE)
              </EditBrickImageOptionLabel>
              <ImagePicker
                currentImage={brick.props.imageFour}
                previewText={"Image 4"}
                onImageSelect={(image: string) => {
                  setBrickProps(brickIndex, { imageFour: image });
                }}
              />
            </div>
          </div>
        );
      case BrickId.Gallery:
        return (
          <div key={brickIndex}>
            <EditBrickImageOptionLabel>
              Gallery Background (CLICK TO CHANGE)
            </EditBrickImageOptionLabel>
            <ImagePicker
              currentImage={brick.props.background}
              previewText={"Background"}
              onImageSelect={(image: string) => {
                setBrickProps(brickIndex, { background: image });
              }}
            />
            <EditBrickImageOptionLabel>
              Click a number to upload an image
            </EditBrickImageOptionLabel>
            <EditBrickImageBigGallery>
              <EditBrickImageGalleryImageWrapper>
                <ImagePicker
                  currentImage={brick.props.imageOne}
                  previewText={"1"}
                  onImageSelect={(image: string) => {
                    setBrickProps(brickIndex, { imageOne: image });
                  }}
                />
              </EditBrickImageGalleryImageWrapper>
              <EditBrickImageGalleryImageWrapper>
                <ImagePicker
                  currentImage={brick.props.imageTwo}
                  previewText={"2"}
                  onImageSelect={(image: string) => {
                    setBrickProps(brickIndex, { imageTwo: image });
                  }}
                />
              </EditBrickImageGalleryImageWrapper>
              <EditBrickImageGalleryImageWrapper>
                <ImagePicker
                  currentImage={brick.props.imageThree}
                  previewText={"3"}
                  onImageSelect={(image: string) => {
                    setBrickProps(brickIndex, { imageThree: image });
                  }}
                />
              </EditBrickImageGalleryImageWrapper>
              <EditBrickImageGalleryImageWrapper>
                <ImagePicker
                  currentImage={brick.props.imageFour}
                  previewText={"4"}
                  onImageSelect={(image: string) => {
                    setBrickProps(brickIndex, { imageFour: image });
                  }}
                />
              </EditBrickImageGalleryImageWrapper>
              <EditBrickImageGalleryImageWrapper>
                <ImagePicker
                  currentImage={brick.props.imageFive}
                  previewText={"5"}
                  onImageSelect={(image: string) => {
                    setBrickProps(brickIndex, { imageFive: image });
                  }}
                />
              </EditBrickImageGalleryImageWrapper>
              <EditBrickImageGalleryImageWrapper>
                <ImagePicker
                  currentImage={brick.props.imageSix}
                  previewText={"6"}
                  onImageSelect={(image: string) => {
                    setBrickProps(brickIndex, { imageSix: image });
                  }}
                />
              </EditBrickImageGalleryImageWrapper>
              <EditBrickImageGalleryImageWrapper>
                <ImagePicker
                  currentImage={brick.props.imageSeven}
                  previewText={"7"}
                  onImageSelect={(image: string) => {
                    setBrickProps(brickIndex, { imageSeven: image });
                  }}
                />
              </EditBrickImageGalleryImageWrapper>
            </EditBrickImageBigGallery>
          </div>
        );
      default:
        return <></>;
    }
  };

  return (
    <EditBrickImageMenuWrapper>
      <EditBrickImageBackLink onClick={() => setEditBrickMode(EditBrickMode.None)}>
        <EditBrickImageLeftArrowIcon />
        <EditBrickImageBackLinkText>Image Options</EditBrickImageBackLinkText>
      </EditBrickImageBackLink>
      <EditBrickImageTitle>{BrickHelper.getEditImagesHeaderText(brick.type)}</EditBrickImageTitle>
      <EditBrickImageContentWrapper>
        {renderOptions(brick, brickIndex)}
      </EditBrickImageContentWrapper>
    </EditBrickImageMenuWrapper>
  );
};

export default EditBrickImageMenu;
