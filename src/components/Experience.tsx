import styled from "styled-components";

import { BsPatchCheckFill } from "react-icons/bs";

const skills = [
  {
    title: "Frontend Development",
    skill: [
      { language: "HTML", scale: "Expert" },
      { language: "CSS", scale: "Expert" },
      { language: "Javascript", scale: "Expert" },
      { language: "React", scale: "Expert" },
      { language: "Ember", scale: "Intermediate" },
      { language: "Styled Components", scale: "Expert" },
      { language: "Tailwind", scale: "Intermediate" },
      { language: "Bootstrap", scale: "Intermediate" },
    ],
  },
  {
    title: "Backend Development",
    skill: [
      { language: "NodeJs", scale: "Expert" },
      { language: "NextJs", scale: "Intermediate" },
      { language: "Express", scale: "Advanced" },
      { language: "Java", scale: "Intermediate" },
      { language: "Kotlin", scale: "Intermediate" },
      { language: "GraphQL", scale: "Intermediate" },
      { language: "MySQL", scale: "Intermediate" },
      { language: "PHP", scale: "Intermediate" },
    ],
  },
];

export const Experience = () => (
  <Section id="experience">
    <h5>What Skills I Have</h5>
    <h2>My Experiences</h2>
    <Container>
      {skills.map(({ title, skill }) => (
        <Skill>
          <Title>{title}</Title>
          <Content>
            {skill.map(({ language, scale }) => (
              <Details>
                <BsPatchCheckFill className="experience-details-icon" />
                <div>
                  <h4>{language}</h4>
                  <small className="text-light">{scale}</small>
                </div>
              </Details>
            ))}
          </Content>
        </Skill>
      ))}
    </Container>
  </Section>
);

const Section = styled.section`
  margin-bottom: 120px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: var(--container-width-lg);
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;

const Skill = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`;

const Title = styled.h3`
  margin-bottom: 2rem;
  color: var(--color-primary);
  text-align: center;
`;

const Content = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;

  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
`;

const Details = styled.article`
  display: flex;
  gap: 1rem;
`;
