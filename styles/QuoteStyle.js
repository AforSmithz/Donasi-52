import styled from "styled-components";

export const QuoteContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 200px;
    @media (min-width: 1000px) {
      font-size: 3rem;
      margin-bottom: 350px;
    }
    @media (max-width: 400px) {
      font-size: 1.25rem;
    }
    font-size: 1.5rem;
    position: relative;
  }
`;
