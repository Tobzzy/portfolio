import styled from "styled-components";

import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";

export const About = () => (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <Container>
      <AboutMe>
        <ImageContainer>
          <img src="./ola.png" alt="ola" />
        </ImageContainer>
      </AboutMe>
      <Content>
        <Cards>
          <Card>
            <BsAwardFill className="about_icon" />
            <h5>Experience</h5>
            <small>6+ Years Working</small>
          </Card>
          <Card>
            <FiUsers className="about_icon" />
            <h5>Clients</h5>
            <small>40+ WorldWide</small>
          </Card>
          <Card>
            <FaProjectDiagram className="about_icon" />
            <h5>Projects</h5>
            <small>70+ Completed Projects</small>
          </Card>
        </Cards>
        <p>
          As a Senior Frontend Engineer with a degree in Cybersecurity
          Engineering, I bring a unique combination of technical expertise and
          security knowledge to the table. With over 6 years of experience in
          developing and designing web applications using cutting-edge
          technologies such as JavaScript, ReactJS, and TypeScript, I am
          well-versed in building user-centric, secure web applications.
          Proficient in integrating external libraries and experienced in
          creating responsive, mobile-first designs with Figma, I am also
          skilled in optimizing page load times and implementing SEO strategies.
          My background in cybersecurity engineering allows me to approach
          development with a security-first mindset. I am a team player who
          enjoys collaborating with cross-functional teams to deliver innovative
          solutions for complex problems. I am always looking to expand my
          skills and stay up-to-date with the latest technologies in the
          industry.
        </p>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </Content>
    </Container>
  </section>
);

const Container = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;
  width: var(--container-width-lg);
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    var(--color-primary),
    transparent
  );
  display: grid;
  place-items: center;

  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  @media screen and (max-width: 600px) {
    width: 65%;
    margin: 0 auto 3rem;
  }
`;

const ImageContainer = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: var(--transition);

  &:hover {
    transform: rotate(0);
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.article`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);

  &:hover {
    border-color: var(--color-primary-variant);
    background: rgba(0, 0, 0, 0.2);
    cursor: default;
  }

  h5 {
    font-size: 0.95rem;
  }

  small {
    font-size: 0.7rem;
  }
`;

const Content = styled.div`
  margin: 2rem 0 2.6rem;
  color: var(--color-light);

  @media screen and (max-width: 1024px) {
    margin: 1rem 0 1.5rem;
  }

  @media screen and (max-width: 600px) {
    margin: 1.5rem 0;
    text-align: center;
  }
`;
