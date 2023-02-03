import { createTheme } from 'styled-breakpoints';
import { GlobalStyles } from './components/styles/Global.js';
import { ThemeProvider } from 'styled-components';

import { StyledContainer } from './components/styles/Container.styled.js';

import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

const theme = createTheme({
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
});

const items = [
  {
    title: 'Grow Together',
    description:
      'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
    img: 'illustration-grow-together.svg'
  },
  {
    title: 'Flowing Conversations',
    description:
      "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    img: 'illustration-flowing-conversation.svg'
  },
  {
    title: 'Your Users',
    description:
      "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    img: 'illustration-your-users.svg'
  }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />

      <StyledContainer>
        <Cards items={items} />
      </StyledContainer>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
