/* eslint-disable react/react-in-jsx-scope */
import logo from '../../assets/images/logo.svg';

import * as C from './style';

export const Header = () => {
  return (
    <C.Container>
      <C.Content>
        <C.Text>
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </C.Text>
        <C.Logo>
          <img src={logo} alt="Logo web-lanche" />
        </C.Logo>
      </C.Content>
    </C.Container>
  );
};
