import styled from "styled-components";
import Clock from "./Clock";

const cities = [
  {
    name: "Seoul",
    city: "Asia/Seoul",
    imageName: "south-korea",
  },
  {
    name: "Tokyo",
    city: "Asia/Tokyo",
    imageName: "japan",
  },
  {
    name: "NewYork",
    city: "America/New_York",
    imageName: "united-kingdom",
  },
  {
    name: "London",
    city: "Europe/London",
    imageName: "united-states-of-america",
  },
];

const CityClock = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-[100vh]">
      {cities.map((city, idx) => (
        <RootStyle
          key={idx}
          className="relative flex items-center justify-center border-[1px]"
          backgroundImage={`/images/flags/${city.imageName}.png`}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center bg-no-repeat z-[1]" />
          <div className="flex flex-col items-center z-[2]">
            <span className="text-[20px] font-[500]">{city.name}</span>
            <Clock city={city.city} />
          </div>
        </RootStyle>
      ))}
    </div>
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
