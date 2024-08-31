import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[316px] relative shadow-[0px_0px_14px_rgba(211,_211,_211,_0.15)] rounded-xl bg-white h-[360px] overflow-hidden shrink-0 text-center text-base text-black font-satoshi-variable ${className}`}
    >
      <div className="absolute top-[calc(50%_-_164px)] left-[calc(50%_-_142px)] shadow-[0px_0px_10.25px_rgba(148,_148,_148,_0.25)] rounded-[13.18px] [background:linear-gradient(180deg,_#fefefd,_#f1f1f1)] border-white border-[1px] border-solid box-border w-[83.5px] h-[82px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_30px)] left-[calc(50%_-_29.75px)] rounded-[93.33px] bg-darkorange w-[60px] h-[60px] overflow-hidden">
          <img
            className="absolute top-[2px] left-[2px] rounded-[105.84px] w-[51.4px] h-[51.4px] object-cover"
            alt=""
            src="/image-78@2x.png"
          />
        </div>
      </div>
      <b className="absolute top-[117px] left-[16px] text-xl">UX/UI Designer</b>
      <div className="absolute top-[160px] left-[16px] flex flex-row items-center justify-start gap-4 text-dimgray-200">
        <div className="flex flex-row items-center justify-start gap-1">
          <div className="flex flex-col items-start justify-start p-[0.9px]">
            <img
              className="w-[17.1px] relative h-[13.5px]"
              alt=""
              src="/vector2.svg"
            />
          </div>
          <div className="relative font-medium">1-3 yr Exp</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-1">
          <div className="flex flex-col items-center justify-center p-[0.9px]">
            <img
              className="w-[17.3px] relative h-[14.7px]"
              alt=""
              src="/vector3.svg"
            />
          </div>
          <div className="relative font-medium">Onsite</div>
        </div>
        <div className="flex flex-row items-end justify-start gap-1">
          <div className="flex flex-row items-start justify-start p-[0.9px]">
            <img
              className="w-[16.4px] relative h-[18.2px]"
              alt=""
              src="/vector4.svg"
            />
          </div>
          <div className="relative font-medium">12LPA</div>
        </div>
      </div>
      <div className="absolute top-[16px] left-[222px] rounded-3xs bg-lightskyblue flex flex-row items-center justify-center py-[7px] px-2.5 text-sm">
        <div className="relative font-medium">24h Ago</div>
      </div>
      <div className="absolute top-[298px] left-[calc(50%_-_142px)] shadow-[0px_0px_14px_rgba(93,_93,_93,_0.15)] rounded-3xs bg-deepskyblue border-deepskyblue border-[1px] border-solid box-border w-[284px] flex flex-row items-center justify-center py-3 px-2.5 text-white">
        <b className="relative">Apply Now</b>
      </div>
      <div className="absolute top-[202px] left-[9px] text-sm font-medium text-dimgray-300 text-left inline-block w-[300px]">
        <ul className="m-0 font-inherit text-inherit pl-[19px]">
          <li className="mb-0">
            A user-friendly interface lets you browse stunning photos and videos
          </li>
          <li>{`Filter destinations based on interests and travel style, and create personalized `}</li>
        </ul>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
