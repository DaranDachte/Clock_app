interface ThemeControllerProps {
  time: string | null;
  setChangeBg: (x: boolean) => void;
}

const ThemeController: React.FC<ThemeControllerProps> = ({
  time,
  setChangeBg,
}) => {
  const currentTime = time !== null ? new Date(time) : new Date();

  const secInHour = 3600;
  const hours = currentTime.getHours();

  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const totalTimeInSeconds = hours * secInHour + minutes * 60 + seconds;

  if (
    totalTimeInSeconds > 23 * secInHour &&
    totalTimeInSeconds < 6 * secInHour
  ) {
    setChangeBg((prevVal: boolean) => !prevVal);
  }

  return <></>;
};

export default ThemeController;
