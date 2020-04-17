import React from "react";
import "./Body.scss";
import { ArrayTypes } from "../Support";
import availableIcon from "../../../assets/icon-available.svg";
import busyIcon from "../../../assets/icon-busy.svg";

interface Props {
  searchResults: ArrayTypes;
}

const Body: React.FC<Props> = ({ searchResults }) => {
  return (
    <div className="wrapper">
      {searchResults.length ? (
        searchResults.map((item: any, index: number) => (
          <div className="column" key={index}>
            <div className="card" key={index}>
              <div className="imageWrapper">
                <img src={item.profile_image} alt="" className="image" />
                <img
                  src={item.available ? availableIcon : busyIcon}
                  alt=""
                  className="inner"
                />
              </div>
              <p>{item.fullName}</p>
              <p>{item.phone}</p>
            </div>
          </div>
        ))
      ) : (
        <h1>Nothing found</h1>
      )}
    </div>
  );
};

export default Body;
