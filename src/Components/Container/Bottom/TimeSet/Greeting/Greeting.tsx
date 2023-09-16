interface GreetingProps {
  dateTime: string | null;
}

const Greeting: React.FC<GreetingProps> = ({ dateTime }) => {
  console.log(dateTime);

  const secInHour = 3600;
  const nigth1 = [0, 6 * secInHour - 1];
  const morning = [6 * secInHour, 12 * secInHour - 1];
  const day = [12 * secInHour, 17 * secInHour - 1];
  const evening = [17 * secInHour, 23 * secInHour - 1];
  const nigth2 = [23 * secInHour, 23 * secInHour + 3600 - 1];
  return (
    <div>
      <div>
        <img />
      </div>
      <div>{`  `} it's currently: </div>
    </div>
  );
};

export default Greeting;
