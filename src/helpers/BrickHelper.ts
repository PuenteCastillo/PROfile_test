import { BrickId } from "globals/enums";

class BrickHelper {

  static getIndexName = (brickType: string) : string => {
    return brickType.charAt(0).toUpperCase() + brickType.slice(1);
  };

  static getDisplayName = (brickType: string) : string => {
    let name: string = BrickHelper.getIndexName(brickType);
    if (name === "SocialMediaFeed") {
      name = "Social Media";
    }
    return name;
  };

  static getEditImagesHeaderText = (brickType: string) : string => {
    let imagesText = "Images";
    if (brickType === BrickId.Hero || brickType === BrickId.Header) {
      imagesText = "Image";
    }
    return "Edit " + BrickHelper.getDisplayName(brickType) + " " + imagesText;
  };

  static isEditCopyButtonDisabled(brickType: string): boolean | undefined {
    return brickType === BrickId.Header ? true : false;
  }
};

export default BrickHelper;
