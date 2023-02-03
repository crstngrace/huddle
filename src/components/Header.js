import {
  StyledHeader,
  StyledNav,
  StyledHeaderContent,
  StyledTextContent,
  StyledImgContent
} from './styles/Header.styled';
import { StyledContainer } from './styles/Container.styled';
import { StyledButton } from './styles/Button.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNav>
          <a href='/'>
            <img src='./assets/images/logo.svg' alt='Huddle' />
          </a>
          <StyledButton>Try It Free</StyledButton>
        </StyledNav>

        <StyledHeaderContent>
          <StyledTextContent>
            <h1>
              Build The Community <br />
              Your Fans Will Love
            </h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <StyledButton layout='primary' size='md'>
              Get Started For Free
            </StyledButton>
          </StyledTextContent>

          <StyledImgContent>
            <img
              src='./assets/images/illustration-mockups.svg'
              alt='Huddle Application'
            />
          </StyledImgContent>
        </StyledHeaderContent>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
