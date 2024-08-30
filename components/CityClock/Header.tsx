import SelectArea from "./SelectArea";
import SelectCity from "./SelectCity";

const Header = ({ selectedCity, onSelectedCity }: any) => {
  return (
    <div>
      <SelectArea selectedCity={selectedCity} onSelectedCity={onSelectedCity} />
      {/* <SelectCity /> */}
    </div>
  );
};

export default Header;
