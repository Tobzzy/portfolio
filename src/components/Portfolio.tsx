import styled from "styled-components";

const data = [
  {
    id: 1,
    image: "./example.png",
    title: "Example project 1",
    github: "https://github.com",
    demo: "https://example.com/",
  },
  {
    id: 2,
    image: "./example.png",
    title: "Example project 2",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    image: "./example.png",
    title: "Example project 3",
    github: "https://github.com",
    demo: "https://example.com",
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
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);
  margin: 1.2rem 0 2rem;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    border-color: var(--color-primary-variant);
  }
`;

const ImageContainer = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`;

const CTA = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;
