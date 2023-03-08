export function convertToTableData(data) {
  console.log({ data });
  const result = data.map((element, index) => {
    const itemObj = {
      id: index,
      network: element.network.toUpperCase(),
      smsCount: element?.count,
      pageCount: element.page_count,
    };
    return itemObj;
  });
  return result;
}

export function convertToDoughnutData(data) {
  if (data.length === 0) return [];
  const networks = [
    "MTN",
    "AIRTELTIGO",
    "VODAFONE",
    "FOREIGN",
    "EXPRESSO",
    "GLO",
  ];

  const result = networks.map((network) => {
    const itemObj = data.filter(
      (obj) => obj.network.toLowerCase() === network.toLowerCase()
    );
    return itemObj[0]?.page_count;
  });
  return result;
}
