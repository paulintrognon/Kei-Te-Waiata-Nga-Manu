import React from 'react';
import './HomePage.css';

export default () => (
  <div className="HomePage-birds">
    <div className="HomePage-bird card">
      <img
        className="HomePage-bird-image card-img-top"
        src="https://i.pinimg.com/originals/9e/4d/6d/9e4d6d2c73d1928703e50d1041b9f8b5.jpg"
        alt="Tui"
      />
      <div className="card-body">
        <h5 className="card-title">Tui</h5>
        <p className="card-text">
          Le <strong>Tui</strong> blabla bli blabla blou on l&apos;adore il est
          trop chouette&nbsp;!
        </p>
      </div>
    </div>
  </div>
);
