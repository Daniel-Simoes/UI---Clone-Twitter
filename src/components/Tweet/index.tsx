import React from 'react';

import { 
Container, 
Retweeted, 
RocketseatIcon, 
Body, 
Avatar, 
Content, 
Header, 
Dot, 
Description, 
ImageContent, 
Icons, 
Status, 
ComentIcon, 
RetweetIcon, 
LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Voce retuitou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Daniel</strong>
            <span>@Daniel </span>
            <Dot />
            <time>12 de maio</time>
          </Header>

          <Description> oi</Description>
          <ImageContent />
          <Icons>
            <Status>
              <ComentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              56 
            </Status>
            <Status>
              <LikeIcon />
              180
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;