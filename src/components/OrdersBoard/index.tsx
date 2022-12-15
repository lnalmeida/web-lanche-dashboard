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

  const [selectedOrder, setSelectedOrder] = useState<null | IOrder>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const handleOpenModal = (order: IOrder) => {
    setIsModalVisible(true);
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setIsModalVisible(true);
    setSelectedOrder(null);
  };

  return (

    <C.Container>
      <C.Board>
        <OrderModal
          visible={isModalVisible}
          order={selectedOrder}
          onCloseModal={handleCloseModal}
        />
        <header>
          <span>{icon}</span>
          <strong>{title}</strong>
          <span>({orders.length})</span>
        </header>
        {orders.length > 0 && ( //orders.length > 0 || !!orders.length || !Boolean(order.length)
          <C.OrdersContainer>
            {orders.map(order => (
              <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} {order.products.length > 1 ? 'Itens': 'Item'}</span>
              </button>
            ))}
          </C.OrdersContainer>
        )}
      </C.Board>
    </C.Container>
  );
};
