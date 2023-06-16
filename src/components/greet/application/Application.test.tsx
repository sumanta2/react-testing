import { render, screen} from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
    test('renders correctly', () => {
        render(<Application />);
        const nameElement = screen.getByRole("textbox");
        expect(nameElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument();
    })
})



// https://www.w3.org/TR/html-aria/#docconformance  in this link role of each HTML element present in tabular form

//also i add custom role in each HTML element by using role attribute