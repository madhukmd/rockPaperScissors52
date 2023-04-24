import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`

export const MainContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
`
export const RulesContainer = styled.div`
  margin-top: auto;
  align-self: flex-end;
`
export const Rules = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  height: 60vh;
  padding: 30px;
`
export const RulesImage = styled.img`
  height: 95%;
  width: 100%;
  margin: auto;
  @media screen and (min-width: 567px) {
    max-width: 500px;
  }
`
