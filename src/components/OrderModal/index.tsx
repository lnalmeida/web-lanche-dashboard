/* eslint-disable react/react-in-jsx-scope */
import * as C from './style';

import closeIcon from '../../assets/images/close-icon.svg';

//apagar depois, só para mockup
import itemImgFrngoCatupiry from '../../mocks/images/frango-catupiry.png';
import itemImg4Queijos from '../../mocks/images/quatro-queijos.png';


interface IOrderModalProps {
  visible: boolean;
}

export const OrderModal = ({visible}:IOrderModalProps) => {
  if(!visible) {
    return null;
  }
  return (
    <C.Overlay>
      <C.ModalBody>
        <header>
          <strong>Mesa 2</strong>
          <button type="button" >
            <img src={closeIcon} alt="Close icon" />
          </button>
        </header>
        <div className="order-status">
          <small>Status do Pedido</small>
          <div className="status-label">
            <span>🕑</span>
            <strong>Fila de espera</strong>
          </div>
        </div>
        <C.OrderDetails>
          <small>Itens</small>
          <div className="item-container">
            <img src={itemImgFrngoCatupiry} alt="Imagem do item" />
            <div className="item-description">
              <span>
                <small>1x</small>
                <strong>Frango com Catupiry</strong>
              </span>
              <small>R$ 40,00</small>
            </div>
          </div>
          <div className="items-total">
            <small>Total</small>
            <strong>R$ 120,00</strong>
          </div>
        </C.OrderDetails>
      </C.ModalBody>
    </C.Overlay>
  );
};
