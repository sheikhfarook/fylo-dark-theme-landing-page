import { useForm } from "react-hook-form";
import Contact from "./contact";

const GetStarted = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div
        className="w-[863px] h-[275px] bg-[#1b2330] rounded-[9px] drop-shadow-2xl mt-[14rem] m-auto relative mb-[-120px]
       max-sm:w-[336px] max-sm:h-[353px] max-sm:mt-[8rem]">
        <div className="py-10 text-[#FFF] space-y-3">
          <div
            className="w-[346px] h-[48px] m-auto font-raleway text-[32px] font-[700] leading-[48px] 
          max-sm:w-[195px] max-sm:h-[24px] max-sm:text-[18px] max-sm:leading-[24px]">
            Get early access today
          </div>
          <div
            className="w-[678px] h-[42px] text-center m-auto font-opensans font-[300 text-[14px] leading-[21px] 
          max-sm:w-[280px] max-sm:h-[84px] max-sm:text-[14px] max-sm:font-[400]  ">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </div>
          <div>
            <div className="w-[709px] h-[48px] m-auto mt-10 max-sm:w-[280px] ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex gap-10 max-sm:flex-col max-sm:gap-5">
                <div>
                  <input
                    className="w-[480px] h-[48px] font-[300] rounded-[48px] text-[12px] pl-10 font-opensans text-[#c0c0c0]
                  max-sm:w-[280px] max-sm:text-[10px] max-sm:font-[400] "
                    type="email"
                    placeholder="email@example.com"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors?.email?.type === "required" && (
                    <p className="text-[#ff4242] w-[234px] h-[13.62px] mt-1 ml-10 font-opensans text-[10px] font-[700] ">
                      Please enter a valid email address
                    </p>
                  )}
                </div>
                <div>
                  <button
                    className="w-[200px] h-[48px] bg-gradient-to-r from-[#63e1d9] to-[#34a0cd] rounded-[24px] 
                max-sm:w-[280px] ">
                    <div
                      className="w-[147px] h-[18px] font-raleway  
                  text-[14px] font-[700]  m-auto
                  max-sm:w-[135px] max-sm:h-[17px] ">
                      Get Started For Free
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default GetStarted;
