import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import {Row, Col} from 'react-bootstrap';
import NikeImg from "../../../../assets/images/nike-logo.png";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #fbbe01;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;

  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #fbbe01;
  }
`;

const NikeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 13px;
  }
`;

const ShoesDetails = (props) => {
  return (
    <DetailsContainer>
      <SmallText>NIKE</SmallText>
      <div>
        <Row>
          <Col sm={7} style={{textAlign: 'left'}}>
            <MediumText>{props.summary['name']}</MediumText>
          </Col>
          <Col sm={5} style={{textAlign: 'right'}}>
            <MediumText>{props.summary['price']} ⧫</MediumText>
          </Col>
        </Row>
      </div>
      <Marginer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer>
        <MediumText>ArtifacX</MediumText>
      </SpacedHorizontalContainer>
      <NikeLogo>
        <img src={NikeImg} />
      </NikeLogo>
    </DetailsContainer>
  );
}
export default ShoesDetails;