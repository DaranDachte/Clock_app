interface TimeProps {
  time: string | null;
  worldTimeError: string;
  worldTimeIsLoading: boolean;
}

const Time: React.FC<TimeProps> = ({
  time,
  worldTimeError,
  worldTimeIsLoading,
}) => {
  const showDate = time !== null ? new Date(time) : new Date();

  const hours = showDate.getHours();
  const minutes = showDate.getMinutes();
  const seconds = showDate.getSeconds();

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
