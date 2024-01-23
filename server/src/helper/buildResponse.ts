export default function buildResponse(res, code, message) {
  res.status(code).send(message);
}