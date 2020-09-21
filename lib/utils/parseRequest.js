module.exports = rawRequest => {
  const responseMethod = rawRequest.toString().split('\n')[0].split(' ')[0];
  const responsePath = rawRequest.toString().split('\n')[0].split(' ')[1];
  const responseBody = rawRequest.toString().split('\n')[4];
  const object = { method: responseMethod, path: responsePath, body: responseBody };
  return object;
};
