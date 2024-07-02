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

const jobs = [
  {
    title: "Senior Software Engineer",
    company: "Phorest Salon",
    date: "April 2024 - present",
  },
  {
    title: "Senior Software Engineer",
    company: "Klimata",
    date: "January - March 2024",
  },
  {
    title: "Senior Software Engineer",
    company: "Topia",
    date: "May 2021 - March -2024",
  },
  {
    title: "Frontend Engineer",
    company: "Videolevels",
    date: "December 2020 - May 2021",
  },
  {
    title: "Frontend Developer",
    company: "BD Electronics",
    date: "June 2018 - November 2020",
  },
];

export const Experience = () => (
  <section id="experience">
    <h5>What Skills I Have / work experience</h5>
    <h2>My Experiences</h2>
    <Timeline>
      {jobs.map(({ title, company, date }) => (
        <Event>
          <EventBefore color="#ffbc00" />
          <TimelineContent>
            <h3>
              {title} at {company}
            </h3>
            <small className="text-light">{date}</small>
          </TimelineContent>
        </Event>
      ))}
    </Timeline>
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
  </section>
);

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

const Timeline = styled.div`
  width: 80%;
  max-width: 800px;
  margin: auto;
  position: relative;
  padding-bottom: 32px;
  font-family: Arial, sans-serif;

  &::before {
    content: "";
    position: absolute;
    width: 4px;
    background-color: #e9ecef;
    top: 40px;
    bottom: 55px;
    left: 30px;
    margin-left: -2px;
  }
`;

const Event = styled.div`
  padding: 20px 0;
  position: relative;
  width: 100%;
`;

const EventBefore = styled.div`
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid ${(props) => props.color};
  top: 25px;
  left: 24px;
  z-index: 1;
`;

const TimelineContent = styled.div`
  padding-left: 60px;
  position: relative;
  background: var(--color-bg-variant);
  padding: 15px;
  border-radius: 6px;
  border: 1px solid transparent;

  &:hover {
    background: var(--color-bg);
    border-color: var(--color-primary-variant);
    cursor: default;
  }
`;
