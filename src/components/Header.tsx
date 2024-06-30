import styled from "styled-components";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export const Header = () => (
  <HeaderContainer>
    <HeaderWrapper>
      <Heading5>Hello I'm</Heading5>
      <h1>Toyib Ahmed</h1>
      <div>Senior Software Engineer</div>
      <CTA />
      <ImageWrapper>
        <img src="./ola.png" alt="ola" />
      </ImageWrapper>
      <Scroll href="#contact">Scroll Down</Scroll>
      <HeaderSocials />
    </HeaderWrapper>
  </HeaderContainer>
);

const HeaderSocials = () => (
  <SocialsWrapper>
    <a
      href="https://www.linkedin.com/in/tobzzy/"
      target="_blank"
      rel="noreferrer"
    >
      <BsLinkedin />
    </a>
    <a href="https://github.com/Tobzzy" target="_blank" rel="noreferrer">
      <FaGithub />
    </a>
  </SocialsWrapper>
);

const CTA = () => (
  <CtaWrapper>
    <a className="btn" href="./resume.pdf" download>
      Download CV
    </a>
    <a className="btn btn-primary" href="#contact">
      Let's Talk
    </a>
  </CtaWrapper>
);

const HeaderContainer = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    height: 68vh;
  }

  @media screen and (max-width: 600px) {
    height: 100vh;
  }
`;

const HeaderWrapper = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
  width: var(--container-width-lg);
  margin: 0 auto;
`;

const CtaWrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;

const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  bottom: 3rem;
  left: 0;

  ::after {
    content: "";
    width: 1px;
    height: 2rem;
    background: var(--color-primary);
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 26rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 0rem 1.5rem 1.5rem 1.5rem;
`;

const Scroll = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotateZ(90deg);
  font-weight: 200;
  font-size: 0.9rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Heading5 = styled.h5`
  color: var(--color-light);
`;
