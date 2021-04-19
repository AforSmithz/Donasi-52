import React, { useEffect, useRef, useState } from "react";
import {
  Headline,
  HomeContainer,
  HoverImage,
  Line,
} from "../styles/MainBannerStyle";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { DonateButton, Flex } from "../styles/globalStyle";
import { motion, whileHover } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MainBanner = ({ x, y }) => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const [hovered, setHovered] = useState(false);
  const [textPos, setTextPos] = useState({ top: 0, left: 0 });

  let list = useRef(null);
  let test = useRef(null);

  useEffect(() => {
    setTextPos({
      top: list.current.getBoundingClientRect().top,
      left: list.current.getBoundingClientRect().left,
    });
  }, [setTextPos]);

  const limadua = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        // delayChildren: 0.6,
        staggerChildren: 0.05,
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
        delayChildren: 0.5,
        staggerChildren: 0.05,
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
      transition: { duration: 1, ...transition },
    },
  };

  return (
    <HomeContainer>
      <div>
        <Headline
          variants={limadua}
          initial="initial"
          animate="animate"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          ref={list}
        >
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
      <HoverImage
        initial={{ opacity: 0 }}
        animate={{
          opacity: hovered ? 1 : 0,
          x: x - textPos.left - 200,
          y: y - textPos.top - 300,
        }}
      >
        <img
          src={require("../assets/images/foto2.png")}
          width="250"
          height="200"
        />
      </HoverImage>
      <Line
        initial={{ width: 0 }}
        animate={{ width: "40vw", transition: { ...transition, delay: 1 } }}
      />
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
        <motion.a
          whileHover={{ scale: 1.1 }}
          style={{ position: "relative", display: "inline-block" }}
          href="https://www.instagram.com/smada.52/"
          target="_blank"
        >
          <AiOutlineInstagram size={50} color={"black"} />
        </motion.a>
        <motion.span whileHover={{ scale: 1.1 }}>
          <AiOutlineWhatsApp size={50} />
        </motion.span>
      </Flex>
    </HomeContainer>
  );
};

export default MainBanner;
