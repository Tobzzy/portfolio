import styled from "styled-components";

const data = [
  {
    id: 1,
    image: "./ola.png",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
  {
    id: 2,
    image: "./ola.png",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
  {
    id: 2,
    image: "./ola.png",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev",
  },
];

export const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <Container>
      {data.map(({ id, image, title, github, demo }) => {
        return (
          <Item key={id}>
            <ImageContainer>
              <img src={image} alt="" />
            </ImageContainer>
            <h3>{title}</h3>
            <CTA>
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </CTA>
          </Item>
        );
      })}
    </Container>
  </section>
);

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  width: var(--container-width-lg);
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Item = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);
  margin: 1.2rem 0 2rem;

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }
`;

const ImageContainer = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`;

const CTA = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;
