import React from 'react'
import {Column, Row} from 'styled-material/dist/src/layout'
import styled from 'styled-components'
import GroupImg from '../assets/group.png'
import cardImg from '../assets/codecard.png'
import codeCardImage from '../assets/if-typeof-x-number.png'
import taskCardImage from '../assets/task.png'
import closeCardImage from '../assets/close-card.png'
import inGameImage from '../assets/game-place.png'
import profileSheepImage from '../assets/profile-test.png'

import './main.css'

const TitleBarBackground = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 128px;
  background-color: white;
`

const Title = styled.h1`
  margin: 0;
  width: 100%;
  font-size: 58px;
  color: #5D646E;
  text-align: center;
  font-family: 'headerFont';

  @media (max-width: 700px) {
    font-size: 8vw;
  }
`

const TitleBar = () =>
  <TitleBarBackground>
    <Title>CodeCardCodingCards</Title>
  </TitleBarBackground>

const NumberItem = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 26px;
  line-height: 26px;
  font-size: 11pz;
  color: #475261;
  font-family: 'numbersFont';
`

const SideNumbers = ({startinPoint = 0, amount = 20}) =>
  <Column style={{
    width: 60,
  }}>
    {new Array(amount).fill(0)
      .map((item, index) =>
        <NumberItem
          key={index}
        >{startinPoint+index+1}</NumberItem>)}
  </Column>

const Higlighted = styled.div`
  height: 26px;
  width: 100%;
  background-color: #393F49;
  border-left: 4px solid white;
`

const ExplainerWrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    margin-top: 26px;
  }
`

const ExplainerText = styled.p`
  color: #a2b1c7;
  font-size: 16px;
  max-width: 600px;
  font-family: 'bodyFont';
`

const ExplainerTitle = styled.h2`
  color: #FFFFFF;
  font-size: 20px;
  max-width: 600px;
  font-family: 'boldCode';
`

const BoldWhite = styled.b`
  color: #cccccc;
`

const Explainer = () =>
  <ExplainerWrap>
    <ExplainerTitle>
      Kickstarter video
    </ExplainerTitle>
    <Video/>
    <ExplainerText>
      CodeCardCodingCards is a fun Javascript card game where you code with cards.
    </ExplainerText>
    <ExplainerText>
      We realised that coding is fun and that card games are also fun. So we spent the last 6 months merging the two and fixing all the merge conflicts (hehe).
      <br />
      <br />
      To put i simply, there is 2 different types of cards: <BoldWhite>Code card</BoldWhite> the cards with the code in them and <BoldWhite>Task cards</BoldWhite> the cards with the tasks on them.
    </ExplainerText>
  </ExplainerWrap>


const HowToPlay = () =>
  <ExplainerWrap>
    <ExplainerTitle>
      How to play?
    </ExplainerTitle>
    <ExplainerText>
      You start by taking two <BoldWhite>Task cards</BoldWhite> and five <BoldWhite>Code cards</BoldWhite> all of these are kept secret from the other player. The player that made the latest git (svn :/ ) commit either at work or hobby project starts the game.
    </ExplainerText>

    <ExplainerText>
      You play the game by placing a <BoldWhite>Code card</BoldWhite> and you win the game round by fulfilling one of your <BoldWhite>Task cards.</BoldWhite>
    </ExplainerText>

    <ExplainerText>
      Each player takes turn to place a <BoldWhite>Code card</BoldWhite> under the <BoldWhite>Code card</BoldWhite> placed before it (as illustrated in the picture abowe).
    </ExplainerText>

    <ExplainerText>
      There are of course a couple of more rules and guidelines that will be present in the readme file in the box!
    </ExplainerText>
  </ExplainerWrap>

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 200px;
`

const AboutUs = () =>
  <ExplainerWrap>
    <ExplainerTitle>
      About us
    </ExplainerTitle>
    <ProfileImage src={profileSheepImage}/>

    <ExplainerText>
      We are two Swedish software developers molded by the Swedish climate, growing up fighting polar bears in the street. Later in life we started with software development and for some reason decided to make a card game and a Youtube channel (where we will announce future stupid projects).
      We also have a secret plan for world domination.
    </ExplainerText>
  </ExplainerWrap>

const WebsiteLink = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    color: #f40945;

  }

  &:link {
    text-decoration: none;
  }
`

const Contact = () =>
  <ExplainerWrap>
    <ExplainerTitle>
      Contact
    </ExplainerTitle>
    <ExplainerText>
        <ExplainerText>
          All <BoldWhite>Code cards</BoldWhite> will have programming related quotes on them. Help us by send us your favorite programming quote!
        </ExplainerText>
        <ExplainerText style={{
          textAlign: 'center'
        }}>
          Email: <WebsiteLink href="mailto:contact@lingonsaft.com?Subject=CodeCardCodingCards" target="_blank">contact@lingonsaft.com</WebsiteLink>
        </ExplainerText>
        <ExplainerText style={{
          textAlign: 'center'
        }}>
          Twitter: <WebsiteLink href='https://twitter.com/lingonsaft1' target="_blank">lingonsaft1</WebsiteLink>
        </ExplainerText>

    </ExplainerText>
  </ExplainerWrap>

const Misc = () =>
  <ExplainerWrap>
    <ExplainerTitle>
      Misc
    </ExplainerTitle>
    <ExplainerText>
        <ExplainerText>
          Youtube: <WebsiteLink href="https://www.youtube.com/channel/UCpPEhf3aRau_Tgzbk91YZLg" target="_blank">lingonsaft</WebsiteLink>
        </ExplainerText>
        <ExplainerText>
          Website: <WebsiteLink href='https://lingonsaft.com'>lingonsaft.com</WebsiteLink>
        </ExplainerText>

    </ExplainerText>
    <ExplainerText style={{
      fontSize: 12,
    }}>
      <i>* Rules and cards might be adjusted before the final relase.</i>
    </ExplainerText>
    </ExplainerWrap>

const MainCardsWrap = styled(Row)`
  margin-top: 4px;
  width: 100%;
  padding-top: 64px;
  padding-bottom: 64px;
  border-left: 4px solid white;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media (max-width: 820px) {
    flex-direction: column;
  }

`

const Card = styled.img`
  border-radius: 13px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

const CardWithText = styled(Column)`
  align-items: center;

  @media (max-width: 820px) {
    margin-bottom: 32px;
  }
`

const CardExplainer = styled.span`
  color: #393F49;
  font-size: 16px;
  max-width: 600px;
  font-family: 'bodyFont';
`

const CardSectionHolder = styled(Column)`
  background-color: #f3f3f3;
  flex: 1;
  align-items: center;
  padding-top: 32px;

  h2 {
    margin-bottom: 0px;
    color: #393F49;
  }
`

const MainCardsWithTitle = ({children, title}) =>
  <CardSectionHolder>
    <ExplainerTitle>
      {title}
    </ExplainerTitle>
    {children}
  </CardSectionHolder>


const MainCards = () =>
  <MainCardsWrap>
    <CardWithText style={{
      maxWidth: '400px'
    }}>
      <Card src={codeCardImage}/>
      <CardExplainer>
          Code card
      </CardExplainer>
    </CardWithText>
    <CardWithText style={{
      maxWidth: '400px'
    }}>
      <Card src={taskCardImage}/>
      <CardExplainer>
          Tasks card
      </CardExplainer>
    </CardWithText>
  </MainCardsWrap>

const PlaceCard = styled.img`
  width: 16%;

  @media (max-width: 1000px) {
    width: 24%;
  }

  @media (max-width: 650px) {
    width: 34%;
  }

  @media (max-width: 450px) {
    width: 50%;
  }
`

const PlacedCards = () =>
  <MainCardsWrap>
    <CardWithText>
      <PlaceCard src={inGameImage}/>
      <CardExplainer>

      </CardExplainer>
    </CardWithText>
  </MainCardsWrap>

const CardInfo = () =>
  <ExplainerWrap>
    <ExplainerTitle>
      Card info
    </ExplainerTitle>
    <ExplainerText>
      Size: poker card size (63 x 88 mm)
    </ExplainerText>
    <ExplainerText>
      <BoldWhite>Task cards</BoldWhite>: 40 cards
    </ExplainerText>
    <ExplainerText>

      <BoldWhite>Code cards</BoldWhite>: 80 cards
    </ExplainerText>
    <ExplainerText>
      Every <BoldWhite>Code card</BoldWhite> will have different comments on them, this could be a general programming quote of some other stupid comment.
    </ExplainerText>
  </ExplainerWrap>


const MainContentRow = styled(Row)`
  @media (max-width: 700px) {
    padding-right: 16px;
  }
`

const SignUpKickstarterTitle = styled.h1`
  text-align: center;
  border: 4px solid #f3f3f3;
  padding: 12px;
  border-radius: 6px;
  padding-left: 22px;
  padding-right: 22px;
`

const TitleLink = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    color: #70C3A8;

  }

  &:link {
    text-decoration: none;
  }
`

const ToKickstarter = () =>
  <SignUpKickstarterTitle>
    <TitleLink
      href='http://lingonsaft.com'
    >
      To the Kickstarter
    </TitleLink>
  </SignUpKickstarterTitle>


const Video = () =>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/2QUEWu7koCU"
      frameBorder="0"
      allowFullScreen>
    </iframe>

export default () =>
  <div>
    <TitleBar />
    <Row>
      <SideNumbers amount={29} />
      <Column>
        <Higlighted />
        <MainContentRow style={{
          flex: 1,
          alignItems: 'center',
        }}>
          <Explainer/>
        </MainContentRow>
      </Column>
    </Row>
    <Row>
      <MainCardsWithTitle title='Avaiable card types'>
        <MainCards />
      </MainCardsWithTitle>
    </Row>
    <Row style={{
      marginTop: 4,
    }}>
      <SideNumbers startinPoint={29} amount={10}/>
      <MainContentRow style={{
        flex: 1,
        alignItems: 'baseline',
        justifyContent: 'center',
        marginTop: 64,
      }}>
        <ToKickstarter/>
      </MainContentRow>
    </Row>
    <Row>
      <SideNumbers startinPoint={39} amount={16}/>
      <MainContentRow style={{
        flex: 1,
        alignItems: 'space-around',
        justifyContent: 'center'
      }}>
        <CardInfo/>
      </MainContentRow>
    </Row>
    <Row>
      <MainCardsWithTitle title='Active game example'>
        <PlacedCards />
      </MainCardsWithTitle>
    </Row>
    <Row>
      <SideNumbers startinPoint={55} amount={26} />
      <Column>
        <MainContentRow style={{
          flex: 1,
          alignItems: 'center',
        }}>
          <HowToPlay/>
        </MainContentRow>
      </Column>
    </Row>
    <Row>
      <SideNumbers startinPoint={81} amount={20} />
      <Column>
        <MainContentRow style={{
          flex: 1,
        }}>
          <AboutUs/>
        </MainContentRow>
      </Column>
    </Row>
    <Row>
      <SideNumbers startinPoint={101} amount={8} />
      <Column>
        <MainContentRow style={{
          flex: 1,
          alignItems: 'center',
        }}>
          <Contact/>

        </MainContentRow>
      </Column>
    </Row>
    <Row>
      <SideNumbers startinPoint={109} amount={10} />
      <Column>
        <MainContentRow style={{
          flex: 1,
          alignItems: 'center',
        }}>
          <Misc/>
        </MainContentRow>
      </Column>
    </Row>
    <Row>
      <SideNumbers startinPoint={119} amount={5} />
      <Column>

        <MainContentRow style={{
          justifyContent: 'center'
        }}>
        <ToKickstarter />

        </MainContentRow>
      </Column>
    </Row>

  </div>


