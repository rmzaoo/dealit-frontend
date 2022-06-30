import React from "react";
import {
  BannerContainer,
  BannerProfile,
  ContainerPhotos,
  PhotoContainer,
  PhotoProfile,
  ProfileInfo,
  ProfilePageBody,
} from "./style";

const ProfilePage = () => (
  <ProfilePageBody>
    <ContainerPhotos>
      <BannerContainer>
        <BannerProfile src="https://pbs.twimg.com/profile_banners/44196397/1576183471/1500x500" />
      </BannerContainer>
      <PhotoContainer>
          <PhotoProfile src="https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg" />
          <ProfileInfo>
            
          </ProfileInfo>
      </PhotoContainer>
    </ContainerPhotos>
  </ProfilePageBody>
);

export default ProfilePage;
