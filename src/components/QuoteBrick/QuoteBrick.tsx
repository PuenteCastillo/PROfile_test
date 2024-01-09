import TextFieldFactory from "helpers/TextFieldFactory";
import {
  QuoteBrickContainer,
  QuoteBrickWrapper,
  QuoteBrickTitle,
} from "./styles";

const QuoteBrick = ({
  title,
  background
}: QuoteBrickProps) => {
  
  return (
    <QuoteBrickWrapper fontSize={0}>
      <QuoteBrickContainer fontSize={title.fontSize} style={{ backgroundImage: `url(${background})` }}>
        <QuoteBrickTitle
          fontSize={title.fontSize}
          style={{
            fontFamily: title.fontFamily,
            fontWeight: title.fontWeight,
            fontStyle: title.fontStyle,
            textTransform: TextFieldFactory.textTransform(title.textTransform),
            textDecoration: title.textDecoration,
            textAlign: TextFieldFactory.textAlign(title.textAlign),
            color: title.color
          }}
        >
          “{title.fieldValue}”
        </QuoteBrickTitle>
      </QuoteBrickContainer>
    </QuoteBrickWrapper>
  )
};

export default QuoteBrick;
