import FrameComponent from "./frame-component";
import FrameComponent1 from "./frame-component1";
import InputBox from "./input-box";
import PropTypes from "prop-types";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[641px] left-[64px] flex flex-row items-center justify-start gap-4 text-center text-base text-black font-satoshi-variable ${className}`}
    >
      <FrameComponent />
      <FrameComponent1 />
      <InputBox />
      <FrameComponent />
    </div>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
