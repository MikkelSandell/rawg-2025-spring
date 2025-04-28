import usePlatforms from "./usePlatforms";


const usePlatfrom = (selectedPlatformId?: number) => {
  const {data} = usePlatforms();
  const selectedPlatform = data?.results?.find(
    (platform) => platform.id === selectedPlatformId
  );

  return selectedPlatform
}

export default usePlatfrom;