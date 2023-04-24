import {
  ScoreCardContainer,
  CardContent,
  ScoreContent,
  Heading,
  Score,
  Count,
} from './styledComponents'

const ScoreCard = props => {
  const {score} = props
  return (
    <ScoreCardContainer>
      <CardContent>
        <Heading>
          ROCK
          <br /> PAPER <br /> SCISSORS
        </Heading>
      </CardContent>
      <ScoreContent>
        <Score>Score</Score>
        <Count>{score}</Count>
      </ScoreContent>
    </ScoreCardContainer>
  )
}

export default ScoreCard
