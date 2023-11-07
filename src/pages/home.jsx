import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Banner from "../banner_new_desktop.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/footer";
import { faSearch, faFileArrowUp, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faComment, faHourglassHalf, faEnvelope} from "@fortawesome/free-regular-svg-icons";

const Home = () => {
    useEffect(()=>{
        document.title = 'Amara Store'
    },[])

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "64px" }}></div>

      {/* top section */}
      <div className="flex flex-col justify-center items-center p-2 mt-10">
        <img src={Banner} alt="banner"  width={600}/>
        <div className="text-center mt-8">
          <p className="text-3xl text-left">Website</p>
          <h3 className="font-bold text-left text-3xl">Undangan Pernikahan</h3> 
          <p className="font-semibold mt-3">Fitur paling lengkap banyak preset siap pakai.</p>
          <p className="text-left">Masa aktif selamanya dan edit tanpa batas!</p>
        </div>
        <Link to={"/preview"} className="mt-5">
          <button className="w-80 h-12 rounded-lg border border-red-500 bg-red-500 text-white duration-150">
            Lihat desain sekarang
          </button>
        </Link>
      </div>

      {/* desc section */}
      <div className="flex flex-col justify-center items-center p-6">
        <h1 className="text-red-500 text-2xl font-bold mb-1">No.1 Platform</h1>
        <h4 className="text-center mb-2 text-xl font-medium">Website Undangan Pernikahan</h4>
        <p className="text-center">Buat website undangan pernikahanmu secara ekslusif dengan mudah, murah dan cepat. Solusi website undangan pernikahan kamu jadi lebih berkesan!</p>
      </div>

      {/* sosmed  section*/}
      <div className="flex flex-col justify-center items-center p-6">
        <h4 className="mb-2">Temukan Kami:</h4>
        <div className="flex justify-beetwen items-center gap-6">
          <Link to={"https://facebook.com"} className="flex flex-col justify-center items-center">
            <FontAwesomeIcon className="text-2xl text-blue-600 mb-2" icon={faFacebook}/>{" "}
            <p className="text-sm">Facebook</p>
          </Link>
          <Link to={"https://instagram.com"} className="flex flex-col justify-center items-center">
            <FontAwesomeIcon className="text-2xl text-pink-500 mb-2" icon={faInstagram} />{" "}
            <p className="text-sm">Instagram</p>
          </Link>
          <Link to={"https://wa.me/081915515080"} className="flex flex-col justify-center items-center">
            <FontAwesomeIcon className="text-2xl text-green-500 mb-2" icon={faWhatsapp}/>{" "}
            <p className="text-sm">WhatsApp</p>
          </Link>
        </div>
      </div>

      {/* tutor */}
      <div className="flex flex-col justify-center items-center p-6">
        <h1 className="text-red-500 text-2xl font-bold mb-1">Cara Pemesanan:</h1>

        <div className="flex justify-center items-center gap-3 mb-2">
          <FontAwesomeIcon className="font-bold text-4xl text-red-500" icon={faSearch}/>{" "}
          <p>1. cari template/desain yang kamu suka.</p>
        </div>
        <div className="flex justify-center items-center gap-3 mb-2">
          <FontAwesomeIcon className="font-bold text-4xl text-red-500" icon={faComment} />{" "}
          <p>2. hubungi admin untuk konsultasi terkait template yang dipilih. </p>
        </div>
        <div className="flex justify-center items-center gap-5 mb-2">
        <FontAwesomeIcon className="font-bold text-4xl text-red-500" icon={faFileArrowUp}/>{" "}
        <p>3. Kirim file atau data sasuai kebutuhan dari template/desain yang dipilih.</p>
        </div>
        <div className="flex justify-center items-center gap-3 mb-2">
          <FontAwesomeIcon className="font-bold text-4xl text-red-500" icon={faWallet} />{" "}
          <p>4. Bayar sesuai harga yang telah disepakati dengan admin.</p>
        </div>
        <div className="flex justify-center items-center gap-5 mb-2">
          <FontAwesomeIcon className="font-bold text-4xl text-red-500" icon={faHourglassHalf}/>{" "}
          <p>5. Tunggu proses pembuatatan sesuai waktu yang telah disepakati.</p>
        </div>
        <div className="flex justify-center items-center gap-3 mb-2">
          <FontAwesomeIcon className="font-bold text-4xl text-red-500" icon={faEnvelope}/>{" "}
          <p>6. Ketika sudah selesai link website undangan pernikahanmu akan di kirim melalui WhatsApp/E-mail.</p>
        </div>

      </div>

      {/* copyrights */}
      <Footer/>

    </div>
  );
};

export default Home;
