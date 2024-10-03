import styled from "styled-components";
import Clock from "./Clock";
import { cities } from "./cities";

const CityClock = ({ selectedCity, onSelectedCity }: any) => {
  return (
    <>
      <div className="w-[20px] h-[20px] bg-[url('./south-korea.png')] bg-cover bg-center bg-no-repeat">
        clock
      </div>
      {selectedCity ? (
        <RootStyle
          className="relative flex items-center justify-center border-[1px] h-[100vh]"
          backgroundImage={`/images/flags/${selectedCity.imageName}.png`}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center bg-no-repeat z-[1]" />
          <div className="flex flex-col items-center z-[2]">
            <span className="text-[20px] font-[500]">{selectedCity.name}</span>
            <Clock area={selectedCity.area} location={selectedCity.location} />
          </div>
        </RootStyle>
      ) : (
        <div className="grid grid-cols-2 grid-rows-2 h-[100vh]">
          {cities.map((city, idx) => (
            <RootStyle
              key={idx}
              className="relative flex items-center justify-center border-[1px]"
              backgroundImage={`/images/flags/${city.imageName}.png`}
              onClick={() => onSelectedCity(city)}
            >
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center bg-no-repeat z-[1]" />
              <div className="flex flex-col items-center z-[2]">
                <span className="text-[20px] font-[500]">{city.name}</span>
                <Clock area={city.area} location={city.location} />
              </div>
            </RootStyle>
          ))}
        </div>
      )}
    </>
  );
};

export default CityClock;

const RootStyle = styled.div<{ backgroundImage: any }>`
  .react-clock__face {
    background-image: ${({ backgroundImage }: any) =>
      `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
