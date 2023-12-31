import ChevronDown from "../../../../assets/img/ChevronDown.svg";
import ChevronUp from "../../../../assets/img/ChevronUp.svg";
interface ToggleProps {
  showAdditionalInfo: boolean;
  changeBottomAndAddInfo: (x: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({
  showAdditionalInfo,
  changeBottomAndAddInfo,
}) => {
  return (
    <button
      onClick={
        () =>
          showAdditionalInfo
            ? changeBottomAndAddInfo(false) // блок виден.
            : changeBottomAndAddInfo(true) //  блок скрыт.
      }
    >
      {showAdditionalInfo ? (
        <div className=" flex justify-evenly  items-center w-[9rem] h-[3.5rem] bg-white rounded-[1.75rem]">
          <div>
            <p className="font-bold tracking-[0.3125rem] text-base text-[#8b8b8b]">
              LESS
            </p>
          </div>
          <div>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </div>
      ) : (
        <div className=" flex justify-evenly  items-center w-[9rem] h-[3.5rem] bg-white rounded-[1.75rem]">
          <div>
            <p className="font-bold tracking-[0.3125rem] text-base text-[#8b8b8b]">
              MORE
            </p>
          </div>
          <div>
            <img src={ChevronUp} alt="ChevronUp" />
          </div>
        </div>
      )}
    </button>
  );
};

export default Toggle;
