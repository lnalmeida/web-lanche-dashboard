/* eslint-disable react/react-in-jsx-scope */

import { OrdersBoard } from '../OrdersBoard';
import * as C from './style';

import { orders } from '../../mocks/orders';

export const Orders = () => {
  // eslint-disable-next-line prefer-const
  return (
    <C.Container>
      <OrdersBoard
        title="Fila de espera"
        icon="🕑"
        orders={orders}
      />
      <OrdersBoard
        title="Em Produção"
        icon="👩‍🍳"
        orders={[]}
      />
      <OrdersBoard
        title="Pronto!"
        icon="✅"
        orders={[]}
      />
    </C.Container>
  );
};
