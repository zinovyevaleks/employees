import { useState } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employees-list/employees-list";
import EmployersAddForm from "../employees-add-form/employees-add-form";

import "./app.scss";

const App = () => {
  const [data, setData] = useState([
    { name: "John C.", salary: 800, increase: false, rise: true, id: 1 },
    { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
    { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
  ]);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");
  let maxId = 4;

  const deleteItem = (id) => {
    setData((data) => data.filter((item) => item.id !== id));
  };

  const addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: maxId++,
    };
    setData((data) => [...data, newItem]);
  };

  const onToggleProp = (id, prop) => {
    setData((data) =>
      data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      })
    );
  };

  const searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => item.name.indexOf(term) > -1);
  };

  const onSearchUpdate = (term) => {
    setTerm(term);
  };

  const filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  const employees = data.length;
  const increased = data.filter((item) => item.increase).length;
  const visibleData = filterPost(searchEmp(data, term), filter);

  return (
    <div className="app">
      <AppInfo employees={employees} increased={increased} />

      <div className="search-panel">
        <SearchPanel onSearchUpdate={onSearchUpdate} />
        <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>

      <EmployersList
        data={visibleData}
        onDelete={deleteItem}
        onToggleProp={onToggleProp}
      />
      <EmployersAddForm onAdd={addItem} />
    </div>
  );
};

export default App;
