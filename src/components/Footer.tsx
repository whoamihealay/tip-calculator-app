import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.frontendmentor.io/profile/whoamihealay"
        target="_blank"
        rel="noreferrer"
      >
        Andrew
      </a>
      .
    </StyledFooter>
  );
};

export default Footer;
