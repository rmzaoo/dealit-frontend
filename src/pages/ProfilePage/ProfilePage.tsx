import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchOrdersByUserId } from "../../api/ordersFetch";
import {
  BannerContainer,
  BannerProfile,
  ContainerPhotos,
  CustomSecundaryButton,
  PhotoContainer,
  PhotoProfile,
  ProfileInfo,
  ProfilePageBody,
  StatsDiv,
  StatDiv,
  StatName,
  LowerDiv,
  InnerStatDiv,
  SubStatName,
  SubStatNumber,
} from "./style";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userOrders, setUserOrders] = useState<any>();
  const [boughtProdsN, setBoughtProdsN] = useState(0);
  const [soldProdsN, setSoldProdsN] = useState(4);
  const [boughtProdsM, setBoughtProdsM] = useState(0);
  const [soldProdsM, setSoldProdsM] = useState(245.96);
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    fetchOrdersByUserId(user.id, user.token).then((data) =>
      setUserOrders(data)
    );
  }, []);
  useEffect(() => {
    if (userOrders) {
      let num = 0;
      let spent = 0;
      userOrders.forEach((order: any) => {
        num += order.products.length;
        order.products.forEach((prod: any) => {
          spent += prod.price * prod.quantity;
        });
      });
      setBoughtProdsN(num);
      setBoughtProdsM(spent);
    }
  }, [userOrders]);

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
      <StatsDiv>
        <StatDiv>
          <StatName>Products Bought</StatName>
          <LowerDiv>
            <InnerStatDiv>
              <SubStatName>Quantity</SubStatName>
              <SubStatNumber>{boughtProdsN}</SubStatNumber>
            </InnerStatDiv>
            <InnerStatDiv>
              <SubStatName>Spent</SubStatName>
              <SubStatNumber>{Math.round((boughtProdsM + Number.EPSILON) * 100) / 100} $</SubStatNumber>
            </InnerStatDiv>
          </LowerDiv>
        </StatDiv>
        <StatDiv>
          <StatName>Products Sold</StatName>
          <LowerDiv>
            <InnerStatDiv>
              <SubStatName>Quantity</SubStatName>
              <SubStatNumber>{soldProdsN}</SubStatNumber>
            </InnerStatDiv>
            <InnerStatDiv>
              <SubStatName>Earned</SubStatName>
              <SubStatNumber>{soldProdsM}</SubStatNumber>
            </InnerStatDiv>
          </LowerDiv>
        </StatDiv>
        <StatDiv>
          <StatName>Total Earned</StatName>
          <LowerDiv>
            <InnerStatDiv>
              <SubStatName>$(U.S. Dollars)</SubStatName>
              <SubStatNumber>{soldProdsM - boughtProdsM}</SubStatNumber>
            </InnerStatDiv>
          </LowerDiv>
        </StatDiv>
      </StatsDiv>
    </ProfilePageBody>
  );
};

export default ProfilePage;
