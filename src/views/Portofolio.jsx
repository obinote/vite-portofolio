import * as React from 'react';

import Navigation from '../components/ui/Navbar';
const CardPortofolio = React.lazy(() => import('../components/ui/CardPortofolio'));

export default function About() {
  let [project, setProject] = React.useState([]);
  let [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setProject([
      {
        id: 'dt-1',
        title: 'PT. Lintang Kawuryan',
        subTitle: 'Rekam Medis Elektronik',
        discription:
          'Applikasi digunakan untuk melakukan pencatatan status pasien, menggantikan status manual pasien.'
      },
      {
        id: 'dt-2',
        title: 'PT. Ada Ide Langsung Jalan',
        subTitle: 'Smartlink - Smartowner',
        discription:
          'Applikasi dashboard admin untuk pengaturan dan pengelolaan laundry dari aplikasi smartlink.'
      }
    ]);

    setReady(true);
    return () => {
      setReady(false);
    };
  }, []);

  React.useEffect(() => {
    if (ready) {
      setTimeout(() => {
        document.querySelectorAll('.img').forEach((element) => {
          element.classList.remove('scale-y-0');
        });
      }, 100);
    }
  }, [ready]);

  let portofolio = project.map((pr) => {
    return (
      <CardPortofolio
        key={pr.id}
        title={pr.title}
        subTitle={pr.subTitle}
        description={pr.discription}
        id={pr.id}
      />
    );
  });

  return (
    <>
      <div id="about">
        <header>
          <Navigation />
        </header>
        <main>
          <div className="relative app-body">
            <div className="absolute bg-transparent sm:flex sm:space-x-2">{portofolio}</div>

            <div className="absolute top-[30vh] left-2 w-56 h-56 bg-purple-300 rounded-full opacity-40 mix-blend-multiply blur-xl animate-blob sm:top-20 sm:left-48 sm:w-80 sm:h-80"></div>
            <div className="absolute top-[30vh] right-2 w-56 h-56 bg-yellow-300 rounded-full opacity-40 mix-blend-multiply blur-xl animate-blob sm:top-28 sm:left-96 sm:w-80 sm:h-80 animate-delay-3"></div>
            <div className="absolute top-[40vh] left-20 w-56 h-56 bg-pink-300 rounded-full opacity-40 mix-blend-multiply blur-xl animate-blob sm:top-48 sm:left-60 sm:w-80 sm:h-80 animate-delay-2"></div>
          </div>
        </main>
      </div>
    </>
  );
}
