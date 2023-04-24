import styled from 'styled-components'

export const ScoreCardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 7px;
  justify-content: space-between;
`
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`
export const ScoreContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  align-items: center;
  border-radius: 5px;
  width: 15%;
  padding: 30px;
  margin-right: 30px;
  @media screen and (max-width: 576px) {
    padding: 20px;
    width: 30%;
  }
`
export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 25px;
  color: #ffffff;
  font-weight: lighter;
  margin: 0;
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
export const Score = styled.p`
  font-family: 'Bree Serif';
  font-size: 20px;
  color: #223a5f;
  margin: 0px;
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
export const Count = styled.p`
  font-family: 'Roboto';
  font-size: 40px;
  color: #223a5f;
  margin: 0;
`
