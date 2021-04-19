import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Dropdown = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding-bottom: 500px;
`;

export const FaqContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: flex-start;

  ${(props) =>
    props.right &&
    css`
      align-items: flex-start;
      @media (min-width: 1000px) {
        align-items: flex-end;
      }
    `}
  flex-direction: column;
  ${(props) =>
    props.right ||
    css`
      @media (min-width: 1000px) {
        padding-left: 100px;
      }
    `}
`;

export const Question = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 55vw;
  font-family: "Monument Extended";
  font-size: 1rem;
  @media (min-width: 1000px) {
    font-size: 4rem;
  }

  font-weight: 800;
  cursor: pointer;
  transition: all 1s ease-in-out;

  &:hover {
    -webkit-text-fill-color: rgb(235, 219, 205);
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 2px;
  }

  span {
    font-size: 2rem;
    margin-right: 50px;
  }
  div {
    width: 100px;
    height: 4px;
    background: black;
    transition: 0.1 ease-in-out;
  }
`;

export const Answer = styled(motion.div)`
  display: flex;
  overflow: hidden;
  width: 50vw;
  font-size: 1rem;
  @media (min-width: 1000px) {
    font-size: 3rem;
  }

  margin-top: 20px;
  ${(props) =>
    props.right &&
    css`
      align-items: flex-end;
      @media (min-width: 1000px) {
        align-items: flex-start;
      }
    `}
  ${(props) =>
    props.right ||
    css`
      ${"" /* margin-left: 100px; */}
      @media (min-width: 1000px) {
        align-items: flex-start;
      }
    `}
`;
