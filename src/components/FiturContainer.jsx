import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour, faMap, faComment, faMusic, faPhotoFilm, faMobileAndroid } from "@fortawesome/free-solid-svg-icons";

const FiturContainer = () => {
  return (
    <>
      <div className="mt-5 h-fit flex flex-col justify-center items-center gap-6 pb-10">
        <div className="w-64 flex flex-col justify-center items-center gap-2 bg-slate-200 p-10 rounded-lg">
          <FontAwesomeIcon className="text-4xl text-red-500" icon={faClockFour} />
          <h4 className="text-center font-bold">Coutdown</h4>
          <p className="text-center">Jangan sampai terlewatkan moment indah kamu, hitung mundur tanggal acara pernikahanmu.</p>
        </div>
        <div className="w-64 flex flex-col justify-center items-center gap-2 bg-slate-200 p-10 rounded-lg">
          <FontAwesomeIcon className="text-4xl text-red-500" icon={faMap} />
          <h4 className="text-center font-bold">Maps</h4>
          <p className="text-center">Navigasi dari Google Maps agar tamu tidak tersesat.</p>
        </div>
        <div className="w-64 flex flex-col justify-center items-center gap-2 bg-slate-200 p-10 rounded-lg">
          <FontAwesomeIcon className="text-4xl text-red-500" icon={faComment} />
          <h4 className="text-center font-bold">Ucapan & Balasan</h4>
          <p className="text-center">Tamu undangan bisa berbagi momen dengan mengirimkan ucapan dan dapat dibalas.</p>
        </div>
        <div className="w-64 flex flex-col justify-center items-center gap-2 bg-slate-200 p-10 rounded-lg">
          <FontAwesomeIcon className="text-4xl text-red-500" icon={faMusic} />
          <h4 className="text-center font-bold">Background Musik</h4>
          <p className="text-center">Pilih musik sesuai dengan keinginanmu, agar undangang lebih eksklusif dan romantis.</p>
        </div>
        <div className="w-64 flex flex-col justify-center items-center gap-2 bg-slate-200 p-10 rounded-lg">
          <FontAwesomeIcon className="text-4xl text-red-500" icon={faPhotoFilm} />
          <h4 className="text-center font-bold">Gallery Foto</h4>
          <p className="text-center">Share moment indah kamu dengan pasanganmu dengan slideshow yang keren.</p>
        </div>
        <div className="w-64 flex flex-col justify-center items-center gap-2 bg-slate-200 p-10 rounded-lg">
          <FontAwesomeIcon className="text-5xl text-red-500" icon={faMobileAndroid} />
          <h4 className="text-center font-bold">Design Modern dan Responsif</h4>
          <p className="text-center">Say good bye untuk design jadul. biar undanganmu makin wow.</p>
        </div>
      </div>
    </>
  );
};

export default FiturContainer;
