import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);  //it check learn react present in <App/> component or not
  expect(linkElement).toBeInTheDocument();
});



// test Vdo7     -----description of test method-----
// test(name, fn, timeout)
// The first argument is the test name used to identify the test
// The second argument is a function that contains the expectations to test
// The third argument is timeout which is an optional argument for specifying how
// long to wait before aborting the test. The default timeout value is 5 seconds

// here we test <App/> component so first import this component then inside the function render this component using render() method

//after that screen is used to query to virtual dom here Query is "getByText" screen.getByText() used to a /../i (it indicate text is case in-sensitive) 

// in expect we pass linkElement which expectation properly pass or not

//here test and expect are not need to import it are globally provide by create-react-app


//---------------------------------------------------------------------------

//vdo15 here i discuss expect method with a matcher function (here  toBeInTheDocument() is a matcher function like this some common matcher function present in jest website which like i provide  https://jestjs.io/docs/using-matchers here only js-testing matcher present if we need react-dom testing matcher function like(toBeInTheDocument()) we need to use jest-dom  package(install by default) which details document present in this https://github.com/testing-library/jest-dom github repository ReadMe portion 