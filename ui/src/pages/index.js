import React from 'react'
import {Column, Row} from 'styled-material/dist/src/layout'
import styled from 'styled-components'
import GroupImg from '../assets/group.png'
import cardImg from '../assets/codecard.png'
import codeCardImage from '../assets/if-typeof-number.png'
import taskCardImage from '../assets/task-if-for-if.png'
import closeCardImage from '../assets/close-card.png'
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
  color: #8E9CB0;
  font-size: 16px;
  max-width: 600px;
  font-family: 'bodyFont';
`

const ExplainerTitle = styled.h2`
  color: #cccccc;
  font-size: 20px;
  max-width: 600px;
  font-family: 'bodyFont';
`

const Explainer = () =>
  <ExplainerWrap>
    <ExplainerTitle>
      Kickstarter video
    </ExplainerTitle>
    <Video/>
    <ExplainerText>
      Ah, the technical interview. Nothing like it. Not only does it cause anxiety, but it causes anxiety for several different reasons.
    </ExplainerText>
    <ExplainerText>
      How many people will be asking questions? From experience I can tell you there’s nothing like walking into a room and seeing nine people.
    </ExplainerText>
  </ExplainerWrap>

const MainCardsWrap = styled(Row)`
  margin-top: 4px;
  width: 100%;
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: #FFFFFF;
  border-left: 4px solid white;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media (max-width: 820px) {
    flex-direction: column;
  }

`

const Card = styled.img`

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

const MainCards = () =>
  <MainCardsWrap>
    <CardWithText>
      <Card src={codeCardImage}/>
      <CardExplainer>
          Code card
      </CardExplainer>
    </CardWithText>
    <CardWithText>
      <Card src={taskCardImage}/>
      <CardExplainer>
          Tasks card
      </CardExplainer>
    </CardWithText>
    <CardWithText>
      <Card src={closeCardImage}/>
      <CardExplainer>
          Close card
      </CardExplainer>
    </CardWithText>
  </MainCardsWrap>

const MainContentRow = styled(Row)`
  @media (max-width: 700px) {
    padding-right: 16px;
  }
`

const SignUpTitle = styled.h1`
  text-align: center;
  color: #8E9CB0;
  width: 100%;
`

const SignUpWrap = styled(Column)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const SignUp = () =>
  <SignUpWrap>
    <section className='content bgcolor-3'>
      <SignUpTitle>Get notified when we launch the kickstarter!</SignUpTitle>
      <span className='input input--kyo'>
        <input className='input__field input__field--kyo' type='text' id='input-19' placeholder='Your email here..' />
        <label className='input__label input__label--kyo' for='input-19'>
          <span className='input__label-content input__label-content--kyo'>What's your email?</span>
          <span className='input__label-content input__label-content--kyo'>
            We wont send emails about anything except the launch of the Kickstarter. We will also delete all emails once the kickstarter has launched.
          </span>
        </label>
      </span>
    </section>
  </SignUpWrap>


const Video = () =>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/ZerMnqc-5K0"
      frameBorder="0"
      allowFullScreen>
    </iframe>

export default () =>
  <div>
    <TitleBar />
    <Row>
      <SideNumbers amount={26} />
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
      <MainCards />
    </Row>
    <Row style={{
      marginTop: 4,
    }}>
      <SideNumbers startinPoint={20}/>
      <MainContentRow style={{flex: 1}}>

      </MainContentRow>
    </Row>
  </div>


