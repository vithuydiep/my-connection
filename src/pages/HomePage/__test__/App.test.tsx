/* eslint-disable testing-library/no-await-sync-query */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import axios from "axios";

jest.mock("axios");

const fakeUsers = [
  {
    id: 1,
    name: "Test User 1",
    username: "testuser1",
  },
  {
    id: 2,
    name: "Test User 2",
    username: "testuser2",
  },
];

describe("App component", () => {
  test("check list the user item", async () => {
    axios.get = jest.fn().mockResolvedValue({ data: fakeUsers });
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("testuser1")).not.toBeUndefined();
    });
  });
});
