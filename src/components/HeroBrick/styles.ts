import styled from "styled-components";

export const HeroBrickTitle = styled.h1<HeroBrickTitleProps>`
  margin-bottom: 0;
  font-size: ${({ titleSize }: { titleSize: number }): string =>
    titleSize + "px"};
  line-height: ${({ titleLineHeight }: { titleLineHeight: number }): string =>
    titleLineHeight + "px"};
  font-weight: ${({ titleFontWeight }: { titleFontWeight: string }): string =>
    titleFontWeight};
  font-style: ${({ titleFontStyle }: { titleFontStyle: string }): string =>
    titleFontStyle};
  text-decoration: ${({ titleTextDecoration }: { titleTextDecoration: string }): string =>
    titleTextDecoration};
  text-transform: ${({ titleTextTransform }: { titleTextTransform: string }): string =>
    titleTextTransform};
  text-align: ${({ titleTextAlign }: { titleTextAlign: string }): string =>
    titleTextAlign};
  color: ${({ titleColor }: { titleColor: string }): string =>
    titleColor};
`;

export const HeroBrickSubTitle = styled.h2<HeroBrickSubTitleProps>`
  font-size: ${({ subTitleSize }: { subTitleSize: number }): string =>
    subTitleSize + "px"};
  line-height: ${({ subTitleLineHeight }: { subTitleLineHeight: number }): string =>
    subTitleLineHeight + "px"};
  font-weight: ${({ subTitleFontWeight }: { subTitleFontWeight: string }): string =>
    subTitleFontWeight};
  font-style: ${({ subTitleFontStyle }: { subTitleFontStyle: string }): string =>
    subTitleFontStyle};
  text-decoration: ${({ subTitleTextDecoration }: { subTitleTextDecoration: string }): string =>
    subTitleTextDecoration};
  text-transform: ${({ subTitleTextTransform }: { subTitleTextTransform: string }): string =>
    subTitleTextTransform};
  text-align: ${({ subTitleTextAlign }: { subTitleTextAlign: string }): string =>
    subTitleTextAlign};
  color: ${({ subTitleColor }: { subTitleColor: string }): string =>
    subTitleColor};
`;

export const HeroBrickContent = styled.div<HeroBrickContentProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10% 10% 0 10%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  container-type: inline-size;
  margin-top: -120px; // negative offset to ensure it appears under the navbar/header

  @container (max-width: 360px) {
    ${HeroBrickTitle} {
      font-size: ${({ titleSize }: { titleSize: number }): string =>
        titleSize / 3 + "px"};
      line-height: ${({ titleSize }: { titleSize: number }): string =>
        titleSize / 3 + "px"};
    }

    ${HeroBrickSubTitle} {
      font-size: ${({ subTitleSize }: { subTitleSize: number }): string =>
        subTitleSize / 3 + "px"};
      line-height: ${({ subTitleSize }: { subTitleSize: number }): string =>
        subTitleSize / 3 + "px"};
    }
  }
`;

export const HeroBrickWrapper = styled.div`
  container-type: inline-size;

  @container (max-width: 360px) {
    ${HeroBrickContent} {
      height: 80vh;
      max-height: 864px;
      min-height: auto;
    }
  }
`;
