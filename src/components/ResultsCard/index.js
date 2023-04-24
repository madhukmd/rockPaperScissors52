import {
  ResultsCardContainer,
  ChoiceButton,
  ChoiceImage,
  ResultImageCard,
  Name,
  Image,
  ResultTextContainer,
  Result,
  PlayAgainButton,
} from './styledComponents'

const ResultsCard = props => {
  const {
    choicesList,
    isClicked,
    OnClickImage,
    resultImages,
    resultText,
    restart,
  } = props

  return (
    <ResultsCardContainer>
      {!isClicked ? (
        <>
          <ChoiceButton
            type="button"
            data-testid="rockButton"
            onClick={() => OnClickImage(choicesList[0].id)}
          >
            <ChoiceImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
            />
          </ChoiceButton>
          <ChoiceButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => OnClickImage(choicesList[1].id)}
          >
            <ChoiceImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
            />
          </ChoiceButton>
          <ChoiceButton
            type="button"
            data-testid="paperButton"
            onClick={() => OnClickImage(choicesList[2].id)}
          >
            <ChoiceImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
            />
          </ChoiceButton>
        </>
      ) : (
        <>
          <ResultImageCard>
            <Name>YOU</Name>
            <Image src={resultImages[0].imageUrl} alt="your choice" />
          </ResultImageCard>
          <ResultImageCard>
            <Name>OPPONENT</Name>
            <Image src={resultImages[1].imageUrl} alt="opponent choice" />
          </ResultImageCard>
          <ResultTextContainer>
            <Result resultText={resultText}>{resultText}</Result>
            <PlayAgainButton type="button" onClick={restart}>
              PLAY AGAIN
            </PlayAgainButton>
          </ResultTextContainer>
        </>
      )}
    </ResultsCardContainer>
  )
}
export default ResultsCard
