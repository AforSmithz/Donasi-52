import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Flex = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;

  ${(props) =>
    props.align &&
    css`
      align-items: ${(props) => props.gap};
    `}

  ${(props) =>
    props.gap &&
    css`
      gap: ${(props) => props.gap};
    `}

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.row &&
    css`
      flex-direction: row;
    `}

  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${(props) =>
    props.alignTop &&
    css`
      justify-content: flex-start;
    `}

  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `}
`;

export const DonateButton = styled(motion.a)`
  display: flex;
  font-size: 1.5rem;
  width: 200px;

  @media (max-width: 500px) {
    width: 35vw;
    font-size: 1rem;
  }
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 20px;
  min-height: 5vh;
`;
