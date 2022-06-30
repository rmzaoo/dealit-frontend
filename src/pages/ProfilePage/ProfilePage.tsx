import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BannerContainer,
  BannerProfile,
  ContainerPhotos,
  CustomSecundaryButton,
  PhotoContainer,
  PhotoProfile,
  ProfileInfo,
  ProfilePageBody,
} from "./style";

const ProfilePage = () => {
  const navigate = useNavigate();


  return (
    <ProfilePageBody>
      <ContainerPhotos>
        <BannerContainer>
          <BannerProfile src="https://pbs.twimg.com/profile_banners/44196397/1576183471/1500x500" />
        </BannerContainer>
        <PhotoContainer>
          <PhotoProfile src="https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg" />
          <ProfileInfo>
            <span>Helon Muskatel</span>

            <CustomSecundaryButton
              onClick={() => navigate("/dashboard/settings")}
            >
              Edit Profile
            </CustomSecundaryButton>
          </ProfileInfo>
        </PhotoContainer>
      </ContainerPhotos>
    </ProfilePageBody>
  );
};

export default ProfilePage;
