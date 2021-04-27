import React, { Children, useEffect, useRef, useState } from "react";
import {
  Headline,
  HomeContainer,
  HoverImage,
  Line,
  Name,
} from "../styles/MainBannerStyle";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { DonateButton, Flex } from "../styles/globalStyle";
import { motion, whileHover } from "framer-motion";
import Letters from "../data/letters.json";

export const MainBanner = ({ x, y }) => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const [hovered, setHovered] = useState(false);
  const [wa1hovered, setwa1Hovered] = useState(false);
  const [wa2hovered, setwa2Hovered] = useState(false);
  const [textPos, setTextPos] = useState({ top: 0, left: 0 });
  const [wa1Pos, setWa1Pos] = useState({ top: 0, left: 0 });
  const [wa2Pos, setWa2Pos] = useState({ top: 0, left: 0 });

  let lima2 = useRef(null);
  let wa1 = useRef(null);
  let wa2 = useRef(null);

  useEffect(() => {
    setTextPos({
      top: lima2.current.getBoundingClientRect().top,
      left: lima2.current.getBoundingClientRect().left,
    });
    setWa1Pos({
      top: wa1.current.getBoundingClientRect().top,
      left: wa1.current.getBoundingClientRect().left,
    });
    setWa2Pos({
      top: wa2.current.getBoundingClientRect().top,
      left: wa2.current.getBoundingClientRect().left,
    });
  }, [setTextPos, setWa1Pos, setWa2Pos]);

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
        <Headline variants={limadua} initial="initial" animate="animate">
          {Letters.map((item) => (
            <CharTitle key={item.id} x={x} y={y} image={item.image}>
              {item.letter}
            </CharTitle>
          ))}
        </Headline>
        <Headline
          variants={Berbagi}
          initial="initial"
          animate="animate"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          ref={lima2}
        >
          <motion.span variants={child}>5</motion.span>
          <motion.span variants={child}>2</motion.span>
          <HoverImage
            initial={{ opacity: 0 }}
            animate={{
              opacity: hovered ? 1 : 0,
              x: x - textPos.left - 300,
              y: y - textPos.top - 100,
            }}
          >
            <img src="images/foto2.png" />
          </HoverImage>
        </Headline>
      </div>
      <Line
        initial={{ width: 0 }}
        animate={{ width: "60vw", transition: { ...transition, delay: 1 } }}
      />
      <br />
      {/* <DonateButton
        whileHover={{
          background: "black",
          color: "white",
          scale: 1.1,
          transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.09] },
        }}
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        style={{ margin: "2rem" }}
      >
        Donate Now
      </DonateButton> */}
      <Flex row gap={"1rem"}>
        <motion.a
          whileHover={{ scale: 1.1 }}
          style={{ position: "relative", display: "inline-block" }}
          href="https://www.instagram.com/smada.52/"
          target="_blank"
        >
          <AiOutlineInstagram size={50} color={"black"} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          ref={wa1}
          onHoverStart={() => setwa1Hovered(true)}
          onHoverEnd={() => setwa1Hovered(false)}
          href="https://wa.me/+6285713999343"
          target="_blank"
        >
          <AiOutlineWhatsApp size={50} color={"black"} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          ref={wa2}
          onHoverStart={() => setwa2Hovered(true)}
          onHoverEnd={() => setwa2Hovered(false)}
          href="https://wa.me/+6281325308504"
          target="_blank"
        >
          <AiOutlineWhatsApp size={50} color={"black"} />
        </motion.a>
      </Flex>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Name
          // initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: 30,
            y: 5,
          }}
        >
          Maruf
        </Name>
        <Name
          // initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: 45,
            y: 5,
          }}
        >
          Zuldha
        </Name>
      </div>
    </HomeContainer>
  );
};

export const CharTitle = ({ children, offset, x, y, image }) => {
  const [hovered, setHovered] = useState(false);
  const [textPos, setTextPos] = useState({ top: 0, left: 0 });

  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  let character = useRef(null);

  useEffect(() => {
    setTextPos({
      top: character.current.getBoundingClientRect().top,
      left: character.current.getBoundingClientRect().left,
    });
  }, [setTextPos]);

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
    <>
      <motion.span
        variants={child}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        ref={character}
      >
        {children}
      </motion.span>
      <HoverImage
        initial={{ opacity: 0 }}
        animate={{
          opacity: hovered ? 1 : 0,
          x: x - textPos.left - 200,
          y: y - textPos.top + 300,
        }}
      >
        <img src={`images/${image}.png`} />
      </HoverImage>
    </>
  );
};
