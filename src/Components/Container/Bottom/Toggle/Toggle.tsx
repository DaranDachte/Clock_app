import ChevronDown from "../../../../assets/img/ChevronDown.svg";

interface ToggleProps {
  showAdditionalInfo: boolean;
  changeBottomAndAddInfo: () => void;
}

const Toggle: React.FC<ToggleProps> = ({
  showAdditionalInfo,
  changeBottomAndAddInfo,
}) => {
  return (
    <button onClick={() => changeBottomAndAddInfo((prev: boolean) => !prev)}>
      {showAdditionalInfo ? (
        <div className=" flex justify-around  items-center w-[9rem] h-[3.5rem] bg-white rounded-[1.75rem]">
          <div>
            <p>LESS</p>
          </div>
          <div>
            <img src={ChevronDown} alt="ChevronDown" />
          </div>
        </div>
      ) : (
        <p>MORE</p>
      )}
    </button>
  );
};

export default Toggle;
