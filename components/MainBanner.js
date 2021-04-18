import React from "react";
import { Headline, HomeContainer } from "../styles/MainBannerStyle";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { DonateButton, Flex } from "../styles/globalStyle";
import { motion, whileHover } from "framer-motion";
const MainBanner = () => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const limadua = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        // delayChildren: 0.6,
        staggerChildren: 0.4,
      },
    },
  };

  const Berbagi = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.4,
        staggerDirection: -1,
      },
    },
  };

  const child = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: { duration: 50, ...transition },
    },
  };
  return (
    <HomeContainer>
      <div>
        <Headline variants={limadua} initial="initial" animate="animate">
          <motion.span variants={child}>D</motion.span>
          <motion.span variants={child}>o</motion.span>
          <motion.span variants={child}>n</motion.span>
          <motion.span variants={child}>a</motion.span>
          <motion.span variants={child}>s</motion.span>
          <motion.span variants={child}>i</motion.span>
          {/* 52 */}
        </Headline>
        <Headline variants={Berbagi} initial="initial" animate="animate">
          <motion.span variants={child}>5</motion.span>
          <motion.span variants={child}>2</motion.span>
          {/* Berbagi */}
        </Headline>
      </div>
      <DonateButton
        whileHover={{
          background: "black",
          color: "white",
          scale: 1.1,
          transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.09] },
        }}
        style={{ margin: "2rem" }}
      >
        Donate Now
      </DonateButton>
      <Flex row gap={"1rem"}>
        <motion.span
          whileHover={{ scale: 1.1 }}
          style={{ position: "relative", display: "inline-block" }}
        >
          <AiOutlineInstagram size={50} />
        </motion.span>
        <motion.span whileHover={{ scale: 1.1 }}>
          <AiOutlineWhatsApp size={50} />
        </motion.span>
      </Flex>
    </HomeContainer>
  );
};

export default MainBanner;
