// import PropTypes from "prop-types";

// const FrameComponent3 = ({ className = "" }) => {
//   return (
//     <div
//       className={`absolute top-[0px] left-[705px] rounded-xl overflow-hidden flex flex-row items-center justify-center p-[5px] text-center text-base text-white font-satoshi-variable ${className}`}
//     >
//       <div className="w-[123px] rounded-11xl [background:linear-gradient(180deg,_#a128ff,_#6100ad)] flex flex-row items-center justify-center py-2 px-6 box-border">
//         <div className="w-[75px] relative h-[22px]">
//           <div className="absolute top-[0px] left-[0px] w-[75px] h-14">
//             <div className="absolute top-[0px] left-[0px] w-[75px] h-[22px]">
//               <b className="absolute top-[0px] left-[-15px]">Create Jobs</b>
//             </div>
//             <div className="absolute top-[34px] left-[0px] w-[75px] h-[22px]">
//               <b className="absolute top-[0px] left-[17px]">Login</b>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// FrameComponent3.propTypes = {
//   className: PropTypes.string,
// };

// export default FrameComponent3;




import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const FrameComponent3 = ({ className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      className={`relative ${className} flex flex-row items-end justify-end p-4 text-center text-base text-white font-satoshi-variable -mt-3`}>

      {/* Button */}
      <div
        className="w-[115px] rounded-11xl bg-gradient-to-b from-[#a128ff] to-[#6100ad] flex flex-row items-center justify-center py-2 px-6 box-border cursor-pointer"
        onClick={toggleModal}>
        <div className="w-[75px] relative h-[22px]">
          <div className="absolute top-[0px] left-[0px] w-[75px] h-14">
            <div className="absolute top-[0px] left-[0px] w-[75px] h-[22px]">
              <b className="absolute top-[0px] left-[-15px]">Create Jobs</b>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white w-[750px] h-[580px] p-6 rounded-lg shadow-lg w-full max-w-xl max-h-[80vh] overflow-auto mb-4 flex flex-col items-center pb-1">
          <h2 className="text-xl font-bold mb-4 font-satoshi-variable text-center mt-2">Create Job Opening</h2>
          <form>
            <div className="mb-2 flex gap-4">
              <div className="flex-1">
                <label className="text-gray-700 text-sm font-bold mb-2 font-satoshi-variable relative">
                  Job Title
                </label>
                <div className="relative w-[275px] h-[58px] rounded-3xs border-gray-200 border-[1px] border-solid box-border overflow-hidden text-[13px] ">
                  <input
                    type="text"
                    placeholder="Full Stack Develo |"
                    className="absolute top-[calc(50%_-_38px)] left-[3px] w-full h-full px-3 py-2 border-none outline-none bg-transparent text-gray-200 font-satoshi-variable"
                    name="jobTitle"
                  />
                </div>
              </div>


              {/* Company Name */}
              <div className="mb-2 flex gap-4">
                <div className="flex-1">
                  <label className=" text-gray-700 text-sm font-bold mb-2 font-satoshi-variable relative">Company Name</label>
                  <div className=" relative w-[275px] rounded-3xs border-gray-200 border-[1px] border-solid box-border h-[58px] overflow-hidden shrink-0 text-[13px] ">
                    <input
                      type="text"
                      placeholder="Amazon, Google, Swiggy"
                      className="absolute top-[calc(50%_-_38px)] left-[3px] w-full h-full px-3 py-2 border-none outline-none bg-transparent text-gray-200 font-satoshi-variable"
                      name="jobTitle"
                    />
                  </div>
                </div>
              </div>
            </div>


            <div className="flex mb-4 gap-4">
              {/* Location */}
              <div className="flex-1">
                <label className="text-gray-700 text-sm font-bold mb-2 font-satoshi-variable relative">
                  Location
                </label>
                <div className="relative w-full max-w-[275px] rounded-3xs border-gray-700 border-[1px] border-solid box-border h-[58px] overflow-hidden text-[13px]">
                  <select className="relative w-full h-full rounded-3xs border-gray-700 border-[1px] border-solid box-border p-2 text-[13px] text-gray-700 font-satoshi-variable">
                    <option value="" disabled selected className="text-gray-700 font-satoshi-variable">
                      Choose Preferred Location
                    </option>
                    {/* Options */}
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </div>
              </div>

              {/* Job Type */}
              <div className="flex-1">
                <label className="text-gray-700 text-sm font-bold mb-2 font-satoshi-variable">
                  Job Type
                </label>
                <select className="relative w-full max-w-[275px] rounded-3xs border-gray-200 border-[1px] border-solid box-border h-[58px] p-2 text-[13px] text-gray-400 font-satoshi-variable">
                  <option>FullTime</option>
                  <option>PartTime</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>
            </div>


            <div className="flex mb-4 gap-4">
              {/* Salary Range */}
              <div className="flex-1">
                <label className=" text-gray-700 text-sm font-bold mb-2 font-satoshi-variable relative">
                  Salary Range
                </label>
                <div className="flex space-x-4 w-[275px] h-[58px] top-[117px] left-[296px] ">
                  <input
                    type="text"
                    placeholder="₹0"
                    className="shadow appearance-none border rounded-3xs w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-satoshi-variable relative"
                  />
                  <input
                    type="text"
                    placeholder="₹12,00,000"
                    className="shadow appearance-none border rounded-3xs w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-satoshi-variable relative"
                  />
                </div>
              </div>


              {/* Application Deadline */}
              <div className="flex-1">
                <label className="text-gray-700 text-sm font-bold mb-2 font-satoshi-variable relative">
                  Application Deadline
                </label>
                <div className="relative w-[270px] rounded-3xs border-gray-200 border-[1px] border-solid box-border h-[58px] overflow-hidden shrink-0 text-[13px]">
                  <input
                    type="text"
                    className="absolute top-[calc(50%_-_38px)] left-[-30px] w-full h-full px-10 py-2 border-none outline-none bg-transparent text-gray-700 font-satoshi-variable"
                    name="applicationDeadline"
                  />
                  {/* SVG from public folder */}
                  <img
                    src="/image.svg" 
                    alt="Calendar Icon"
                    className="absolute top-[50%] right-3 transform -translate-y-1/2 w-4 h-4"
                  />
                </div>
              </div>
              </div>


              {/* Job Description */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 font-satoshi-variable">Job Description</label>
                <textarea
                  placeholder="Please share a description to let the candidate know more about the job role"
                  className="font-satoshi-variable rounded-3xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  className="border-grey-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-290 font-satoshi-variable"
                >
                  Save Draft
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 font-satoshi-variable"
                >
                  Publish
                </button>
              </div>
          </form>
        </div>
      </Modal >
    </div >
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;








