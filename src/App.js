import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';

import NavBar from './components/navBar/NavBar';
import Chart from './components/chart/Chart';
import ShowCase from './components/showCase/ShowCase';
import Table from './components/table/DataTable';
import Loader from './components/Loader';

import { fetchCasesForAll, fetchIndiaData } from './API/api';

function App() {
  const [india, setIndia] = useState(false);
  const [loading, setLoading] = useState(false);

  const [tableData, setTableData] = useState([]);

  const [totalData, setTotalData] = useState({
    totalConfirmed: 0,
    totalRecovered: 0,
    totalDeaths: 0,
    newConfirmed: 0,
    newRecovered: 0,
    newDeaths: 0,
  });

 
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container maxWidth='xl'>
            <NavBar />
            <ShowCase totalData={totalData} />
            <Chart totalData={totalData} />
            <Table tableData={tableData} setTotalData={setTotalData} />
          </Container>
        </>
      )}
    </>
  );
}

export default App;