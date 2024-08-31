import InputBox from "./input-box";
import FrameComponent from "./frame-component";
import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[265px] left-[64px] flex flex-row items-center justify-start gap-4 text-center text-base text-black font-satoshi-variable ${className}`}
    >
      <InputBox />
      <FrameComponent />
      <FrameComponent1 />
      <InputBox />
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
