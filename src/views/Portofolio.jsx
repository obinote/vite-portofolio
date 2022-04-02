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
          <div className="app-body">{portofolio}</div>
        </main>
      </div>
    </>
  );
}
