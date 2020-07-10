import React from 'react';

import Feed from '../Feed';
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return  (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined> Edit Profile</EditButton>
        <h1>Daniel Simões</h1>
        <h2>@daniel_simoes</h2>

        <p>Developer falling in Love for <a href="www.google.com"> NodeJS, ReactJS and React Native.</a></p>

        <ul>
          <li>
            <LocationIcon />
            Dublin, Ireland
          </li>
          <li>
            <CakeIcon />
            Borned in May, 21 of 1987
          </li>
        </ul>

        <Followage>
          <span>
            Following <strong>100 </strong>
          </span>
          <span>
            <strong>230  </strong>Followed
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;