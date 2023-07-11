import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './dashboardComponent';


describe("App core testing", ()=> {
    beforeEach(() => {
		jest.resetAllMocks();
    });
    it("dashboard testing initial render", async() =>{
        render(<Dashboard />);
        const coreContainer = screen.getByTestId('dashboard-testId')
        expect(coreContainer).toBeInTheDocument();
       
    })
});