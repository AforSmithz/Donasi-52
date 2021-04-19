import styled from "styled-components";

export const QuoteContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 350px;
    @media (min-width: 1000px) {
      font-size: 3rem;
    }
    font-size: 1rem;
    position: relative;
  }
`;
