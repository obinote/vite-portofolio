/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Menu = React.lazy(() => import('../../assets/icons/Menu'));
const ArrowLeft = React.lazy(() => import('../../assets/icons/ArrowLeft'));

function Navigation({ type, pageSlide }) {
  const [menuType, setMenuType] = React.useState('none');
  const navigate = useNavigate();

  React.useEffect(() => {
    setMenuType(type);
  }, []);

  function backLink(idx) {
    pageSlide('out');
    setTimeout(() => {
      navigate(idx);
    }, 151);
  }

  return (
    <>
      <div className="app-header">
        {menuType === 'none' && (
          <nav className="flex justify-between items-center">
            <div className="text-sm font-semibold hover:cursor-default">
              <span>Ahmad Robi</span>
            </div>
            <div onClick={() => navigate('/menu')} className="hover:cursor-pointer">
              <React.Suspense fallback={<>...</>}>
                <Menu />
              </React.Suspense>
            </div>
          </nav>
        )}
        {menuType === 'back' && (
          <nav className="flex">
            <div
              className="flex items-center text-sm font-semibold hover:cursor-pointer"
              onClick={() => backLink(-1)}>
              <React.Suspense fallback={<>...</>}>
                <ArrowLeft />
              </React.Suspense>
              <span className="ml-1">Back</span>
            </div>
          </nav>
        )}
      </div>
    </>
  );
}

Navigation.propTypes = {
  type: PropTypes.string.isRequired,
  pageSlide: PropTypes.func
};

Navigation.defaultProps = {
  type: 'none'
};

export default Navigation;
