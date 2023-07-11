import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';


describe("App core testing", ()=> {
    beforeEach(() => {
		jest.resetAllMocks();
    });
    it("testing initial render", async() =>{
        render(<App />);
        const coreContainer = screen.getByTestId('app')
        expect(coreContainer).toBeInTheDocument();
        expect(screen.getByTestId("header")).toBeInTheDocument();
        expect(screen.getByTestId("body")).toBeInTheDocument();
    })
});