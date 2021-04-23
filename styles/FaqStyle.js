import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Dropdown = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding-bottom: 200px;
`;

export const FaqContainer = styled(motion.div)`
  height: auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  /* margin-right: 20px; */

  @media (max-width: 1000px) {
    align-items: center;
  }

  ${(props) =>
    props.right &&
    css`
      padding-right: 10px;
      @media (min-width: 500px) {
        align-items: flex-end;
      }
    `}
  flex-direction: column;
  /* ${(props) =>
    props.right ||
    css`
        padding-left: 50px;
      }
    `} */
`;

export const Question = styled(motion.div)`
  display: flex;
  box-sizing: border-box;
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
  overflow: hidden;
  box-sizing: border-box;
  width: 40vw;
  margin-left: 100px;
  /* height: 100%; */
  font-size: 2vw;
  @media (max-width: 500px) {
    font-size: 3.5vw;
  }

  margin-top: 20px;
`;
