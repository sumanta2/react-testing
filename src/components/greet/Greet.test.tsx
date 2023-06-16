import Greet from "./Greet"
import { render, screen } from "@testing-library/react"


test("Greet renders correctly", () => {
    render(<Greet name="hello" />)
    const textElement = screen.getByText(/hello/i);  //it check hello() present in <Greet/> component or not
    expect(textElement).toBeInTheDocument();
})

// test("Greet cat renders correctly", () => {
//     render(<Greet name="cat" />)
//     const textElement = screen.getByText('Hello cat');  //it check hello() present in <Greet/> component or not
//     expect(textElement).toBeInTheDocument();  
// })

//vdo11--------------------------------------------------------------------


//instead of test if we used test.only() then only this(test.only() ) test case will run for another test present in this file will skipped

//instead of test if we used test.skip() it skip that test to execute



//vdo7------------------------------------------------------------
//explanation of test method present App.test.tsx file

//screen.getByText() used to a /'hello'/i (it indicate text is case in-sensitive means any character may be upper case or lower case)


//vdo 12----------------------------------------------------

// describe("Greet", () => {
    // test("Greet renders correctly", () => {
    //     render(<Greet />)
    //     const textElement = screen.getByText(/Hello/);  //it check hello() present in <Greet/> component or not
    //     expect(textElement).toBeInTheDocument();
    // })
    
    // test("Greet cat renders correctly", () => {
    //     render(<Greet name="cat" />)
    //     const textElement = screen.getByText('Hello cat');  //it check hello() present in <Greet/> component or not
    //     expect(textElement).toBeInTheDocument();
    // })
// })

//using describe method we group multiple test in a single unit it also used .only and .skip method inside describe we also used nested describe method/block a file contain multiple describe block/method

//vdo13-------------------

// testing file extension instead of .text.jsx/tsx we also give .spec.jsx/tsx

//we also create a folder __test__ where put all test case and run

//In React testing, it's common practice to use a folder named "tests" (with two underscores before and after "tests") to store test files. This naming convention is not specific to React, but is actually a convention used by Jest, a popular JavaScript testing library often used for testing React applications.


//instead of test we can use it() method for example

//it("Greet cat renders correctly", () => {
//     render(<Greet name="cat" />)
//     const textElement = screen.getByText('Hello cat');  //it check hello() present in <Greet/> component or not
//     expect(textElement).toBeInTheDocument();
// })

//fit() used in it() work same as test.only()
//xit() used in it() work same as test.skip()


//vdo14 code Coverage


