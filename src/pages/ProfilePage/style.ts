import { screen } from "@testing-library/react";
import styled from "styled-components";
import SecundaryButton from "../../components/SecundaryButton/SecundaryButton";

const ProfilePageBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const ContainerPhotos = styled.div`
  width: 100%;
  height: 450px;

  @media (max-width: 768px) {
    height: 500px;
  }
`;

const BannerContainer = styled.div`
  height: 300px;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
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
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    height: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const PhotoProfile = styled.img`
  height: 300px;
  width: auto;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #169;
  margin-top: -150px;
  margin-left: 50px;

  @media screen and (max-width: 768px) {
    height: 150px;
    margin-left: 0;
    margin-top: -100px;
  }
`;

const ProfileInfo = styled.div`
  width: 100%;
  margin-left: 25px;
  height: 100%;
  display: flex;
  align-items: center;

  span {
    font-size: 60px;
    letter-spacing: 3px;
    font-weight: normal;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 0px;

    span {
      font-size: 45px;
      font-weight: bolder;
    }
  }
`;

const CustomSecundaryButton = styled(SecundaryButton)`
  font-size: 30px;
  margin: 0 20px;

  @media screen and (max-width: 768px) {
    margin: 20px 0;
    font-size: 18px;
  }
`;

const StatsDiv = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StatDiv = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const StatName = styled.p`
  color: white;
  border-bottom: 1px solid #02a4e3;
  padding: 10px 5px;
  font-size: 20px;
  width: 70%;
  text-align: center;
  margin: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LowerDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: space-between;
`;

const InnerStatDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 70%;
`;

const SubStatName = styled.p`
  color: white;
  border-bottom: 1px solid #02a4e3;
  padding: 10px 5px;
  font-size: 12px;
`;

const SubStatNumber = styled.p`
  color: white;
  font-size: 16px;
`;

export {
  ProfilePageBody,
  ContainerPhotos,
  BannerProfile,
  PhotoProfile,
  BannerContainer,
  PhotoContainer,
  ProfileInfo,
  CustomSecundaryButton,
  StatsDiv,
  StatDiv,
  StatName,
  LowerDiv,
  InnerStatDiv,
  SubStatName,
  SubStatNumber,
};
