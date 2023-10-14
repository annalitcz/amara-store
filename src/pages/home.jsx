import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Banner from "../banner_new_desktop.webp";

const Home = () => {
    useEffect(()=>{
        document.title = 'Amara Store'
    },[])

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "64px" }}></div>
      <div className="flex flex-col justify-center items-center p-2">
        <img src={Banner} alt="banner" />
        <div className="text-center mt-4">
          <p className="text-3xl text-left">Website</p>
          <h3 className="font-bold text-left text-3xl">Undangan Pernikahan</h3> 
          <p className="font-semibold mt-3">Fitur paling lengkap banyak preset siap pakai.</p>
          <p className="text-left">Masa aktif selamanya dan edit tanpa batas!</p>
        </div>
        <Link to={"/preview"} className="mt-3">
          <button className="w-80 h-12 rounded-lg border border-red-500 hover:bg-red-500 hover:text-white duration-150">
            Lihat desain sekarang
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
