import FrameComponent2 from "../components/frame-component2";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent9 from "../components/frame-component9";
import FrameComponent10 from "../components/frame-component10";

const Assignemnt = () => {
  return (
    <div className="w-full relative bg-ghostwhite h-[1024px] overflow-hidden">
      <FrameComponent2 />
      <div className="absolute top-[21px] left-[calc(50%_-_445px)] shadow-[0px_0px_20px_rgba(128,_128,_128,_0.15)] rounded-[122px] bg-white border-gray-100 border-[1px] border-solid box-border w-[890px] h-20">
        <div className="absolute top-[calc(50%_-_24px)] left-[calc(50%_-_419px)] w-[838px] h-12">
          <img
            className="absolute top-[1.7px] left-[0px] w-11 h-[44.7px] object-cover"
            alt=""
            src="/frame-54@2x.png"
          />
          <div className="absolute top-[0px] left-[calc(50%_-_351px)] w-[613px] h-12">
            <FrameComponent8 />
            <FrameComponent7 />
            <FrameComponent6 />
            <FrameComponent5 />
            <FrameComponent4 />
          </div>
          <FrameComponent3 />
        </div>
      </div>
      <FrameComponent9 />
      <FrameComponent10 />
    </div>
  );
};

export default Assignemnt;
