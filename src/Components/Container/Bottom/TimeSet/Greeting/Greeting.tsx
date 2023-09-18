interface GreetingProps {
  worldTime: string | null;
  worldTimeError: string;
  worldTimeIsLoading: boolean;
}

const Greeting: React.FC<GreetingProps> = ({
  worldTime,
  worldTimeError,
  worldTimeIsLoading,
}) => {
  const greetingDate = worldTime !== null ? new Date(worldTime) : new Date();
  //Как  это работает? создаем константу гритинг дэйт. Проверяем, если ворлд тайм (компонент из юз стейт) не равен null, то есть время пришло через api, мы вызываем  new Date с параметром вордл тайм, то есть получаем текущее время из внешнего источника. Если ничего не приходит (null), то  мы вызываем  new Date() и через пустые скобки получаем локальное время из нашего компьютера.
  const secInHour = 3600;
  const hours = greetingDate.getHours();

  const minutes = greetingDate.getMinutes();
  const seconds = greetingDate.getSeconds();

  const totalTimeInSeconds = hours * secInHour + minutes * 60 + seconds;

  const filterPeriod =
    (totalTime: number) => (period: { start: number; end: number }) => {
      const { start, end } = period;
      return start < totalTime && end > totalTime;
    };

  const nigth1 = { name: "night", start: 0, end: 6 * secInHour - 1 };

  const morning = {
    name: "morning",
    start: 6 * secInHour,
    end: 12 * secInHour - 1,
  };
  const day = { name: "day", start: 12 * secInHour, end: 17 * secInHour - 1 };

  const evening = {
    name: "evening",
    start: 17 * secInHour,
    end: 23 * secInHour - 1,
  };
  const nigth2 = {
    name: "night",
    start: 23 * secInHour,
    end: 23 * secInHour + 3600 - 1,
  };
  const currentPeriodName = [nigth1, morning, day, evening, nigth2]
    .filter(filterPeriod(totalTimeInSeconds)) //evening элемент массива, который мы отфильтровали с помощью фильтра. Теперь мы используем мап, чтобы достать имя из evening, поэтому  мы делаем мап по одному элементу и достаем первый элемент (имя), у которого индекс 0
    .map((period) => period.name)[0];
  console.log(currentPeriodName);
  console.log(worldTimeIsLoading);

  return (
    <div>
      <div>
        <img />
      </div>
      <div>
        {worldTimeIsLoading ? (
          <p>Loading...</p>
        ) : worldTimeError ? (
          <p>`Sorry ${worldTimeError}`</p>
        ) : (
          <div>` Good ${currentPeriodName}, it's currently: `</div>
        )}
      </div>
    </div>
  );
};

export default Greeting;
