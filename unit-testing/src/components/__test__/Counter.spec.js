import {render, fireEvent, screen} from '@testing-library/react';
import Counter from '../Counter';

describe("Counter", ()=>{
 
 it("Should increment counter",()=>{
 //render compients in the virtual dom
    render (<Counter/>);

 //select the elements to interact
 const counter = screen.getByTestId("counter");
 const incrementBtn =screen.getByTestId("increment");

     //interact with elements
     fireEvent.click(incrementBtn);

     expect(counter).toHaveTextContent("5");
});

it("Should decrement counter",()=>{
//render compients in the virtual dom
render (<Counter/>);

//select the elements to interact
const counter = screen.getByTestId("counter");
const decrementBtn =screen.getByTestId("decrement");

    //interact with elements
    fireEvent.click(decrementBtn);

    expect(counter).toHaveTextContent("3");
});
});
