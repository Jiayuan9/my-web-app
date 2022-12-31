import React from 'react'
import {Link} from 'gatsby'
import styled, {keyframes} from "styled-components";
import Layout from "../components/layout"
import './index.css'

import bg from '../images/wallpaper3.jpg'
import sketch from '../images/logo-sketch.png'
import figma from '../images/logo-figma.png'
import studio from '../images/logo-studio.png'
import framer from '../images/logo-framer.png'
import react from '../images/logo-react.png'
import swift from '../images/logo-swift.png'
import Card from "../components/Card";

import w1 from '../images/wallpaper.jpg'
import w2 from '../images/wallpaper2.jpg'
import w3 from '../images/wallpaper3.jpg'
import w4 from "../images/wallpaper4.jpg";
import Section from "../components/Section";
import logo from '../images/logo-react.png';
import Wave from "../components/Wave";

import staticdata from '../../staticdata.json'
import Cell from "../components/Cell";


const IndexPage = () => (
    <Layout>
        <Hero>
            <HeroGroup>
                <HeroTitle>Hello<br/>Jiayuan.</HeroTitle>
                <HeroText>Keep it up.</HeroText>
                <HeroLink to="/page-2">Contact me</HeroLink>
                <Logo>
                    <img src={sketch} width="50" />
                    <img src={figma} width="50" />
                    <img src={studio} width="50" />
                    <img src={framer} width="50" />
                    <img src={react} width="50" />
                    <img src={swift} width="50" />
                </Logo>
                <Wave />
            </HeroGroup>
            <CardTitle>Jiayuan's Blog</CardTitle>
            <CardGroup>

                <Card
                    title="DesignSystem"
                    text="10 sections"
                    image={w1} />
                <Card
                    title="React for Designers"
                    text="11 sections"
                    image={w2} />
                <Card
                    title="Sound Design"
                    text="5 sections"
                    image={w3} />
                <Card
                    title="ARKit 2"
                    text="10 sections"
                    image={w4} />
            </CardGroup>
            <Section
                image={w2}
                logo={logo}
                title="React for Designers"
                text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." />
            <SectionCaption>12 sections - 6 hours</SectionCaption>
            <SectionCellGroup>
            {staticdata.cells.map(cell => (
                <Cell title={cell.title} image={cell.image} />
            ))}
            </SectionCellGroup>
        </Hero>

    </Layout>
)

export default IndexPage

const SectionCaption = styled.p`
  margin-top: 30px;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`


const Hero = styled.div`
  background: url(${bg});
  height: 920px;
  background-size: cover;
  background-position: center;
  position: relative;
`

const HeroGroup = styled.div`
  margin: 0 auto;
  max-width: 500px;
  padding: 150px 50px;
  text-align: center;
  align-items: center;
`

const HeroTitle = styled.h1`
  margin: 30px;
  color: white;
  font-size: 60px;
  line-height: 1.2;
  opacity: 0;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2,0.8,0.2,1);
  @keyframes HeroAnimation{
    0%{
      opacity:0;
      transform: translateY(20px);
    }
    100%{
      opacity:1;
      transform: translateY(0px);
    }
  }

`

const HeroText = styled.p`
  color: rgba(255,255,255,0.8);
  font-size: 33px;
  line-height: 1.5;
  margin-top: 30px;
  margin-bottom: 50px;
  opacity: 0;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2,0.8,0.2,1);
  @keyframes HeroAnimation{
    0%{
      opacity:0;
      transform: translateY(20px);
    }
    100%{
      opacity:1;
      transform: translateY(0px);
    }
  }
`

const HeroLink = styled(Link)`
  //display: block;
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  background: rgba(0,0,0,0.7);
  max-width: 200px;
  padding: 9px 10px;
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 20px;
  transition: 0.8s cubic-bezier(0.2,0.8,0.2,1);
  :hover{
    background: white;
    color: black;
  }
`

const Logo = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 50px;
  margin: 100px 0;
  align-items: center;
  justify-items: center;
  @media (max-width: 640px) {
    .Hero .Logos {
      grid-template-columns: repeat(3, 1fr);
    }
`

const CardGroup = styled.div`
  margin: 50px 40px 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  justify-items: center;
  @media (max-width: 1060px) {
      grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
      grid-template-columns: repeat(1, 1fr);
  }
`

const CardTitle = styled.h2`
  margin: 50px 20px;
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(104.74deg, #050A27 0%,#4A548C 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 640px) {
      font-size: 30px;
    }
`