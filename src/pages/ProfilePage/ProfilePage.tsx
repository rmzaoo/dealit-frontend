import React from "react";
import { useSelector } from "react-redux";
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

  const user = useSelector((state: any) => state.user);


  return (
    <ProfilePageBody>
      <ContainerPhotos>
        <BannerContainer>
          <BannerProfile src="https://i.imgur.com/KjfWGVh.jpeg" />
        </BannerContainer>
        <PhotoContainer>
          <PhotoProfile src={user.photo} />
          <ProfileInfo>
            <span>{user.username}</span>
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
