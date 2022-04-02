import * as React from 'react';
import { Link } from 'react-router-dom';

import Envelope from '../assets/icons/Envelope';
import WhatsApp from '../assets/icons/WhatsApp';

import Navigation from '../components/ui/Navbar';

function About() {
  return (
    <>
      <div id="about">
        <header>
          <Navigation />
        </header>
        <main>
          <div className="relative app-body">
            <div className="absolute bg-transparent">
              <p className="mb-3 text-sm">
                Saya Frontend Developer, dengan pengalaman lebih dari 5 tahun. Mengembangkan
                beberapa aplikasi untuk perusahaan tempat saya bekerja. Sedang mencari perusahaan
                teknologi yang bergerak di bidang pengembangan aplikasi dan perangkat lunak bisnis.
              </p>
              <p className="mb-5 text-sm">
                Menggunakan beberapa Javascritp Framework (Vue.JS & React.JS) sebagai frontend
                project base. Dan PHP sebagai Backend project base.
              </p>
              <p className="mb-5 text-sm">Kontak</p>
              <Link
                to="#"
                onClick={(e) => {
                  window.open('https://wa.me/6281231183113', '_blank');
                  e.preventDefault();
                }}>
                <p className="flex z-20 items-center mb-3 text-sm hover:cursor-pointer">
                  <WhatsApp fill={'#02B81F'} />
                  <span className="ml-2">+62 81231183113</span>
                </p>
              </Link>
              <Link
                to="#"
                onClick={(e) => {
                  window.location = 'mailto:obinote@gmail.com';
                  e.preventDefault();
                }}>
                <p className="flex items-center mb-3 text-sm">
                  <Envelope fill={'#CC0909'} />
                  <span className="ml-2">obinote@gmail.com</span>
                </p>
              </Link>
            </div>

            <div className="absolute top-[10vh] left-2 w-56 h-56 bg-purple-300 rounded-full opacity-40 mix-blend-multiply blur-xl animate-blob sm:top-20 sm:left-48 sm:w-80 sm:h-80"></div>
            <div className="absolute top-[10vh] right-2 w-56 h-56 bg-yellow-300 rounded-full opacity-40 mix-blend-multiply blur-xl animate-blob sm:top-28 sm:left-96 sm:w-80 sm:h-80 animate-delay-3"></div>
            <div className="absolute top-[20vh] left-20 w-56 h-56 bg-pink-300 rounded-full opacity-40 mix-blend-multiply blur-xl animate-blob sm:top-48 sm:left-60 sm:w-80 sm:h-80 animate-delay-2"></div>
          </div>
        </main>
      </div>
    </>
  );
}

export default About;
