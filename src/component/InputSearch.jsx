import { useState } from "react";

const InputSearch = ({ icon, placeholder, onSearch }) => {
  const [search, setOnserach] = useState(false);
  const [searchTherm, setSearchTherm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTherm(event.target.value);
  };

  const handleIconClick = (event) => {
    if (onSearch) {
      onSearch(searchTherm);
    }
  };

  return (
    <div className="input-container">
      <input
        className="input-field"
        type="text"
        placeholder={placeholder}
        value={searchTherm}
        onChange={handleSearchChange}
      />
      <i className={`pi ${icon} input-icon`} onClick={handleIconClick}></i>
    </div>
  );
};

export default InputSearch;
