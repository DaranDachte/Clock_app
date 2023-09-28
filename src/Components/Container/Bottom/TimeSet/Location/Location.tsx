import type { Location } from "../../../../../models/domain";
interface LocationProps {
  location: Location | null;
  worldTimeError: string;
  worldTimeIsLoading: boolean;
}

const Location: React.FC<LocationProps> = ({
  location,
  worldTimeError,
  worldTimeIsLoading,
}) => {
  const locationPlace =
    location !== null
      ? location
      : {
          city: "unkownCity",
          country: "unkownCountry",
          timezone: "unkowntimezone",
        };
  const { city, country } = locationPlace;
  return (
    <div className="font-bold text-[1.5rem] leading-[1.75rem] text-[#fff] tracking-[ 0.3rem] ">
      {worldTimeIsLoading ? (
        <span>Loading...</span>
      ) : worldTimeError ? (
        <span>Sorry {worldTimeError}</span>
      ) : (
        <span>
          in {city}, {country}
        </span>
      )}
    </div>
  );
};

export default Location;
