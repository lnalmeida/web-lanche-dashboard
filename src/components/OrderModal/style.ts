import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba( 0, 0, 0, 0.7);
  backdrop-filter: blur(4.5px);
`;

export const ModalBody = styled.div`
  width: 30rem;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  background-color: #FFFFFF;
  border: 1px solid #333;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;

    header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 120%;
        color: #333;
      }

      button {
        line-height:0;
        background-color: transparent;
        border: none;
      }
    }

    .order-status {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-top: 2rem;
      gap: 0.5rem;
      color: #333;

      small {
        font-size: 0.875rem;
        opacity: 0.8;
      }

      .status-label {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        margin-top: 0.5rem;

        span {
          line-height:150%;
        }

        strong {
          font-size: 1rem;
          font-weight: 600;
          line-height:150%;
          text-align: center;
        }
      }
    }
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem;

  > strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }

    .item-container {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1rem;

     > img {
        width: 3rem;
        height: 2.5rem;
        border-radius: 6px;
      }

      .item-description {
        display: flex;
        flex-direction: column;

        .item-subtotal {
           width: 100%;
           display: flex;
           justify-content: space-between;
           align-items: center;
        }

        >strong {
              font-size: 1rem;
              font-weight: 700;
              line-height: 0%;
            }

        >small {
          font-weight: 400;
          font-size: 0.875rem;
          color: #666;
          line-height: 150%;
        }

        > span {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
            margin-bottom: 0.25rem;
        }
      }
    }

    .items-total {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1.5rem;

      > small {
          display: flex;
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
        }

      > strong {
          font-size: 1rem;
          font-weight: 700;
          line-height: 0%;
          opacity: 0.8;
        }
    }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
    .primary {
      width: 100%;
      font-weight: bold;
      padding: 0.75rem 1.5rem;
      border: 0;
      border-radius: 3rem;
      gap: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background-color: #333;
    }

    .secondary {
      width: 100%;
      font-weight: bold;
      padding: 0.75rem 1.5rem;
      border: 1px solid #D73035;
      border-radius: 3rem;
      gap: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #D73035;
      background-color: transparent;
      transition: all ease-in-out 0.2s;

      &:hover {
        color: #fff;
        background-color: #D73035;
      }
    }
`;

