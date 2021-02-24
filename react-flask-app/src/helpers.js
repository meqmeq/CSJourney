let index = 0;
let randomNum = () => 0 + Math.floor(100 * Math.random());

// Create a function to append data
function getAppendedData(data) {
  let boxData = data.map((d) => d); // Call the same array
  boxData.push({
    id: index,
    value: index,
    name: "Item " + index,
  });
  index++;
  return boxData;
}

function getInitialData() {
  let numItems = 4;
  let data = [];
  for (let i = 0; i < numItems; i++) {
    getAppendedData(data);
  }
  return data;
}

function getTruncatedData(data, init, last) {
  let boxData = data.map((d) => d).slice(init, last);
  return boxData;
}

export { getAppendedData, getInitialData, getTruncatedData };
