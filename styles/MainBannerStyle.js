import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Headline = styled(motion.div)`
  font-size: 13vw;
  height: auto;
  overflow: hidden;
  span {
    display: inline-block;
    position: relative;
  }
`;

export const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
