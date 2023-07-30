function buildResponse(res, code, message) {
  res.status(code);
  res.send(message);
}

export default buildResponse;
