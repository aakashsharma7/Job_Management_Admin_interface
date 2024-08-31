import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[481px] rounded-xl flex flex-row items-center justify-center p-[5px] text-left text-base text-dark-black font-satoshi-variable ${className}`}
    >
      <div className="rounded-3xs bg-white flex flex-row items-center justify-center py-2 px-6">
        <b className="relative">Testimonials</b>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
