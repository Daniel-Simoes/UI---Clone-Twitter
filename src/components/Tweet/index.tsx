import React from 'react';

import { 
Container, 
Retweeted, 
RetweetedIcon, 
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
        <RetweetedIcon />
        You retweeted
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Daniel Simões</strong>
            <span>@DanielSimoes </span>
            <Dot />
            <time>12 of July</time>
          </Header>

          <Description> Testing Tweet...</Description>
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