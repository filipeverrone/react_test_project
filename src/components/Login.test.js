import React from "react";

import { render, waitForElement, fireEvent } from "@testing-library/react";

import Login from "./Login";

describe("Tests for User Login component", () => {
  it("Should add new user when form has been submitted", async () => {
    // render the component
    const { getByTestId, getByText } = render(<Login />);

    // search the user input
    const newUser = "testing";
    const fieldUserNode = await waitForElement(() =>
      getByTestId("form-field-user")
    );

    // type in user input
    fireEvent.change(fieldUserNode, { target: { value: newUser } });
    expect(fieldUserNode.value).toEqual(newUser);

    // search the button
    const btnNode = await waitForElement(() => getByTestId("form-btn"));

    // click on button
    fireEvent.click(btnNode);

    // search the table
    const tdNode = await waitForElement(() => getByText(newUser));

    // check if the user has been included on the table
    expect(tdNode).toBeDefined();

    // search the password input
    const newPass = "testing";
    const fieldPassNode = await waitForElement(() =>
      getByTestId("form-field-pass")
    );

    // type in password input
    fireEvent.change(fieldPassNode, { target: { value: newPass } });
    expect(fieldPassNode.value).toEqual(newPass);

    // search the password input
    const newPassMinor = "test";
    const Minor = new Error(
      `Please use at least 5 characters (you are currently using ${newPassMinor.length()} characters).`
    );
    const fieldPassMinorNode = await waitForElement(() =>
      getByTestId("form-field-pass")
    );

    // enter fewer characters than required
    fireEvent.change(fieldPassMinorNode, { target: { value: newPassMinor } });
    expect(fieldPassMinorNode.value).toEqual(Minor);

    // search the password input
    const newPassMajor = "testing123456789";
    const fieldPassMajorNode = await waitForElement(() =>
      getByTestId("form-field-pass")
    );

    // enter more characters than required
    fireEvent.change(fieldPassMajorNode, { target: { value: newPassMajor } });
    expect(fieldPassMajorNode.value).toEqual({ ...newPassMajor });
  });
});
