function convertData(data) {
  const convertedData = [];

  data.forEach((network, index) => {
    const counts3 = network[`${Object.keys(network)[0]}Count`];
    const counts8 = network[`${Object.keys(network)[0]}PageCount`];

    const networkName = Object.keys(network)[0];
    const formattedNetworkName =
      networkName.charAt(0).toUpperCase() + networkName.slice(1).toLowerCase();

    convertedData.push({
      id: index + 1,
      network: formattedNetworkName,
      counts3: counts3,
      counts8: counts8,
    });
  });

  return convertedData;
}

const originalData = [
  {
    vodaCount: 13,
    vodaPageCount: 26,
  },
  {
    mtnCount: 51,
    mtnPageCount: 102,
  },
  {
    airteltigoCount: 4,
    airteltigoPageCount: 8,
  },
  {
    expressoCount: 0,
    expressoPageCount: 0,
  },
  {
    gloCount: 0,
    gloPageCount: 0,
  },
  {
    unknownCount: 0,
    unknownPageCount: 0,
  },
];

const convertedData = convertData(originalData);

console.log(convertedData);
