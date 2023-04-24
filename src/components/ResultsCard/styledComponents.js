import styled from 'styled-components'

export const ResultsCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 50px;
  max-width: 400px;
  @media screen and (max-width: 576px) {
    max-width: 300px;
  }
`
export const Content = styled(ResultsCardContainer)`
  justify-content: space-between;
`

export const ChoiceButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  width: 150px;
  height: 150px;
  padding: 0px;
  @media screen and (max-width: 576px) {
    width: 110px;
    height: 110px;
  }
`
export const ChoiceImage = styled.img`
  width: 100%;
  height: 100%;
`
export const ResultImageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Name = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: #ffffff;
  margin: 0px;
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const Image = styled.img`
  height: 150px;
  width: 150px;
  margin: 10px;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`

export const ResultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`
export const Result = styled.p`
  font-family: 'Bree Serif';
  font-size: 20px;
  color: ${props => {
    switch (props.resultText) {
      case 'YOU WON':
        return '#68bb59'
      case 'YOU LOSE':
        return '#ff4122'
      default:
        return 'yellow'
    }
  }};
  font-weight: 500;
  letter-spacing: 2px;
  text-align: center;
  @media screen and (max-width: 576px) {
    font-size: 17px;
  }
`

export const PlayAgainButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Bree Serif';
  font-size: 14px;
  color: #223a5f;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
`
