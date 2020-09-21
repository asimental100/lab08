module.exports = rawRequest => {
  let object = {};
  const responseMethod = rawRequest.toString().split('\n')[0].split(' ')[0];
  const responsePath = rawRequest.toString().split('\n')[0].split(' ')[1];
  const responseBody = rawRequest.toString().split('\n');

  responseBody.includes('')
    ?
    object = { 
      method: responseMethod, 
      path: responsePath, 
      body: responseBody.pop() 
    } 
    :
    object = {
      method: responseMethod,
      path: responsePath
    };

  return object;
};
