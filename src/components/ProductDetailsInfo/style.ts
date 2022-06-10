import styled from "styled-components";

export const ProductInfoContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    width: 33%;
`

export const ProductNameContainer = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
`

export const ProductName = styled.p`
    font-size: 2.2rem;
    font-weight: bold;
`

export const ProductPriceContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
`

export const ProductPrice = styled.p`
    font-size: 1.6rem;
    font-weight: bold;
`

export const ProductDescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 90%;
`

export const ProductDescription = styled.p`
    font-size: 1.6rem;
`
