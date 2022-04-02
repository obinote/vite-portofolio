import * as React from 'react';
import PropTypes from 'prop-types';

import rme from '../../assets/images/home-page-rme.png';
import smartlink from '../../assets/images/smartowner.png';

function CardPortofolio({ title, description, subTitle, id }) {
  const bgImage = id == 'dt-1' ? rme : smartlink;
  return (
    <>
      <div className="card">
        <p className="title">{title}</p>
        <p className="subtitle">{subTitle}</p>
        <p className="discription">{description}</p>
        <p className="transition-all ease-out scale-y-0 origin-top img">
          <img src={bgImage} />
        </p>
      </div>
    </>
  );
}

CardPortofolio.PropTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default CardPortofolio;
