import { render, screen} from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
    test('renders correctly', () => {
        render(<Application />);

        const pageHeading = screen.getByRole("heading", {  //it check "Job application form" Heading/String present in the DOM or not
            name: "Job application form",
        })
        expect(pageHeading).toBeInTheDocument()
          
        
        const sectionHeading= screen.getByRole("heading", { //it check "Section 1" Heading/String present in the DOM or not
            name: "Section 1",     //here also write "Level 1" which indicate it is H1 tag
        })
        expect(sectionHeading).toBeInTheDocument()


        const nameElement = screen.getByRole("textbox", {
            name: "Name",     //here also write "Level 2" which indicate it is H2 tag
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText("Name", {
            selector: "input",
        });
        expect(nameElement2).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox", {
            name: "Bio",
        });
        expect(bioElement).toBeInTheDocument();        


        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();


        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByRole("checkbox");
        expect(termsElement2).toBeInTheDocument();

        const submitButtonElement = screen.getByLabelText("I agree to the terms and conditions");
        expect(submitButtonElement).toBeInTheDocument();
    })
})



//vdo 18

// https://www.w3.org/TR/html-aria/#docconformance  in this link role of each HTML element present in tabular form

/*
    I also i add custom role in each HTML element by using role attribute to add multiple HTML element which have same role in this case getByRole() method 2nd parameter we use a object where using Name property we add a value which value may be:
        1. Label of a form element
        2. the text content of a button or
        3. the value of the aria-label attribute

*/

/*
    in getByRole Option are
    1. name
    2. level
    3. hidden
    4. selection
    5. checked
    6. pressed

    for more Option please see documentation

*/

//vdo 20

/*

    in getByLabelText if any more than one tag has same string in this case it return error to prevent this error
    we use "selector" option which pass as a property of an object and its value which indicate HTML element type

     const nameElement2 = screen.getByLabelText("Name", {     //This method select Element based on Labeled Text
            selector: "input",
        });  here "input" is the type of the tag which i target

*/