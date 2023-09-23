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
      {showAdditionalInfo ? <p>LESS</p> : <p>MORE</p>}
    </button>
  );
};

export default Toggle;
