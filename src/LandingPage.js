import { hot } from 'react-hot-loader/root';
import React from 'react';

import 'Styles/layouts.css';
import useIndexApi from 'Endpoints/useIndexApi';
import IndiceSelction from 'Components/IndiceSelection';
import LineChart from 'Components/LineChart';
import PriceTable from 'Components/PriceTable';

const LandingPage = () => {
  const [state, setIndex, setPeriod] = useIndexApi('$SPX', '5yrs', {});
  const { data, isLoading, isError } = state;

  return (
    <main className="main-content">
      <header className="title">
        <h1>Stock Market Index History</h1>
      </header>

      <section className="indice-selection">
        <IndiceSelction setIndex={setIndex} setPeriod={setPeriod} />
      </section>

      <section className="index-line-chart">
        <LineChart data={data} />
      </section>

      <section className="index-table">
        <PriceTable marketData={data} />
      </section>
      
    </main>
  );
};


export default hot(LandingPage);
