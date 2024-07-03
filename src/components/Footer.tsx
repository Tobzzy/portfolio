import styled from "styled-components";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export const Footer = () => (
  <FooterWrapper>
    <Logo href="#">Toyib Ahmed</Logo>
    <Permalinks>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </Permalinks>
    <Socials>
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
    </Socials>
    <Copyright>
      <small>&copy; Toyib Ahmed - All rights reserved</small>
      <br />
      <small>Made with &#10084; and &#9749;</small>
    </Copyright>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  background: var(--color-primary);
  padding: 3rem;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;

  a {
    color: var(--color-bg);
  }
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: block;
`;

const Permalinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;

  a {
    background-color: var(--color-bg);
    color: var(--color-white);
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    border: 1px solid transparent;

    &:hover {
      background: transparent;
      color: var(--color-bg);
      border-color: var(--color-bg);
    }
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 2.6rem;
  }
`;

const Copyright = styled.div`
  margin-bottom: 4rem;
  color: var(--color-bg);
`;
