import intrinioSDK from 'intrinio-sdk';

intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = 'OmQwOTRjMjIzZTQ0NjQ3NTNlMDY0MTU2ZTFlZGQ1MzZi';
const indexAPI = new intrinioSDK.IndexApi();

// Index
const indices = ['$DJI', '$SPX', '$NDX'];

// Time Periods
const timePeriods = {
  '5yrs': new Date(new Date().setFullYear(new Date().getFullYear() - 5)),
  '10yrs': new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
  '20yrs': new Date(new Date().setFullYear(new Date().getFullYear() - 20))
};

const tag = 'level'; // String | An Intrinio data tag ID or code-name
let opts = {
  type: null, // String | Filter by type, when applicable
  // startDate, // Date | Get historical data on or after this date
  endDate: null, // Date | Get historical data on or before this date
  sortOrder: 'desc', // String | Sort by date `asc` or `desc`
  pageSize: 10, // Number | The number of results to return
  nextPage: null // String | Gets the next page of data from a previous API call
};

async function fetchIndexData(index, period) {
  return new Promise((resolve, reject) => {
    opts = { ...opts, startDate: timePeriods[period] }
    console.log({ index, opts });

    indexAPI.getStockMarketIndexHistoricalData(index, tag, opts)
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

export default fetchIndexData;