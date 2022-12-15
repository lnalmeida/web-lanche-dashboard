/* eslint-disable react/react-in-jsx-scope */
import * as C from './style';

import { formatCurrency } from '../../utils/utils';
import closeIcon from '../../assets/images/close-icon.svg';

import { IOrder } from '../../types/Orders';
import { useEffect } from 'react';


interface IOrderModalProps {
  visible: boolean;
  order: null | IOrder;
  onCloseModal: () => void;
}

export const OrderModal = ({visible, order, onCloseModal}:IOrderModalProps) => {

  useEffect(() => {
    const listener = function (e: { key: string; keyCode: number; preventDefault: () => void; stopPropagation: () => void; }) {
      if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();

        onCloseModal();
      }
    };

    window.addEventListener('keyup', listener);

    return (() => {
      window.removeEventListener('keyup', listener);
    });

  }, [visible]);

  const totalOrder = () => {
    let total = 0;
    if(!order) {
      return null;
    }
    total = order.products.reduce((total, item) => total + (item.quantity * item.product.price), 0);

    return formatCurrency(total);
  };

  if(!visible || !order) {
    return null;
  }

  return (
    <C.Overlay>
      <C.ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" >
            <img onClick={onCloseModal} src={closeIcon} alt="Botão fechar" />
          </button>
        </header>
        <div className="order-status">
          <small>Status do Pedido</small>
          <div className="status-label">
            <span>
              {order.status === 'WAITING' && '🕑'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </div>
        <C.OrderDetails>
          <small>Itens</small>

          {order.products.map(({_id, quantity, product}) => (
            // <div key={_id} className="item">
            //   <img
            //     src={`http://localhost:3210/uploads/${product.imagePath}`}
            //     alt={product.name}
            //     width="56"
            //     height="28.51"
            //   />
            // </div>


            <div key={_id} className="item-container">
              <img
                src={`http://localhost:3210/uploads/${product.imagePath}`}
                alt={product.name}
                width="56"
                height="28.51"
              />
              <div className="item-description">
                <span>
                  <small>{quantity}x</small>
                  <strong>{product.name}</strong>
                </span>
                <span className="item-subtotal">
                  <small>{formatCurrency(product.price)}</small>
                  {/* <small>{`R$ ${(quantity * product.price).toFixed(2).replace('.', ',')}`}</small> */}
                </span>
              </div>
            </div>
          ))}


          <div className="items-total">
            <small>Total</small>
            <strong>{totalOrder()}</strong>
          </div>



        </C.OrderDetails>
        <C.Actions>
          <button type="button" className='primary'>
            <span>👩‍🍳</span>
            <strong>Em produção</strong>
          </button>

          <button type="button" className='secondary'>
            Cancelar pedido
          </button>
        </C.Actions>
      </C.ModalBody>
    </C.Overlay>
  );
};
