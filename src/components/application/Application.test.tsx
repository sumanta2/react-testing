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


        const paragraphElement = screen.getByText("All fields are mandatory") //it check "All fields are mandatory" Paragraph/String present in the DOM or not
        expect(paragraphElement).toBeInTheDocument()


        const closeElement = screen.getByTitle("close");
        expect(closeElement).toBeInTheDocument();


        const imageElement = screen.getByAltText("a person with a laptop") //it check "a person with a laptop" Image/String present in the DOM or not
        expect(imageElement).toBeInTheDocument()


        const customElement = screen.getByTestId("custom-element");
        expect(customElement).toBeInTheDocument();


        const nameElement = screen.getByRole("textbox", {
            name: "Name",     //here also write "Level 2" which indicate it is H2 tag
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText("Name", {
            selector: "input",
        });
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByPlaceholderText("FullName");
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue("Vishwas");
        expect(nameElement4).toBeInTheDocument();

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

/*
    vdo21
    getPlaceholderText() method select the html element based on placeholder text property of an element

*/

/* 
    vdo 22
    getByText() search element based on textContent present in a specific tag/node
        it also used to find paragraph div or span element
*/


/*
    vdo 23
    getByDisplayValue()  return the input textarea, or select element that has the matching display value 
    basically it track the value attribute value of the element

    if i used this method to track a element in that element must readonly="true " property or implement onChange event

*/

/*

    vdo 24
    getByText() return the element that has the given alt text
    this method only supports elements which accept an alt attribute like <img>, <input>, ,area> or custom HTML elements

*/

/*

    vdo 25
    getByTitle() return the element that has the matching title attribute

*/

/*
    vdo 26
    getByTestId() return the element that has the matching data-testid attribute

*/

/*
    vdo 27
    order of priority of different type of query is 

    1. getByRole()
    2. getByLabelText()
    3. getByPlaceHolderText()
    4. getByText()
    5. getByDisplayValue()
    6. getByAltText()
    7. getByTitle()
    8. getByTestId()


    if i explain this we first try to use getByRole() Query to find the element if using this method i does not uniquely find the element then i used the getByLabelText() method to find the element and this process repeats until i find the element for all next query method

*/

/*
    vdo 28

    RTL getAllBy Queries

    Find multiple element in the DOM
    getAllBy returns an array of all matching elements node for a query and throws an error if no elements match

    Every getBy queries has corresponding getAllBy queries

    getByRole                               getAllByRole
    getByLabelText                          getAllByLabelText
    getByPlaceHolderText                    getAllByPlaceHolderText
    getByText                               getAllByText
    getByDisplayValue                       getAllByDisplayValue
    getByAltText                            getAllByAltText
    getByTitle                              getAllByTitle
    getByTestId                             getAllByTestId


    here i explain only getallByRole query other query of getAll category are same 

*/

/*
    vdo 29
    in each Query like getByRole
    const pageHeading = screen.getByRole("heading"); here we thing "heading" is a string in the context of query this called "TextMatch"

    The TextMatch represent a type which can be either
        1. String
        2. regex
        3. Function


        let select this following tag <div> Hello World  </div> by these three way
    TextMatch using String


        screen.getByText("Hello World"); //Full String match

    TextMatch using regex
        screen.getByText(/World/); //substring match

     TextMatch using custom Function 
     
        (content?:string,element?:HTMLElement| null)=>boolean //syntax

        screen.getByText((content)=> return content.startsWith( "Hello World" );

*/