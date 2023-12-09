export const getStatus = (apiResult, medName) => {
  const status = apiResult.find((element) => element.name === medName)?.status;
  return status || 'grün';
};
