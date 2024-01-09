import { BrickId, Color, FontFamily, FontWeight, TextAlign } from "globals/enums";
import { BrickInstance } from "globals/types";
import BackgroundFieldFactory from "./ImageFieldFactory";
import ImageFieldFactory from "./ImageFieldFactory";
import SimpleTextFieldFactory from "./SimpleTextFieldFactory";
import TextFieldFactory from "./TextFieldFactory";

class BrickFactory {

  static createBrick = (
    brickId: BrickId,
    brickInstanceCt: number,
    bricksAddedCt: number
  ): BrickInstance => {

    let brickObj: BrickInstance;
    switch (brickId) {
      case BrickId.Header:
        brickObj = {
          type: brickId,
          instanceCt: brickInstanceCt,
          props: {
            logoImage: ImageFieldFactory.createField(BrickId.Header, "logoImage", "Logo Image", "", bricksAddedCt)
          },
        };
        break;
      case BrickId.Hero:
        brickObj = {
          type: brickId,
          instanceCt: brickInstanceCt,
          props: {
            title: TextFieldFactory.createField(BrickId.Hero, "title", "Title", "Hero title", 150, bricksAddedCt),
            subTitle: TextFieldFactory.createField(BrickId.Hero, "subTitle", "Subtitle", "Hero subtitle", 35, bricksAddedCt),
            heroBackground: BackgroundFieldFactory.createField(BrickId.Hero, "heroBackground", "Hero Background", "", bricksAddedCt)
          }
        };
        break;
      case BrickId.About:
        brickObj = {
          type: brickId,
          instanceCt: brickInstanceCt,
          props: {
            title: TextFieldFactory.createField(BrickId.About, "title", "About Title", "About Title", 30, bricksAddedCt,
              {
                fontFamily: FontFamily.PT_Serif,
                textAlign: TextAlign.Center,
                color: Color.DarkBlue
              }
            ),
            body: TextFieldFactory.createField(BrickId.About, "body", "About Body", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 14, bricksAddedCt,
              {
                fontFamily: FontFamily.Open_Sans,
                textAlign: TextAlign.Left,
                color: Color.Gray9
              }
            ),
            statOneTitle: SimpleTextFieldFactory.createField(BrickId.About, "statOneTitle", "Stat 1 Title", "Stat Title", 11, Color.Gray9, bricksAddedCt),
            statOneData: SimpleTextFieldFactory.createField(BrickId.About, "statOneData", "Stat 1 Data", "00.00", 50, Color.DarkBlue, bricksAddedCt),
            statTwoTitle: SimpleTextFieldFactory.createField(BrickId.About, "statTwoTitle", "Stat 2 Title", "Stat Title", 11, Color.Gray9, bricksAddedCt),
            statTwoData: SimpleTextFieldFactory.createField(BrickId.About, "statTwoData", "Stat 2 Data", "00.00", 50, Color.DarkBlue, bricksAddedCt),
            statThreeTitle: SimpleTextFieldFactory.createField(BrickId.About, "statThreeTitle", "Stat 3 Title", "Stat Title", 11, Color.Gray9, bricksAddedCt),
            statThreeData: SimpleTextFieldFactory.createField(BrickId.About, "statThreeData", "Stat 3 Data", "00.00", 50, Color.DarkBlue, bricksAddedCt),
            statFourTitle: SimpleTextFieldFactory.createField(BrickId.About, "statFourTitle", "Stat 4 Title", "Stat Title", 11, Color.Gray9, bricksAddedCt),
            statFourData: SimpleTextFieldFactory.createField(BrickId.About, "statFourData", "Stat 4 Data", "00.00", 50, Color.DarkBlue, bricksAddedCt)
          }
        };
        break;
      case BrickId.Quote:
        brickObj = {
          type: brickId,
          instanceCt: brickInstanceCt,
          props: {
            title: TextFieldFactory.createField(BrickId.Quote, "title", "Quote Title", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", 46, bricksAddedCt,
              {
                fontFamily: FontFamily.PT_Serif,
                textAlign: TextAlign.Center,
                color: Color.DarkBlue
              }
            )
          }
        };
        break;
      case BrickId.Content:
        brickObj = {
          type: brickId,
          instanceCt: brickInstanceCt,
          props: {
            isRounded: false,
            title: TextFieldFactory.createField(BrickId.Content, "title", "Content Title", "Content Title", 50, bricksAddedCt,
              {
                fontFamily: FontFamily.PT_Serif,
                fontWeight: FontWeight.Bold,
                textAlign: TextAlign.Left,
                color: Color.DarkBlue
              }
            ),
            body: TextFieldFactory.createField(BrickId.Content, "body", "Content Body", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at varius eros. Curabitur mi eros, consectetur ac eleifend in, tincidunt eget enim. Pellentesque at tristique ipsum, eu lobortis metus. Donec egestas erat quis enim vehicula congue. Quisque sit amet nulla eget nisi pharetra sollicitudin. Nunc quis aliquam justo. Vivamus et ipsum eu purus fermentum posuere sed in enim. Praesent eget rhoncus metus, ac ultricies dolor. Morbi iaculis libero tortor, ac molestie sem consectetur vel.", 25, bricksAddedCt,
              {
                fontFamily: FontFamily.PT_Serif,
                // fontWeight: FontWeight.Bold,
                textAlign: TextAlign.Left,
                color: Color.DarkBlue
              }
            ),
            imageOneTitle: SimpleTextFieldFactory.createField(BrickId.Content, "imageOneTitle", "Image Title 1", "Image Title", 40, Color.DarkGreen, bricksAddedCt),
            imageOneSubTitle: SimpleTextFieldFactory.createField(BrickId.Content, "imageOneSubTitle", "Image Subtitle 1", "Image Subtitle", 28, Color.Gray8, bricksAddedCt),
            imageTwoTitle: SimpleTextFieldFactory.createField(BrickId.Content, "imageTwoTitle", "Image Title 2", "Image Title", 40, Color.DarkGreen, bricksAddedCt),
            imageTwoSubTitle: SimpleTextFieldFactory.createField(BrickId.Content, "imageTwoSubTitle", "Image Subtitle 2", "Image Subtitle", 28, Color.Gray8, bricksAddedCt),
            imageThreeTitle: SimpleTextFieldFactory.createField(BrickId.Content, "imageThreeTitle", "Image Title 3", "Image Title", 40, Color.DarkGreen, bricksAddedCt),
            imageThreeSubTitle: SimpleTextFieldFactory.createField(BrickId.Content, "imageThreeSubTitle", "Image Subtitle 3", "Image Subtitle", 28, Color.Gray8, bricksAddedCt),
            imageFourTitle: SimpleTextFieldFactory.createField(BrickId.Content, "imageFourTitle", "Image Title 4", "Image Title", 40, Color.DarkGreen, bricksAddedCt),
            imageFourSubTitle: SimpleTextFieldFactory.createField(BrickId.Content, "imageFourSubTitle", "Image Subtitle 4", "Image Subtitle", 28, Color.Gray8, bricksAddedCt)
          }
        };
        break;
      case BrickId.Gallery:
        brickObj = {
          type: brickId,
          instanceCt: brickInstanceCt,
          props: {
            title: TextFieldFactory.createField(BrickId.Gallery, "title", "Gallery Title", "Media Gallery", 50, bricksAddedCt,
              {
                fontFamily: FontFamily.PT_Serif,
                fontWeight: FontWeight.Bold,
                textAlign: TextAlign.Center,
                color: Color.DarkBlue
              }
            ),
            subTitle: TextFieldFactory.createField(BrickId.Gallery, "subTitle", "Gallery Subtitle", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 21, bricksAddedCt,
              {
                fontFamily: FontFamily.Open_Sans,
                fontWeight: FontWeight.Bold,
                textAlign: TextAlign.Center,
                color: Color.Gray10
              }
            )
          }
        };
        break;
      case BrickId.SocialMediaFeed:
        brickObj = {
          type: brickId,
          instanceCt: brickInstanceCt,
          props: {
            title: TextFieldFactory.createField(BrickId.SocialMediaFeed, "title", "Social Media Feed Title", "Follow My Socials", 52, bricksAddedCt,
              {
                fontFamily: FontFamily.PT_Serif,
                fontWeight: FontWeight.Bold,
                textAlign: TextAlign.Center,
                color: Color.DarkBlue
              }
            ),
            subTitle: TextFieldFactory.createField(BrickId.SocialMediaFeed, "subTitle", "Social Media Feed Subtitle", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", 17, bricksAddedCt,
              {
                fontFamily: FontFamily.Open_Sans,
                fontWeight: FontWeight.Bold,
                textAlign: TextAlign.Center,
                color: Color.Gray10
              }
            )
          }
        };
        break;
      case BrickId.Footer:
        brickObj = {
          type: brickId,
          instanceCt: brickInstanceCt,
          props: {},
        };
        break;
      default:
        brickObj = { type: "", instanceCt: 0, props: {} };
    }

    return brickObj;
  };
};

export default BrickFactory;
