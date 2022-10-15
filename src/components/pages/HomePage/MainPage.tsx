import React, { RefObject } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
  swing,
  bounceInUp,
  slideInDown,
  slideInRight,
  zoomIn,
} from "react-animations";
import { HashLink } from "react-router-hash-link";

const SlideInDown = styled.span`
  display: inline-block;
  animation: 1s ${keyframes`${slideInDown}`};
`;

const SlideInRight = styled.span`
  display: inline-block;
  animation: 1s ${keyframes`${slideInRight}`};
`;

const Name = styled.h2`
  color: #fadf63;
  font-weight: 700;
  animation: 1s ${keyframes`${zoomIn}`};
`;

const HandSwing = styled.div`
  display: inline-block;
  animation: 1s ${keyframes`${swing}`} infinite;
`;

const BounceIn = styled.div`
  animation: 1s ${keyframes`${bounceInUp}`};
`;

const MainPage = (props: { projects: RefObject<HTMLDivElement> }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="page bg-blue">
        <div>
          <h2 className="font-weight-300">
            <HandSwing>👋</HandSwing>
            <SlideInDown>Hi</SlideInDown> <SlideInRight>I am</SlideInRight>
          </h2>
          <Name>Anastasiia Yershova</Name>
          <h5 className="opacity-75 fw-normal">
            <SlideInDown>Frontend Developer based in the UK</SlideInDown>
          </h5>
          <BounceIn className="buttons">
            <button
              className="btn-custom btn-projects m-1"
              onClick={() =>
                props.projects.current &&
                props.projects.current.scrollIntoView()
              }
            >
              See my projects
            </button>
            <HashLink to="/about#contact" className="btn-contact-me">
              <div className="btn-custom  btn-contact  m-1 ">Contact me</div>
            </HashLink>
          </BounceIn>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
