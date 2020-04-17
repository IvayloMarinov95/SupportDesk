import React, { useEffect, useState } from "react";
import Body from "./Body/Body";
import "./Support.scss";
import searchIcon from "../../assets/icon-search.svg";
import data from "../../assets/api.json";

interface Types {
  fullName?: string;
  available?: boolean;
  phone?: string;
  email?: string;
  profile_image?: string;
}

export type ArrayTypes = Types[];

const Support: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ArrayTypes>([]);

  const handleChange = (val: string) => {
    setInput(val);
  };

  useEffect(() => {
    let results;
    if (!input) {
      results = data;
    } else {
      results = data.filter((person) =>
        person.fullName.toLowerCase().includes(input.toLowerCase())
      );
    }
    setSearchResults(results);
  }, [input]);

  return (
    <>
      <div className="header">
        <span className="text">Support Desk</span>
        <div className="container">
          <input
            type="text"
            placeholder="Search"
            className="input"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <img src={searchIcon} alt="" className="img" />
        </div>
      </div>
      <Body searchResults={searchResults} />
    </>
  );
};

export default Support;
