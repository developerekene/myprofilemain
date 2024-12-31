import React from 'react';
import { LIBRARY } from '../../utils/constants/Data';
import Navbar from '../Components/Navbar';
import "../Styles/Library.css";

const Library: React.FunctionComponent = () => {

  return (
    <>
      <Navbar />
      <div className="library-grid">
        {LIBRARY.map((item, index) => (
          <div className="library-card" key={index}>
            <img src={item.icon} alt={`${item.title} icon`} className="library-icon" />
            <h3 className="library-title">{item.title}</h3>
            <p className="library-desc">{item.desc}</p>
            <div className="library-meta">
              <p className="library-item-count">{item.itemCount} items</p>
              <p className="library-last-updated">Updated: {item.lastUpdated}</p>
            </div>
            <a href={item.url} className="library-link">Explore {item.title}</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Library