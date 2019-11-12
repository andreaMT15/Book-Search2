import React from "react";
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios';
import HomePage from "../Pages/HomePage/HomePage";

afterEach(cleanup);

test('it returns data', async () => {
    const { getByTestId } = render(
        <div>
            <HomePage />
        </div>
    );

    axiosMock.get.mockResolvedValueOnce([{
        data: {
            title: "flowers",
            authors: ["Martha Stewart"],
            publisher: "publishing company"

        }
    }]);

    fireEvent.click(getByTestId('search-btn'));
});
