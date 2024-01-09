import {
  AddBrickTitle,
  AddBrickMenuWrapper,
  AddBrickContentWrapper,
  AddBrickContent,
  AddBrickHeading,
  AddBrickButton,
  AddBrickContentPremium,
  AddBrickHeadingPremium,
  AddBrickButtonPremium,
} from "./styles";
import { SketchOutlined } from "@ant-design/icons";
import { BrickId } from "globals/enums";

const brickTypes: Array<BrickType> = [
  {
    name: "Header",
    type: "header",
  },
  {
    name: "Hero",
    type: "hero",
  },
  {
    name: "Quote",
    type: "quote",
  },
  {
    name: "Content",
    type: "content",
  },
  {
    name: "Gallery",
    type: "gallery",
  },
  {
    name: "About",
    type: "about",
  },
  {
    name: "Contact",
    type: "contact",
  },
  {
    name: "Footer",
    type: "footer",
  },
];

const brickTypesPremium: Array<BrickType> = [
  {
    name: "Social Media Feed",
    type: "socialMediaFeed",
  },
  {
    name: "E-Commerce",
    type: "ecommerce",
  },
];

const AddBrickMenu = ({ brickType, setBrickType, hasHeader }: AddBrickMenuProps) => {
  return (
    <AddBrickMenuWrapper>
      <AddBrickTitle>Add New Brick</AddBrickTitle>
      <AddBrickContentWrapper>
        <AddBrickContent>
          <AddBrickHeading>Free Bricks</AddBrickHeading>
          {brickTypes.map((brick) => {
            return (
              <AddBrickButton
                className={brickType === brick.type ? "active" : ""}
                key={brick.type}
                type="default"
                size="large"
                block={true}
                onClick={() => setBrickType(brick.type)}
                disabled = {(brick.type === BrickId.Header && hasHeader) || (brick.type !== BrickId.Header && !hasHeader) ? true : false}
              >
                {brick.name}
              </AddBrickButton>
            );
          })}
        </AddBrickContent>
        <AddBrickContentPremium>
          <AddBrickHeadingPremium>
            <SketchOutlined />
            Premium Bricks
          </AddBrickHeadingPremium>
          {brickTypesPremium.map((brick) => {
            return (
              <AddBrickButtonPremium
                className={brickType === brick.type ? "active" : ""}
                key={brick.type}
                type="default"
                size="large"
                block={true}
                onClick={() => setBrickType(brick.type)}
                disabled = {(brick.type === BrickId.Header && hasHeader) || (brick.type !== BrickId.Header && !hasHeader) ? true : false}
              >
                {brick.name}
              </AddBrickButtonPremium>
            );
          })}
        </AddBrickContentPremium>
      </AddBrickContentWrapper>
    </AddBrickMenuWrapper>
  );
};

export default AddBrickMenu;
