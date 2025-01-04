const createRespnose = (message, statusCode, data, err)=>{
  return {
    message,
    statusCode,
    data, 
    err
  }
}

export default createRespnose;