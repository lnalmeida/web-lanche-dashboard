import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba( 0, 0, 0, 0.5);
  backdrop-filter: blur(4.5px);
`;

export const ModalBody = styled.div`
  min-width: 30rem;
  min-height: 35rem;
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
        font-weight: 600;
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
        font-weight: 500;
        line-height: 150%;
        text-align: center;
      }

      .status-label {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        margin-bottom: 2rem;

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

    .item-container {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1rem;


      > img {
        width: 3rem;
        height: 2.5rem;
        border-radius: 0.25rem;
      }

      .item-description {
        display: flex;
        flex-direction: column;

        > span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-bottom: 0.25rem;

            >strong {
              font-size: 1rem;
              font-weight: 600;
              line-height: 0%;
            }

            >small {
              font-weight: 400;
              font-size: 0.875rem;
              line-height: 150%;
            }
        }

        small {
          display: flex;
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
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
          font-weight: 600;
          line-height: 0%;
        }
    }
`;

