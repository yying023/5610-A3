// // import React from 'react';
// // import { render, screen } from '@testing-library/react';
// // import userEvent from '@testing-library/user-event';
// // import Login from '../pages/Login';
// // window.matchMedia = window.matchMedia || function () {
// //     return {
// //         matches: false,
// //         addListener: function () { },
// //         removeListener: function () { }
// //     };
// // };
// // describe('Login', () => {
// //     // const user = { username: 'test user', email: 'testuser@example.com' };
// //     // const setOperate = jest.fn();
// //     // const authUser = {};

// //     it('renders login', () => {
// //         render(<Login />);
// //         expect(screen.getByText('SpendSmart - Login')).toBeInTheDocument();
// //         // expect(screen.getByText(user.username)).toBeInTheDocument();
// //         // expect(screen.getByText(user.email)).toBeInTheDocument();
// //     });

// //     // it('calls setOperate function on edit button click', () => {
// //     //     render(<UserDetail setOperate={setOperate} user={user} authUser={authUser} />);
// //     //     const editButton = screen.getByText('Edit');
// //     //     userEvent.click(editButton);
// //     //     expect(setOperate).toHaveBeenCalledWith('edit');
// //     // });
// // });

// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import Login from "../pages/Login";

// test("renders Login component", () => {
//   render(<Login />);
//   const emailInput = screen.getByLabelText("Email");
//   expect(emailInput).toBeInTheDocument();

//   const passwordInput = screen.getByLabelText("Password");
//   expect(passwordInput).toBeInTheDocument();

//   const loginButton = screen.getByRole("button", { name: "LOGIN" });
//   expect(loginButton).toBeInTheDocument();

//   fireEvent.change(emailInput, { target: { value: "test@test.com" } });
//   fireEvent.change(passwordInput, { target: { value: "testpassword" } });

//   fireEvent.click(loginButton);

//   // Here you can add your own assertions for after the login button is clicked.
// });

import { render, screen } from "@testing-library/react";
import Login from "../pages/Login";

test("renders Login page", () => {
  render(<Login />);
  expect(screen.getByText("Login")).toBeInTheDocument();
});