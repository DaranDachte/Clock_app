import ArrowPath from "../../../../assets/img/ArrowPath.svg";
import { Advice } from "../../../../models/domain";

interface AdviceProps {
  advice: Advice;
  upDateAdvice: () => void;
}
const Citation: React.FC<AdviceProps> = ({ upDateAdvice, advice }) => {
  return (
    <>
      <div className="flex  ">
        {advice ? (
          <>
            <p className=" text-xl">"{advice.advice}"</p>
            <p className="text-xl">advice #{advice.id}</p>
          </>
        ) : (
          <p>No advice available</p>
        )}
      </div>
      <div>
        <button className="le">
          <img
            className="w-4 h-4"
            src={ArrowPath}
            alt="ArrowPath"
            onClick={upDateAdvice}
          />
        </button>
      </div>
    </>
  );
};

export default Citation;
