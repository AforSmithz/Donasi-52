import { MainBanner } from "./components/MainBanner";
import useMousePosition from "./hooks/useMousePosition";
import Quote from "./components/Quote";
import Faq from "./components/Faq";

export default function App() {
  const { x, y } = useMousePosition();

  return (
    <>
      <MainBanner x={x} y={y} />
      <Quote />
      <Faq />
    </>
  );
}
