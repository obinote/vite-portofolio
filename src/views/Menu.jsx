import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Navigation from '../components/ui/Navbar';

function Menu() {
  const navigate = useNavigate();
  let [doc, setDoc] = React.useState();

  React.useEffect(() => {
    setDoc(document.getElementById('menu'));
  }, []);

  React.useEffect(() => {
    if (doc) {
      pageSlide('in');
    }
  }, [doc]);

  function linkto(url) {
    pageSlide('out');
    setTimeout(() => {
      navigate(url);
    }, 151);
  }

  function pageSlide(slide) {
    if (slide === 'in') {
      doc.classList.remove('scale-x-0');
    } else {
      doc.classList.add('scale-x-0');
    }
  }

  return (
    <>
      <div id="menu" className="overflow-hidden transition-all ease-out scale-x-0 origin-right">
        <header>
          <Navigation type="back" pageSlide={pageSlide} />
        </header>
        <main>
          <div className="text-base app-body">
            <div
              className="flex items-center py-4 -mx-5 active:bg-gray-200 hover:cursor-pointer"
              onClick={() => linkto('/')}>
              <span className="mx-5">Tentang Saya</span>
            </div>
            <div className="-mx-5 border-b-4 border-gray-300"></div>
            <div
              className="flex items-center py-4 -mx-5 active:bg-gray-200 hover:cursor-pointer"
              onClick={() => linkto('/portofolio')}>
              <span className="mx-5">Portofolio</span>
            </div>
            <div className="-mx-5 border-b-4 border-gray-300"></div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Menu;
