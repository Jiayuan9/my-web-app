import React from 'react'
import styled from "styled-components";

const Card = (props) => (
    <KCard>
        <KImg src={props.image} />
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.title}</CardText>
    </KCard>
)

export default Card


const KCard = styled.div`
  width: 300px;
  height: 225px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
  display: grid;
  grid-template-rows: 1fr 1fr;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  cursor: pointer;
  :hover{
    transform: scale(1.1, 1.1);
    box-shadow: 0 30px 60px rgba(0,0,0, 0.5);
  }
`

const KImg = styled.img`
  height: 110%;
  position: absolute;
  top: 0;
  z-index: -1;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  :hover{
    transform: translateY(-20px);
  }
`

const CardTitle = styled.h3`
  color: white;
  font-size: 30px;
  margin: 20px 0 0 20px;
  width: 190px;
`

const CardText = styled.p`
  color: rgba(255,255,255, 0.8);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  align-self: end;
  margin: 0 0 20px 20px;
`