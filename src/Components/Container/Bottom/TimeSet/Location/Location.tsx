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
    <>
      {worldTimeIsLoading ? (
        <p>Loading...</p>
      ) : worldTimeError ? (
        <p>Sorry {worldTimeError}</p>
      ) : (
        <div>
          in {city}, {country}
        </div>
      )}
    </>
  );
};

export default Location;
