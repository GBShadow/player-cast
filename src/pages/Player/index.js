import React, { useState } from "react";

import { ChevronIcon } from "../../components/icons/Chevron";
import { MoreVertIcon } from "../../components/icons/MoreVert";
import { PlayIcon } from "../../components/icons/Play";

import Background from "../../components/Background";

import {
  TopBarTitle,
  TopBarSubTitle,
  TopBar,
  TopBarLeft,
  TopBarMiddle,
  TopBarRight,
  ScreenArea,
  CoverArea,
  CoverImage,
  PlayerArea,
  PlayerAreaTitle,
  PlayerAreaAuthor,
  PlayerControls,
  ControlPlay,
  ControlSlider,
  ControlSliderCurrentTime,
  ControlSliderTotalTime,
  AudioSlider,
} from "./styles";

const Player = () => {
  const [seconds, setSeconds] = useState(0);

  return (
    <Background>
      <TopBar>
        <TopBarLeft>
          <ChevronIcon />
        </TopBarLeft>

        <TopBarMiddle>
          <TopBarTitle>Tocando Podcast</TopBarTitle>
          <TopBarSubTitle>Hipster Ponto Tech</TopBarSubTitle>
        </TopBarMiddle>

        <TopBarRight>
          <MoreVertIcon />
        </TopBarRight>
      </TopBar>

      <ScreenArea>
        <CoverArea>
          <CoverImage
            resizeMode="contain"
            source={{
              uri: "https://placehold.it/750x750",
            }}
          />
        </CoverArea>
        <PlayerArea>
          <PlayerAreaTitle>Angular vs React - Hipster #142</PlayerAreaTitle>
          <PlayerAreaAuthor>Hipsters Ponto Tech</PlayerAreaAuthor>

          <PlayerControls>
            <ControlSlider>
              <AudioSlider
                minimumValue={0}
                maximumValue={100}
                thumbTintColor="#FFFFFF"
                maximumTrackTintColor="#777777"
                maximumTrackTintColor="#1DD65F"
                value={seconds}
                onValueChange={(value) => {
                  setSeconds(value);
                }}
              />
              <ControlSliderCurrentTime>{seconds}</ControlSliderCurrentTime>
              <ControlSliderTotalTime>52:07</ControlSliderTotalTime>
            </ControlSlider>

            <ControlPlay>
              <PlayIcon width={80} height={80} />
            </ControlPlay>
          </PlayerControls>
        </PlayerArea>
      </ScreenArea>
    </Background>
  );
};

export default Player;
