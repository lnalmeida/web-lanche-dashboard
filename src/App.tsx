import { GlobalStyles } from './styles/GlobalStyles';
/* eslint-disable react/react-in-jsx-scope */
import { Header } from './components/Header';
import { Orders } from './components/Orders';



export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
};
