/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-render-in-setup */
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import LoginFormPage from "../LoginFormPage";
import React from "react";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
}));

describe("end to end testing for Login Page", () => {
  beforeEach(async () => {
    render(<LoginFormPage />);
  });

  afterEach(() => {
    cleanup();
  });

  it("user enter the blank username and password", async () => {
    const loginBtn = screen.getByRole("button");
    fireEvent.click(loginBtn);
    await waitFor(() => {
      expect(screen.getByText("Username is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });
  });

  it("user just enter the username and blank password", async () => {
    const inputField = screen.getByTestId("username");
    fireEvent.change(inputField, {
      target: { value: "admin123" },
    });
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      expect(inputField).toHaveValue("admin123");
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });
  });

  it("enter valid username and password", async () => {
    fireEvent.change(screen.getByTestId("username"), {
      target: { value: "admin123" },
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: {
        value: "admin321",
      },
    });
    fireEvent.click(screen.getByRole("button"));
    await waitFor(()=>{
      expect(mockedUsedNavigate).toBeCalledWith('/connection')
    })
  });

  it('enter invalid username and password', async () => {
    fireEvent.change(screen.getByTestId("username"), {
      target: { value: "admin123" },
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: {
        value: "jfnfffff",
      },
    });
    fireEvent.click(screen.getByRole("button"));
    await waitFor(()=>{
      expect(screen.getByText('Username or password is incorrect')).toBeInTheDocument() 
    })
  })
});
