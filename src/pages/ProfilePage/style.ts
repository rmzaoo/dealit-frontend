import styled from "styled-components";
import DashboardPageTitle from "../../components/DashboardPageTitle/DashboardPageTitle";

const ProfilePageBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ContainerPhotos = styled.div`
  width: 100%;
  height: 450px;
`;

const BannerContainer = styled.div`
  height: 300px;
`;

const BannerProfile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 1px solid #169;
`;

const PhotoContainer = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const PhotoProfile = styled.img`
  height: 300px;
  width: auto;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #169;
  margin-top: -150px;
  margin-left: 50px;
`;

const ProfileInfo = styled.div`


`;

export {
  ProfilePageBody,
  ContainerPhotos,
  BannerProfile,
  PhotoProfile,
  BannerContainer,
  PhotoContainer,
  ProfileInfo
};
