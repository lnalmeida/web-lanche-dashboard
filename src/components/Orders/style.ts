import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  margin: 2.5rem auto;
  width: 100%;
  max-width: 76rem;
  height: 13.8rem;
`;

export const  Queue = styled.div`
  display: flex;
  flex-direction:column;
  padding: 1rem;
  border: 1px solid #CCC;
  border-radius: 1rem;
  gap: 1.5rem;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-top: 1rem;
      width: 1.5rem;
    }

    h1 {
      font-size: 1.5rem;
      line-height: 1.3125rem;
      margin: 1rem 0 0 0.5rem;
      text-align: center;
      color: #333333;
    }

    span {
      font-size: 1.5rem;
      line-height: 1.3125rem;
      text-align: center;
      margin: 1rem 0 0 0.5rem;
      color: #333333;
      font-weight: 400;
    }
  }
`;

export const TableCard = styled.div`
  width: 22rem;
  height: 8rem;
  display: flex;
  flex-direction:column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 0;
  background: #FFFFFF;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 1.5rem;

    .table-info {
      display: flex;
      flex-direction:column;
      align-items: center;
      gap: 0.25rem;

      h1 {
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        line-height: 120%;
        color: #333333;
      }

      h2 {
        font-size: 0.875rem;
        font-weight: 400;
        text-align: center;
        line-height: 150%;
        color: #666;
      }
    }

`;
