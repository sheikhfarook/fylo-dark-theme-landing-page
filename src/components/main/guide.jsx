import { guide } from "./quidedate";

const Guide = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2">
        {guide?.map((rules) => (
          <div key={rules?.id} className="">
            <div className="">
              <div>
                <img src={rules?.img} alt="" />
              </div>
              <div>{rules?.headline}</div>
              <div>{rules?.info}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
