import { WiDayCloudyWindy, WiHail, WiThermometer } from "react-icons/wi";

// Styled-components
import { WeatherStyles } from "../styles/WeatherDetail.styled";
import { FlexStyle } from "../styles/Flex.styled";

export default function WeatherContent() {
  return (
    <WeatherStyles>
      <FlexStyle>
        <WiThermometer size={5 + "rem"} />
        <h2>
          19 - 23 <span>°C</span>
        </h2>
      </FlexStyle>
      <FlexStyle>
        <WiDayCloudyWindy size={3.5 + "rem"} />
        <p>Taipei</p>
      </FlexStyle>
      <FlexStyle>
        <WiHail size={3.5 + "rem"} />
        <p>
          <span>30 %</span> chance of rain
        </p>
      </FlexStyle>
    </WeatherStyles>
  );
}
