import React from 'react';
import Card from './Card/Card';
import './CardSection.css';

const CardSection = (props) => {
  return (
    <>
      <section className="py-5 position-relative z-index 2">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Card state={props} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CardSection;