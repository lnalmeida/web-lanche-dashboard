import styled from 'styled-components';

export const  Board = styled.div`
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 1rem;
  gap: 1.5rem;

  > header {
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
      height: 8rem;
      width: 100%;
      margin-top: 1.5rem;
      flex-direction: column;
      padding: 2.625rem 9rem;
      border: 1px solid rgba(204, 204, 204, 0.4);
      border-radius: 0.5rem;
      background-color: #FFF;



        > strong {
          width: 100%;
          font-size: 1rem;
          font-weight: 500;
          line-height: 120%;
          color: #333;
        }

        > span {
          width: 100%;
          text-align: center;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 150%;
          color: #666;
        }
    }
`;
