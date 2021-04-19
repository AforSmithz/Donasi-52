import MainBanner from "../components/MainBanner";
import useMousePosition from "../hooks/useMousePosition";
import Image from "next/image";
import Faq from "../components/Faq";

export default function Home() {
  const { x, y } = useMousePosition();

  return (
    <>
      <MainBanner x={x} y={y} />
      <Faq />
    </>
  );
}
