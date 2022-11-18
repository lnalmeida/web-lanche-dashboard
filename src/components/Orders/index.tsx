/* eslint-disable react/react-in-jsx-scope */

import * as C from './style';

import queueIcon from '../../assets/images/queue.svg';
import inProductionIcon from '../../assets/images/in_production.svg';
import doneIcon from '../../assets/images/done.svg';

export const Orders = () => {
  return (
    <C.Container>
      <C.Queue>
        <div className="title">
          <img src={queueIcon} alt="ícone de relógio"/>
          <h1>Fila de espera</h1>
          <span>(1)</span>
        </div>
        <C.TableCard>
          <div className="table-info">
            <h1>Mesa 2</h1>
            <h2>2 Itens</h2>
          </div>
        </C.TableCard>
      </C.Queue>
      <C.Queue>
        <div className="title">
          <img src={inProductionIcon} alt="ícone de relógio"/>
          <h1>Em produção</h1>
          <span>(1)</span>
        </div>
        <C.TableCard>
          <div className="table-info">
            <h1>Mesa 2</h1>
            <h2>2 Itens</h2>
          </div>
        </C.TableCard>
      </C.Queue>
      <C.Queue>
        <div className="title">
          <img src={doneIcon} alt="ícone de relógio"/>
          <h1>Pronto!</h1>
          <span>(1)</span>
        </div>
        <C.TableCard>
          <div className="table-info">
            <h1>Mesa 2</h1>
            <h2>2 Itens</h2>
          </div>
        </C.TableCard>
      </C.Queue>
    </C.Container>
  );
};
