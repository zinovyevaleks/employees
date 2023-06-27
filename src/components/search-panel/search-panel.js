import { useState } from "react";

import "./search-panel.scss";

const SearchPanel = ({ onSearchUpdate }) => {
  const [term, setTerm] = useState("");

  const handleSearchUpdate = (event) => {
    const term = event.target.value;
    setTerm(term);
    onSearchUpdate(term);
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Найти сотрудника"
      value={term}
      onChange={handleSearchUpdate}
    />
  );
};

export default SearchPanel;
