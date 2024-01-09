import { GalleryType, LinksType, TextAlign, SocialMediaType } from "./enums";
import { AboutBrick, ContactBrick, ContentBrick, EcommerceBrick, FooterBrick, GalleryBrick, HeaderBrick, HeroBrick, QuoteBrick, SocialMediaFeedBrick } from "./types";

export const headerBricks: Array<HeaderBrick> = [
  {
    id: 1,
    logoPosition: TextAlign.Left,
    linksPosition: TextAlign.Right,
    linksType: LinksType.List
  },
  {
    id: 2,
    logoPosition: TextAlign.Left,
    linksPosition: TextAlign.Right,
    linksType: LinksType.List
  },
  {
    id: 3,
    logoPosition: TextAlign.Left,
    linksPosition: TextAlign.Right,
    linksType: LinksType.List
  },
  {
    id: 4,
    logoPosition: TextAlign.Left,
    linksPosition: TextAlign.Right,
    linksType: LinksType.List
  },
  {
    id: 5,
    logoPosition: TextAlign.Left,
    linksPosition: TextAlign.Right,
    linksType: LinksType.List
  },
  {
    id: 6,
    logoPosition: TextAlign.Left,
    linksPosition: TextAlign.Right,
    linksType: LinksType.List
  },
  {
    id: 7,
    logoPosition: TextAlign.Left,
    linksPosition: TextAlign.Right,
    linksType: LinksType.List
  },
];

export const heroBricks: Array<HeroBrick> = [
  {
    id: 1,
    copyPosition: TextAlign.Left,
    isShowImage: false,
  },
  {
    id: 2,
    copyPosition: TextAlign.Center,
    isShowImage: false,
  },
  {
    id: 3,
    copyPosition: TextAlign.Right,
    isShowImage: false,
  },
  {
    id: 4,
    copyPosition: TextAlign.Left,
    isShowImage: true,
  },
  {
    id: 5,
    copyPosition: TextAlign.Center,
    isShowImage: true,
  },
  {
    id: 6,
    copyPosition: TextAlign.Right,
    isShowImage: true,
  },
];

export const quoteBricks: Array<QuoteBrick> = [
  {
    id: 1,
    copyPosition: TextAlign.Left
  },
  {
    id: 2,
    copyPosition: TextAlign.Center
  },
  {
    id: 3,
    copyPosition: TextAlign.Right
  },
  {
    id: 4,
    copyPosition: TextAlign.Right,
    imagePosition: TextAlign.Left
  },
  {
    id: 5,
    copyPosition: TextAlign.Left,
    imagePosition: TextAlign.Right
  },
];

export const contentBricks: Array<ContentBrick> = [
  {
    id: 1,
    copyPosition: TextAlign.Left
  },
  {
    id: 2,
    copyPosition: TextAlign.Center
  },
  {
    id: 3,
    copyPosition: TextAlign.Right
  },
  {
    id: 4,
    copyPosition: TextAlign.Left,
    imagePosition: TextAlign.Right
  },
  {
    id: 5,
    copyPosition: TextAlign.Right,
    imagePosition: TextAlign.Left
  },
  {
    id: 6,
    copyPosition: TextAlign.Left,
    videoPosition: TextAlign.Right
  },
  {
    id: 7,
    copyPosition: TextAlign.Right,
    videoPosition: TextAlign.Left
  },
];

export const galleryBricks: Array<GalleryBrick> = [
  {
    id: 1,
    galleryType: GalleryType.Grid
  },
  {
    id: 2,
    galleryType: GalleryType.Minimized
  },
  {
    id: 3,
    galleryType: GalleryType.Carousel
  },
];

export const aboutBricks: Array<AboutBrick> = [
  {
    id: 1,
    galleryPosition: TextAlign.Right
  },
  {
    id: 2,
    galleryPosition: TextAlign.Left
  },
];

export const contactBricks: Array<ContactBrick> = [
  {
    id: 1,
  },
];

export const footerBricks: Array<FooterBrick> = [
  {
    id: 1,
    logoPosition: TextAlign.Left
  },
  {
    id: 2,
    logoPosition: TextAlign.Right
  },
  {
    id: 3,
    logoPosition: TextAlign.Center
  },
];

export const socialMediaFeedBricks: Array<SocialMediaFeedBrick> = [
  {
    id: 1,
    socialType: SocialMediaType.TwitterInstagram
  },
  {
    id: 2,
    socialType: SocialMediaType.Twitter
  },
  {
    id: 3,
    socialType: SocialMediaType.Instagram
  },
];

export const ecommerceBricks: Array<EcommerceBrick> = [
  {
    id: 1,
  },
];
