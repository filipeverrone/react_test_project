import React from "react";

import { render, waitForElement, fireEvent } from "@testing-library/react";

import Todo from "./Todo";

describe("Tests for Todo component", () => {
  it("Should add new task when form has been submitted", async () => {
    // render the component
    const { getByTestId, getByText } = render(<Todo />);

    // search the input
    const newTask = "testing";
    const fieldNode = await waitForElement(() =>
      getByTestId("form-field-user")
    );

    // type in input
    fireEvent.change(fieldNode, { target: { value: newTask } });
    expect(fieldNode.value).toEqual(newTask);

    // search the button
    const btnNode = await waitForElement(() => getByTestId("form-btn"));

    // click on button
    fireEvent.click(btnNode);

    // search the table
    const tdNode = await waitForElement(() => getByText(newTask));

    // check if the task has been included on the table
    expect(tdNode).toBeDefined();
  });
});
