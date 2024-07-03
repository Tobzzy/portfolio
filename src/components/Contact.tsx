import styled, { css } from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";

export const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = (values: {}) => {
    // do something
    console.log(values);
  };

  return (
    <Section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <Container>
        <Options>
          <Option>
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>ahmedtoyib1@gmail.com</h5>
            <a href="mailto:ahmedtoyib1@gmail.com">Send a message</a>
          </Option>
          <Option>
            <RiWhatsappLine className="contact-option-icon" />
            <h4>Whatsapp</h4>
            <h5>+363 00000000</h5>
            <a href="https://api.whatsapp.com/send?phone=36300000000">
              Send a message
            </a>
          </Option>
        </Options>
      </Container>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Full Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && <Error>{errors.name}</Error>}
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && <Error>{errors.email}</Error>}
            <Textarea
              name="message"
              placeholder="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            ></Textarea>
            {errors.message && touched.message && (
              <Error>{errors.message}</Error>
            )}
            <Button type="submit" disabled={true}>
              Send Message
            </Button>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 120px;
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  gap: 12%;
  width: var(--container-width-lg);
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 60%;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const Option = styled.div`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--transition);

  a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    border-color: var(--color-primary-variant);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-top: 60px;
`;

const common = css`
  align-self: center;
  width: 50%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-variant);
  resize: none;
  color: var(--color-white);

  @media screen and (max-width: 600px) {
    width: 70%;
  }
`;

const Input = styled.input`
  ${common}
`;

const Textarea = styled.textarea`
  ${common}
`;

const Error = styled.small`
  color: #f05f5f;
  align-self: center;
`;

const Button = styled.button`
  width: max-content;
  display: inline-block;
  color: var(--color-primary);
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid var(--color-primary);
  transition: var(--transition);
  background: var(--color-primary);
  color: var(--color-bg);
  align-self: center;

  &:hover {
    background: var(--color-white);
    color: var(--color-bg);
    border-color: transparent;
  }
`;
