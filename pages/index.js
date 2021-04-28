import { MainBanner } from "../components/MainBanner";
import useMousePosition from "../hooks/useMousePosition";
import Quote from "../components/Quote";
import Faq from "../components/Faq";
import Head from "next/head";

export default function Home() {
  const { x, y } = useMousePosition();

  return (
    <>
      <Head>
        <title>Donasi 52</title>
        <meta
          name="description"
          content="Donasi yang diselenggarakan oleh Smada 52 Yogyakarta"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainBanner x={x} y={y} />
      <Quote />
      <Faq />
    </>
  );
}
