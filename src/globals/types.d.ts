import { GalleryType, LinksType, SocialMediaType, TextAlign } from "./enums";

type BrickInstance = {
  type: string;
  instanceCt: number;
  props: any;
};

type ConstantsObject = {
  headerBricks: Array<HeaderBrick>;
  heroBricks: Array<HeroBrick>;
  quoteBricks: Array<QuoteBrick>;
  contentBricks: Array<ContentBrick>;
  galleryBricks: Array<GalleryBrick>;
  aboutBricks: Array<AboutBrick>;
  contactBricks: Array<ContactBrick>;
  footerBricks: Array<FooterBrick>;
  socialMediaFeedBricks: Array<SocialMediaFeedBrick>;
  ecommerceBricks: Array<ECommerceBrick>;
};

type HeaderBrick = {
  id: number;
  logoPosition: TextAlign.Left | TextAlign.Right | TextAlign.Center;
  linksPosition: TextAlign.Left | TextAlign.Right | TextAlign.SpaceBetween;
  linksType: LinksType.List | LinksType.Menu;
};

type HeroBrick = {
  id: number;
  copyPosition: TextAlign.Left | TextAlign.Right | TextAlign.Center;
  isShowImage: boolean;
};

type QuoteBrick = {
  id: number;
  copyPosition: TextAlign.Left | TextAlign.Right | TextAlign.Center;
  imagePosition?: TextAlign.Left | TextAlign.Right;
};

type ContentBrick = {
  id: number;
  copyPosition: TextAlign.Left | TextAlign.Right | TextAlign.Center;
  imagePosition?: TextAlign.Left | TextAlign.Right;
  videoPosition?: TextAlign.Left | TextAlign.Right;
};

type GalleryBrick = {
  id: number;
  galleryType: GalleryType.Grid | GalleryType.Minimized | GalleryType.Carousel;
};

type AboutBrick = {
  id: number;
  galleryPosition: TextAlign.Left | TextAlign.Right;
};

type ContactBrick = {
  id: number;
};

type FooterBrick = {
  id: number;
  logoPosition: TextAlign.Left | TextAlign.Right | TextAlign.Center;
};

type SocialMediaFeedBrick = {
  id: number;
  socialType: SocialMediaType.Twitter | SocialMediaType.Instagram | SocialMediaType.TwitterInstagram;
};

type EcommerceBrick = {
  id: number;
};

type SimpleTextField = {
  propName: string;
  fieldId: string;
  fieldLabel: string;
  fieldValue: string;
  defaultValue: string;
  fontSize: number;
  color: string;
}

type EditableTextField = {
  propName: string;
  fieldId: string;
  fieldLabel: string;
  fieldValue: string;
  defaultValue: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  fontSize: number;
  lineHeight: number;
  textDecoration: string;
  textTransform: string;
  textAlign: string;
  color: string;
  isToolbarOpen: boolean;
}

type EditableImageField = {
  propName: string;
  fieldId: string;
  fieldLabel: string;
  fieldValue: string;     // URL that is used to set the background-image property
  defaultValue: string;
  isToolbarOpen: boolean;
}

type EditableBackgroundField = {
  propName: string;
  fieldId: string;
  fieldLabel: string;
  fieldValue: string;     // URL that contains the background-image property, hex color, or gradient path
  defaultValue: string;
  isToolbarOpen: boolean;
}
