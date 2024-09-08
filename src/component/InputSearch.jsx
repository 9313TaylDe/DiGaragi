import { useState } from "react";
import { Link } from "react-router-dom";

const InputSearch = ({ icon, placeholder, products = [] }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      // Filtrando sugestões a partir da lista de produtos
      const filteredSuggestions = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleOptionClick = () => {
    setSuggestions([]);
  };

  return (
    <div className="input-container">
      <input
        className="input-field"
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleSearchChange}
      />
      <i className={`pi ${icon} input-icon`}></i>

      {inputValue && suggestions.length > 0 && (
        <section className="listSuggestions">
          <ul>
            {suggestions.map((product, index) => (
              <li key={index} onClick={handleOptionClick} className="listaNone">
                <Link className="lista" to={`/product/${product.id}`}>
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default InputSearch;
