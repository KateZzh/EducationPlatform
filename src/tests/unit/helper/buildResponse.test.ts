import buildResponse from "../../../helper/buildResponse";

const response = {
  status: jest.fn(),
  send: jest.fn(),
};

describe("buildResponse:", () => {
  test("", () => {
    buildResponse(response, 200, "data");

    expect(response.status).toHaveBeenCalled();
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.send).toHaveBeenCalled();
    expect(response.send).toHaveBeenCalledWith("data");
  });
});
