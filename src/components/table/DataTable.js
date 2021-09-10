import MaterialTable from 'material-table';
const DataTable = ({ tableData, setTotalData }) => {
  return (
    <>
      <MaterialTable
       
        columns={
          tableData.length > 0 && tableData[0].Country
            ? [
                { title: 'Country', field: 'Country' },
                { title: 'New Confirmed', field: 'NewConfirmed' },
                { title: 'New Recovered', field: 'NewRecovered' },
                { title: 'New Deaths', field: 'NewDeaths' },
                { title: 'Total Confirmed', field: 'TotalConfirmed' },
                { title: 'Total Recovered', field: 'TotalRecovered' },
                { title: 'Total Deaths', field: 'TotalDeaths' },
                { title: 'Date & Time', field: 'Date' },
              ]
            : [
                { title: 'State', field: 'state' },
                { title: 'New Confirmed', field: 'deltaconfirmed' },
                { title: 'New Recovered', field: 'deltarecovered' },
                { title: 'New Deaths', field: 'deltadeaths' },
                { title: 'Total Confirmed', field: 'confirmed' },
                { title: 'Total Recovered', field: 'recovered' },
                { title: 'Total Deaths', field: 'deaths' },
                { title: 'Date & Time', field: 'lastupdatedtime' },
              ]
        }
      
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
        }}
      />
    </>
  );
};

export default DataTable;