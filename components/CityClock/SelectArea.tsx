import { useState } from "react";
import { cities } from "./cities";

const SelectArea = ({ selectedCity, onSelectedCity }: any) => {
  const [query, setQuery] = useState("");
  const [filteredCities, setFilteredCities]: any = useState([]);
  const [showList, setShowList] = useState(false);
  const [selectedArea, setSelectedArea]: any = useState("");

  // 입력 변경 핸들러
  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredCities([]);
    } else {
      // 중복 제거를 위한 Set
      const uniqueAreas = new Set();
      const filtered = cities.filter((city) => {
        if (city.area.toLowerCase().includes(value.toLowerCase())) {
          if (!uniqueAreas.has(city.area)) {
            uniqueAreas.add(city.area);
            return true;
          }
        }
        return false;
      });
      setFilteredCities(filtered);
    }
    setShowList(true); // 입력값이 변경될 때 목록을 표시
  };

  // 항목 선택 핸들러
  const handleSelectCity = (city: any) => {
    setQuery(city.area); // 선택한 항목으로 입력값 업데이트
    setFilteredCities([]); // 목록 숨기기
    setSelectedArea(city.area); // 선택된 area 저장
    setShowList(false); // 목록 숨기기
  };

  // 인풋 클릭 핸들러
  const handleInputClick = () => {
    setShowList(true); // 인풋 클릭 시 목록을 표시
  };

  // 인풋 포커스 아웃 핸들러
  const handleInputBlur = () => {
    setTimeout(() => setShowList(false), 100); // 클릭된 목록 항목이 사라지기 전까지 목록을 숨기지 않음
  };

  const citiesByArea = cities.filter((city) => city.area === selectedArea);

  // 중복된 area를 제거한 목록 생성
  const getUniqueAreas = (cities: any) => {
    const uniqueAreas = new Set();
    return cities.filter((city: any) => {
      if (!uniqueAreas.has(city.area)) {
        uniqueAreas.add(city.area);
        return true;
      }
      return false;
    });
  };

  // 현재 보여주어야 할 도시 목록
  const citiesToShow = showList
    ? query.trim() === ""
      ? getUniqueAreas(cities)
      : getUniqueAreas(filteredCities)
    : [];

  return (
    <div className="grid grid-cols-[1fr_1fr]">
      <div className="flex flex-col">
        <input
          className="border-[1px]"
          type="text"
          value={query}
          onChange={handleInputChange}
          onClick={handleInputClick} // 인풋 클릭 핸들러 추가
          onBlur={handleInputBlur} // 인풋 포커스 아웃 핸들러 추가
          placeholder="Search by area..."
        />
        {showList && citiesToShow.length > 0 && (
          <ul className="autocomplete-list">
            {citiesToShow.map((city: any, index: any) => (
              <li key={index} onClick={() => handleSelectCity(city)}>
                {city.area}
              </li>
            ))}
          </ul>
        )}
      </div>
      <select
        className="border-[1px]"
        onChange={(e) =>
          onSelectedCity(cities.find((city) => city.name === e.target.value))
        }
      >
        <option value="">Select a city</option>
        {citiesByArea.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectArea;
