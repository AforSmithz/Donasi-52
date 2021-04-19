import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaqContainer } from "../styles/FaqStyle";

const Faq = () => {
  const [quoteRef, inView] = useInView({
    triggerOnce: true,
    // rootMargin: "-300px",
  });
  const animate = useAnimation();

  useEffect(() => {
    if (inView) {
      console.log("hello");
      animate.start("visible");
    }
  }, [animate, inView]);

  return (
    <FaqContainer>
      <motion.p
        ref={quoteRef}
        animate={animate}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
          },
          hidden: {
            opacity: 0,
            y: 72,
          },
        }}
      >
        <q>No one has ever become poor by giving.</q>
        <br />
        -Anne Frank
      </motion.p>
    </FaqContainer>
  );
};

export default Faq;
