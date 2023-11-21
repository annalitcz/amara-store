import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const PopUp = () => {
  return (
    <>
      <div className="fixed bottom-40 mt-10 pl-6 hover:text-white">
        <Link
          to={"https://wa.me/6281915515080"}
          className="border border-green-500 hover:bg-green-600 rounded-lg p-3 relative flex items-center"
        >
          <FontAwesomeIcon className="text-green-400 mr-2" icon={faWhatsapp} />{" "}
          <p className="text-white text-lg">Chat</p>
        </Link>
      </div>
    </>
  );
};

export default PopUp;
