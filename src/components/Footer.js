import { StyledContainer } from './styles/Container.styled';
import {
  StyledFooter,
  StyledFooterCard,
  StyledFooterMain,
  StyledFooterCol,
  StyledList,
  StyledSocialIcons
} from './styles/Footer.styled';

import { MdLocationOn, MdPhoneInTalk, MdMailOutline } from 'react-icons/md';
import { FaTwitter, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { StyledButton } from './styles/Button.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledFooterCard>
          <h1>Ready To Build Your Community?</h1>
          <StyledButton layout='primary' size='lg'>
            Get Started For Free
          </StyledButton>
        </StyledFooterCard>
      </StyledContainer>

      <StyledFooterMain>
        <StyledContainer>
          <a href='/'>
            <img src='./assets/images/logo-white.svg' alt='Huddle' />
          </a>
        </StyledContainer>

        <StyledContainer>
          <StyledFooterCol>
            <StyledList>
              <li>
                <MdLocationOn />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </span>
              </li>
              <li>
                <MdPhoneInTalk />
                <span>+1-543-123-4567</span>
              </li>
              <li>
                <MdMailOutline />
                <span>
                  <a href='mailto:example@huddle.com'>example@huddle.com</a>
                </span>
              </li>
            </StyledList>
          </StyledFooterCol>

          <StyledFooterCol>
            <StyledList>
              <li>
                <a href='javascript:;'>About Us</a>
              </li>
              <li>
                <a href='javascript:;'>What We Do</a>
              </li>
              <li>
                <a href='javascript:;'>FAQ</a>
              </li>
            </StyledList>
          </StyledFooterCol>

          <StyledFooterCol>
            <StyledList>
              <li>
                <a href='javascript:;'>Career</a>
              </li>
              <li>
                <a href='javascript:;'>Blog</a>
              </li>
              <li>
                <a href='javascript:;'>Contact Us</a>
              </li>
            </StyledList>
          </StyledFooterCol>

          <StyledFooterCol>
            <StyledSocialIcons>
              <li>
                <a href='javascript:;'>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href='javascript:;'>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href='javascript:;'>
                  <FaLinkedin />
                </a>
              </li>
            </StyledSocialIcons>

            <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
          </StyledFooterCol>
        </StyledContainer>
      </StyledFooterMain>
    </StyledFooter>
  );
};

export default Footer;
