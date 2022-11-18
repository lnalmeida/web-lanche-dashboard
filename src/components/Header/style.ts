import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 10rem;
  gap: 41rem;
  justify-content: center;
  align-items: center;
  padding:  2rem 7rem;
  background: #D73035;
  overflow: hidden;
`;

export const Content = styled.div`
      width: 100%;
      max-width: 76rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 4rem;

`;

export const Text = styled.div`
  display: flex;
  flex-direction:column;
  align-items: flex-start;

    h1 {
      font-size: 2rem;
      font-weight: 600;
      line-height: 2.4rem;
      color: #FFFFFF;
    }

    h2 {
       font-size: 1rem;
       font-weight: 400;
       line-height: 1.5rem;
       color: #FFFFFF;
       opacity: 0.9;
       margin-top: 0.375rem;
     }
`;

export const Logo = styled.div`
  img {
    width: 100%;
  }
`;
