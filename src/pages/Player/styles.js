import styled from "styled-components/native";
import { Slider } from 'react-native';

export const TopBar = styled.View`
  flex-direction: row;
`;

export const TopBarLeft = styled.View`
  flex: 1;
  padding-left: 16px;
`;

export const TopBarMiddle = styled.View`
  flex: 2;
  align-items: center;
`;

export const TopBarRight = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;

export const TopBarTitle = styled.Text`
  color: #fff;
  text-transform: uppercase;
`;

export const TopBarSubTitle = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ScreenArea = styled.View`
  flex: 1;
  padding: 16px 32px 32px 32px;
`;

export const CoverArea = styled.View`
  flex: 4;
`;

export const CoverImage = styled.Image`
  flex: 1;
  width: 100%;
`;

export const PlayerArea = styled.View`
  flex: 2;
  justify-content: flex-end;
`;

export const PlayerAreaTitle = styled.Text`
  color: #fff;
  font-size: 22px;
`;

export const PlayerAreaAuthor = styled.Text`
  color: #bbb;
  font-size: 16px;
`;

export const PlayerControls = styled.View`
  flex-direction: row;
  align-Items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ControlPlay = styled.TouchableOpacity`

`;

export const ControlSlider = styled.View`
  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ControlSliderCurrentTime = styled.Text`
  color: #BBB;
`;

export const ControlSliderTotalTime = styled.Text`
  color: #BBB;
`;

export const AudioSlider = styled(Slider)`
  flex-basis: 100%;
`;
