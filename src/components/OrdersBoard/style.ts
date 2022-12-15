import styled from 'styled-components';
import { Container } from '../Header/style';

export const Container = styled.div`
  width: 100%;
  max-width: 76rem;
  margin: 2.5rem auto;
  display: flex;
  gap: 2rem;
`;

export const  Board = styled.div`
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

    > header {
      padding: 0.5rem;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      }
  `;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;

    > button {
      display: flex;
      height: 6rem;
      width: 100%;
      margin-top: 1.5rem;
      flex-direction: column;
      padding: 2rem 8rem;
      border: 1px solid rgba(204, 204, 204, 0.4);
      border-radius: 0.5rem;
      background-color: #FFF;
      outline: none;



        > strong {
          width: 100%;
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 120%;
          color: #333;
        }

        > span {
          width: 100%;
          text-align: center;
          font-size: 0.8rem;
          font-weight: 400;
          line-height: 150%;
          color: #666;
        }
    }
`;
