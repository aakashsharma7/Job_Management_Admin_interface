import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[calc(50%_-_720px)] shadow-[0px_0px_14px_rgba(198,_191,_191,_0.25)] bg-white w-[1440px] h-[214px] overflow-hidden text-left text-base text-dimgray-100 font-satoshi-variable ${className}`}
    >
      <img
        className="absolute top-[173.5px] left-[1118.5px] max-h-full w-[248.5px]"
        alt=""
        src="/vector-4.svg"
      />
      <img
        className="absolute top-[173.5px] left-[1118.5px] max-h-full w-[168.5px]"
        alt=""
        src="/vector-5.svg"
      />
      <img
        className="absolute top-[140px] left-[386px] max-w-full overflow-hidden h-12"
        alt=""
        src="/vector-1.svg"
      />
      <img
        className="absolute top-[140px] left-[720px] max-w-full overflow-hidden h-12"
        alt=""
        src="/vector-1.svg"
      />
      <img
        className="absolute top-[140px] left-[1054px] max-w-full overflow-hidden h-12"
        alt=""
        src="/vector-1.svg"
      />
      <img
        className="absolute h-[8.41%] w-[1.25%] top-[72.9%] right-[94.31%] bottom-[18.69%] left-[4.44%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[155px] left-[109px] font-medium text-center">
        Search By Job Title, Role
      </div>
      <img
        className="absolute top-[156px] left-[410px] w-4 h-[21px]"
        alt=""
        src="/location.svg"
      />
      <img
        className="absolute top-[156px] left-[751px] w-[18.1px] h-4"
        alt=""
        src="/vector1.svg"
      />
      <div className="absolute top-[155px] left-[453px] font-medium">
        Preferred Location
      </div>
      <div className="absolute top-[155px] left-[794px] font-medium">
        Job type
      </div>
      <img
        className="absolute top-[156px] left-[659px] w-6 h-6 overflow-hidden"
        alt=""
        src="/hicon--linear--down-2.svg"
      />
      <img
        className="absolute top-[156px] left-[1000px] w-6 h-6 overflow-hidden"
        alt=""
        src="/hicon--linear--down-2.svg"
      />
      <b className="absolute top-[128px] left-[1098px] text-gray-200">
        Salary Per Month
      </b>
      <b className="absolute top-[128px] left-[1274px] text-gray-200">{`₹50k - ₹80k `}</b>
      <div className="absolute top-[166px] left-[1104px] rounded-[50%] bg-white border-black border-[5px] border-solid box-border w-[15px] h-[15px]" />
      <div className="absolute top-[166px] left-[1274px] rounded-[50%] bg-white border-black border-[5px] border-solid box-border w-[15px] h-[15px]" />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
