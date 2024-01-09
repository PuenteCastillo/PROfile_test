import ReactPlayer from 'react-player'

import {
  CardContentContainer,
  CardContainer,
  CardHeader,
  CardDescription,
  CardButton
} from "./styles";
  
const DashboardCard = ({
  name,
  description,
  buttonText,
  buttonUrl,
  videoUrl
}: DashboardCardProps) => {
  return (
    <CardContainer>
      <CardContentContainer>
        <ReactPlayer
          className="react-player"
          url={videoUrl}
          playing={false}
          controls={true}
          width="120%"
          height="120%"
        />
        <CardHeader>
          {name}
        </CardHeader>
        <CardDescription>
          {description}
        </CardDescription>
        <a href={buttonUrl}>
          <CardButton>
            {buttonText}
          </CardButton>
        </a>
      </CardContentContainer>
    </CardContainer>
  )
}

export default DashboardCard;