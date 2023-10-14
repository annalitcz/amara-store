import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import PopUp from "../components/popUp";
import ProdukContainer from "../components/ProdukContainer";

const Preview = () => {
  useEffect(() => {
    document.title = "Amara Store - Preview Design";
  }, []);

  return (
    <div className="mb-12">
      <Navbar />
      <div style={{ paddingTop: "64px" }}></div>
      <div className="w-full">
        <h1 className="text-center">Preview Produk</h1>
        <p className="text-center">undangan pernikahan & lainnya</p>
      </div>
      <div style={{ paddingTop: "30px" }}></div>
        <ProdukContainer />
      <PopUp />
    </div>
  );
};

export default Preview;
