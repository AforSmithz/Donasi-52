import React, { Children, useEffect, useRef, useState } from "react";
import {
  Headline,
  HomeContainer,
  HoverImage,
  Line,
} from "../styles/MainBannerStyle";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { DonateButton, Flex } from "../styles/globalStyle";
import { motion, whileHover } from "framer-motion";
import Letters from "../data/letters.json";

export const MainBanner = ({ x, y }) => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const [hovered, setHovered] = useState(false);
  const [textPos, setTextPos] = useState({ top: 0, left: 0 });

  let lima2 = useRef(null);

  useEffect(() => {
    setTextPos({
      top: lima2.current.getBoundingClientRect().top,
      left: lima2.current.getBoundingClientRect().left,
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
      <DonateButton
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
