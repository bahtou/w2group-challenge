import React, { useState } from 'react';
import './styles.css';

function IndiceSelction({ setIndex, setPeriod }) {
  const [selectedIndex, setSelectedIndex] = useState('$SPX');
  const [selectedPeriod, setSelectedPeriod] = useState('5yrs');

  const handleSelection = evt => {
    const selectionType = evt.currentTarget.className;
    const selection = evt.target.value;

    if (selectionType === 'select-index') {
      setSelectedIndex(selection);
      setIndex(selection)
    } else {
      setSelectedPeriod(selection);
      setPeriod(selection)
    }
  }

  return (
    <div className="indice-selection-layout">
      <fieldset className="select-index" onChange={handleSelection} >
        <h2>Select Index</h2>
        <div className="radio-group">
          <div className="radio-input">
            <label>
              <input className="check-input"
                type="radio"
                name="S & P 500"
                value="$SPX"
                checked={selectedIndex === '$SPX'}
                readOnly />
              S & P 500
            </label>
          </div>
          
          <div className="radio-input">
            <label>
              <input className="check-input"
                type="radio"
                name="NASDAQ"
                value="$NDX"
                checked={selectedIndex === '$NDX'}
                readOnly />
              NASDAQ
            </label>
          </div>
            
          <div className="radio-input">
            <label>
              <input className="check-input"
                type="radio"
                name="Dow Jones Industrial"
                value="$DJI"
                checked={selectedIndex === '$DJI'}
                readOnly />
              Dow Jones
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset className="select-period" onChange={handleSelection}>
        <h2>Select Period</h2>
        <div className="radio-group">
          <div className="radio-input">
            <label>
              <input className="check-input"
                type="radio"
                name="5yrs"
                value="5yrs"
                checked={selectedPeriod === '5yrs'}
                readOnly />
              5 yrs
            </label>
          </div>
          
          <div className="radio-input">
            <label>
              <input className="check-input"
                type="radio"
                name="10yrs"
                value="10yrs"
                checked={selectedPeriod === '10yrs'}
                readOnly />
              10 yrs
            </label>
          </div>
            
          <div className="radio-input">
            <label>
              <input className="check-input"
                type="radio"
                name="20yrs"
                value="20yrs"
                checked={selectedPeriod === '20yrs'}
                readOnly />
              20 yrs
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default IndiceSelction;