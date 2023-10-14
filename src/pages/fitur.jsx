import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import FiturContainer from '../components/FiturContainer';

const Fitur = () => {
    useEffect(() => {
        document.title = "Amara Store - Fitur";
    }, []);
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop:"64px"}}></div>
            <h3 className='text-center text-red-500 text-4xl font-bold dancing'>Daftar Fitur</h3>
            <FiturContainer/>
        </div>
    );
}

export default Fitur;
