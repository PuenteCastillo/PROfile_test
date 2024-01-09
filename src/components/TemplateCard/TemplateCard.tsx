import { Button } from "antd";
import {
  TemplateCardContainer,
  TemplateCardBg,
  TemplateCardName,
  TemplateCardHover,
  TemplateCardType,
  TemplateCardHeading,
  TemplateCardDescription,
  TemplateCardPreviewLink,
  TemplateCardCtaWrapper,
} from "./styles";

const TemplateCard = ({
  id,
  name,
  description,
  image,
  type,
  showTemplatePreview
}: TemplateCardProps) => {

  return (
    <>
      <TemplateCardContainer>
        <TemplateCardBg src={`/templates/${image}`} />
        <TemplateCardHover>
          <div>
            <TemplateCardType>{type}:</TemplateCardType>
            <TemplateCardHeading>{name}</TemplateCardHeading>
            <TemplateCardDescription>{description}</TemplateCardDescription>
            <TemplateCardPreviewLink onClick={() => showTemplatePreview()}>
              See a preview →
            </TemplateCardPreviewLink>
          </div>
          <TemplateCardCtaWrapper>
            <Button type="primary" size="large" block={true}>
              Use Designed Template
            </Button>
            <Button type="default" size="large" block={true}>
              Use a blank version
            </Button>
          </TemplateCardCtaWrapper>
        </TemplateCardHover>
      </TemplateCardContainer>
      <TemplateCardName>{name}</TemplateCardName>
    </>
  );
};

export default TemplateCard;
