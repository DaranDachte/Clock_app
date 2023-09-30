import CombinedShape from "../../../../assets/img/CombinedShape.svg";
import { Advice } from "../../../../models/domain";

interface AdviceProps {
  advice: Advice;
  upDateAdvice: () => void;
}
const Citation: React.FC<AdviceProps> = ({ upDateAdvice, advice }) => {
  return (
    <>
      <div className="flex  justify-start pt-[3.5rem] min-w-[45rem]  max-w-[10rem]">
        {advice ? (
          <div>
            <p className=" text-[1.25rem] text-[#fff] font-normal ">
              "{advice.advice}"
            </p>
            <p className=" text-[1.25rem] text-[#fff] font-bold ">
              Advice #{advice.id}
            </p>
          </div>
        ) : (
          <p>No advice available</p>
        )}
        <div>
          <button>
            <img
              className="w-4 h-4 ml-[1rem] text-[#fff]"
              src={CombinedShape}
              alt="Combined"
              onClick={upDateAdvice}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Citation;
