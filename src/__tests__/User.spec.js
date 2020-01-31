import React, { useState, useEffect } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "../User";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("User component", () => {
  test("it shows a list of users", async () => {
    const fakeResponse = [{ name: "John Doe" }, { name: "Kevin Mitnick" }];

    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fetchResponse)
      };
      return Promise.resolve(fetchResponse);
    });

    await act(async () => {
      render(<User />, container);
    });
    expect(container.textContent).toBe("John DoeKevinMitnick");

    window.fetch.mockRestore();
  });
});
