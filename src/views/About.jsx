import * as React from 'react';
import Envelope from '../assets/icons/Envelope';
import WhatsApp from '../assets/icons/WhatsApp';

import Navigation from '../components/ui/Navbar';

function App() {
  return (
    <>
      <div id="about">
        <header>
          <Navigation />
        </header>
        <main>
          <div className="app-body">
            <p className="mb-3 text-sm">
              Saya Frontend Developer, dengan pengalaman lebih dari 5 tahun. Mengembangkan beberapa
              aplikasi untuk perusahaan tempat saya bekerja. Sedang mencari perusahaan teknologi
              yang bergerak di bidang pengembangan aplikasi dan perangkat lunak bisnis.
            </p>
            <p className="mb-5 text-sm">
              Menggunakan beberapa Javascritp Framework (Vue.JS & React.JS) sebagai frontend project
              base. Dan PHP sebagai Backend project base.
            </p>
            <p className="mb-5 text-sm">Kontak</p>
            <p className="flex items-center mb-3 text-sm">
              <WhatsApp />
              <span className="ml-2">+62 81231183113</span>
            </p>
            <p className="flex items-center mb-3 text-sm">
              <Envelope />
              <span className="ml-2">obinote@gmail.com</span>
            </p>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
