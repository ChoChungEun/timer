import { useState } from "react";
import CityClock from "./CityClock";
import Header from "./Header";

const Layout = () => {
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  return (
    <div>
      <Header selectedCity={selectedCity} onSelectedCity={setSelectedCity} />
      <CityClock selectedCity={selectedCity} onSelectedCity={setSelectedCity} />
    </div>
  );
};

export default Layout;
