import React, { useState } from "react";
import { Dropdown, Answer, FaqContainer, Question } from "../styles/FaqStyle";

const Faq = () => {
  const [expanded, setExpanded] = useState("0");

  const qnas = [
    {
      id: "0",
      question: "Donasinya akan dibagikan dalam bentuk apa?",
      answer:
        "Donasi akan dibagikan dalam bentuk nasi bungkus sebagai makanana buka orang-orang yang kurang beruntung",
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
        "Donasi akan dibagikan dalam bentuk nasi bungkus sebagai makanan buka orang-orang yang kurang beruntung",
    },
    {
      id: "3",
      question: "Masih kurang yakin, Kalo mau nanya lagi kemana?",
      answer:
        "Donasi akan dibagikan dalam bentuk nasi bungkus sebagai makanana buka orang-orang yang kurang beruntung",
    },
  ];

  return (
    <Dropdown>
      {qnas.map((qnas, index) => (
        <FaqContainer right={(index + 1) % 2 ? false : true} key={qnas.id}>
          <Question
            onClick={() => setExpanded(qnas.id === expanded ? false : qnas.id)}
          >
            <span>{index + 1}</span>
            {qnas.question}
          </Question>
          <Answer
            right={(index + 1) % 2 ? false : true}
            animate={{ height: qnas.id === expanded ? "100%" : "0" }}
          >
            {qnas.answer}
          </Answer>
        </FaqContainer>
      ))}
    </Dropdown>
  );
};

export default Faq;
