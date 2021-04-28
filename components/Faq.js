import { useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Dropdown, Answer, FaqContainer, Question } from "../styles/FaqStyle";

const Faq = () => {
  const qnas = [
    {
      id: "0",
      question: "Donasinya akan dibagikan dalam bentuk apa?",
      answer:
        "Donasi akan dibagikan dalam bentuk nasi bungkus sebagai makanan buka bagi orang-orang yang kurang beruntung",
    },
    {
      id: "1",
      question: "Berapa persen donasi saya disalurkan?",
      answer:
        "100% penghasilan dari Donasi 52 ini akan disalurkan ke yang lebih membutuhkan.",
    },
    {
      id: "2",
      question: "Kalo ada surplus uangnya kemana? ",
      answer:
        "Surplus akan kami bagikan ke panti asuhan terdekat sehingga semua pemasukkan akan masuk ke yang membutuhkan",
    },
    {
      id: "3",
      question: "Masih kurang yakin, Kalo mau nanya lagi kemana?",
      answer:
        "jika masih kurang yakin, silahkan kontak narahubung kami dengan cara mengklik link diatas",
    },
  ];

  return (
    <Dropdown>
      {qnas.map((qna, index) => (
        <Qna
          key={qna.id}
          id={qna.id}
          index={index}
          question={qna.question}
          answer={qna.answer}
        />
      ))}
    </Dropdown>
  );
};

const Qna = ({ id, index, question, answer }) => {
  const animate = useAnimation();

  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-20%",
  });

  useEffect(() => {
    if (inView) {
      animate.start("visible");
    }
  }, [animate, inView]);

  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
  const [expanded, setExpanded] = useState(null);
  return (
    <>
      <FaqContainer
        ref={contentRef}
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
        right={(index + 1) % 2 ? false : true}
        key={id}
      >
        <Question onClick={() => setExpanded(id === expanded ? false : id)}>
          <span>{index + 1}</span>
          {question}
        </Question>
        <Answer
          right={!((index + 1) % 2)}
          animate={{ height: id === expanded ? "100%" : "0" }}
        >
          {answer}
        </Answer>
      </FaqContainer>
    </>
  );
};

export default Faq;
