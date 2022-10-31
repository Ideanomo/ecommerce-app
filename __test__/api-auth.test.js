import { signin } from "../client/auth/api-auth";

const MOCK_SIGNIN_RESPONSE = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  user: {
    _id: "635feb87053093131803d60e",
    name: "test",
    email: "test@test.info",
  },
};

const user = {
  name: "test",
  password: "password123",
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_SIGNIN_RESPONSE),
  })
);

describe("Signin", () => {
  let credentials;

  describe("User signs in with email and password", () => {
    beforeEach(async () => {
      credentials = await signin(user);
      console.log("credentials:", credentials);
    });

    it("Then the correct response is sent back", () => {
      expect(credentials).toMatchObject(MOCK_SIGNIN_RESPONSE);
    });
  });
});
