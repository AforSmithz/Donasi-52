import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Headline = styled(motion.div)`
  font-size: 13vw;
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    font-size: 5rem;
  }
  height: auto;
  overflow: hidden;
  width: max-content;
  font-family: serif;
  span {
    display: inline-block;
    position: relative;
  }

  @media (min-width: 1000px) {
    line-height: 0.9;
  }
`;

export const TitleSpan = styled(motion.span)`
  display: inline-block;
  position: relative;
`;

export const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Line = styled(motion.div)`
  position: relative;
  height: 2px;
  background: black;
`;

export const HoverImage = styled(motion.div)`
  position: relative;
  height: 0;
  width: 0;
  z-index: -100;
  img {
    height: 20vh;
  }
`;
