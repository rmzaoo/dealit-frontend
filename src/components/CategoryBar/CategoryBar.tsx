import React from 'react'
import { PrimaryButton } from '../PrimaryButton/style'
import TextLink from '../TextLink/TextLink'
import { Container } from './style'
import { useNavigate } from 'react-router'

const CategoryBar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <TextLink onClick={() => navigate("/plp",{state:{name:'Category 1'}})}>Category 1</TextLink>
      <TextLink onClick={() => navigate("/plp",{state:{name:'Category 2'}})}>Category 2</TextLink>
      <TextLink onClick={() => navigate("/plp",{state:{name:'Category 3'}})}>Category 3</TextLink>
      <TextLink onClick={() => navigate("/plp",{state:{name:'Category 4'}})}>Category 4</TextLink>
      <TextLink onClick={() => navigate("/plp",{state:{name:'Category 5'}})}>Category 5</TextLink>
      <TextLink onClick={() => navigate("/plp",{state:{name:'Category 6'}})}>Category 6</TextLink>
    </Container>
  )
}

export default CategoryBar