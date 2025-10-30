import Services from "@/components/Cards/ServiceComponente";
import { AccordionDemo } from "@/components/QuestionsComponent";
import InfiniteSliderBasic from "@/components/SectionInfinity/MotionInfinity";

export default function Home() {
  return (
    <div className="flex flex-col bg-white mt-[60px]">
      <div className="bg-bg-personal1 p-5">
        <Services/>
      </div>
      <div className="p-5">
        <InfiniteSliderBasic/>
      </div>
      <div className="p-5 mx-auto">
        <AccordionDemo/>
      </div>
    </div>
  );
}
