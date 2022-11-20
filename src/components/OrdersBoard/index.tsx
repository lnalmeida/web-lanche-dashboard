/* eslint-disable react/react-in-jsx-scope */
import * as C from './style';
import { IOrder } from '../../types/Orders';
import { OrderModal } from '../OrderModal';
import { useState } from 'react';

interface IOrderBoardProps {
  title: string;
  icon: string;
  orders: IOrder[];
}

export const OrdersBoard = ({title, icon, orders}:IOrderBoardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  return (
    <C.Board>
      <OrderModal visible={isModalVisible} />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      <C.OrdersContainer>
        {orders.map(order => (
          <button type="button" key={order._id} onClick={handleOpenModal}>
            <strong>Mesa {order.table}</strong>
            <span>{order.products.length} {order.products.length > 1 ? 'Itens': 'Item'}</span>
          </button>
        ))}
      </C.OrdersContainer>
    </C.Board>
  );
};
