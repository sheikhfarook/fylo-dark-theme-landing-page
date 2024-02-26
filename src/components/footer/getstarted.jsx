import Contact from "./contact";

const GetStarted = () => {
  return (
    <>
      <div
        className="w-[863px] h-[275px] bg-[#1b2330] rounded-[9px] 
       drop-shadow-2xl mt-[14rem] m-auto relative mb-[-130px]">
        <div className="py-14 text-[#FFF]">
          <div className="w-[346px] h-[48px] m-auto font-raleway text-[32px] font-[700] leading-[48px] ">
            Get early access today
          </div>
          <div className="w-[678px] h-[42px] text-center m-auto font-opensans font-[300] text-[14px] leading-[21px] ">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </div>

          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default GetStarted;