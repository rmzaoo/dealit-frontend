import React from 'react'
import { PrimaryButton } from '../PrimaryButton/style'
import TextLink from '../TextLink/TextLink'
import { Container } from './style'

const CategoryBar = () => {
  return (
    <Container>
      <TextLink>Category 1</TextLink>
      <TextLink>Category 2</TextLink>
      <TextLink>Category 3</TextLink>
      <TextLink>Category 4</TextLink>
      <TextLink>Category 5</TextLink>
      <TextLink>Category 6</TextLink>
    </Container>
  )
}

export default CategoryBar