import React from "react";
import { Link } from "react-router-dom";

const Card = ({ Links, Title, imgUrl, Alt, Price, Tag }) => {
  return (
    <div>
      <div className="block relative group">
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="bg-gray-800 w-max text-white p-2 text-sm rounded-md font-light">{Title}</p>
        </div>
        <Link to={Links} className="w-full h-full">
            <img src={imgUrl} alt={Alt} className="rounded-lg object-cover w-full h-64" />
        </Link>
        <div className="absolute bottom-0 left-0 right-0 text-black pl-1 pr-1 mb-0">
          <div className="flex justify-between items-center mb-2">
            <div className="bg-neutral-300 opacity-90 p-3 ml--4 rounded-md text-sm bg-opacity-75">{Tag}</div>
            <p className="bg-neutral-300 p-3 rounded-md text-sm bg-opacity-75">{Price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
