import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it\'s cold',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 4 && month < 11) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'summer' : 'winter';
  }
}

const SeasonDisplay = (props) => {
  const month = new Date().getMonth() + 1;
  const season = getSeason(props.lat, month);
  const {text, iconName} = seasonConfig[season];
  return (
  <div className={`season-display ${season}`}>
    <i className={`massive ${iconName} icon icon-left`}/>
    <h1>{text}</h1>
    <i className={`massive ${iconName} icon icon-right`}/>
  </div>
  );
};

export default SeasonDisplay;
