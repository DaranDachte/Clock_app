interface TimeProps {
  worldTime: string | null;
  worldTimeError: string;
  worldTimeIsLoading: boolean;
}

const Time: React.FC<TimeProps> = ({
  worldTime,
  worldTimeError,
  worldTimeIsLoading,
}) => {
  const greetingDate = worldTime !== null ? new Date(worldTime) : new Date();

  const hours = greetingDate.getHours();

  const minutes = greetingDate.getMinutes();
  const seconds = greetingDate.getSeconds();

  return (
    <div>
      {worldTimeIsLoading ? (
        <p>Loading...</p>
      ) : worldTimeError ? (
        <p>Sorry {worldTimeError}</p>
      ) : (
        <div>
          {hours}:{minutes}:{seconds}
        </div>
      )}
    </div>
  );
};

export default Time;
