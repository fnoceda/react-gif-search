import { render, screen, fireEvent } from "@testing-library/react";
import { GifExperApp } from "../src/GifExperApp";

describe('Tests on <GifExperrApp />', () => { 


    const setup = () => {
        render(<GifExperApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");
        return {
          input,
          form,
        };
      };


    test('should to match with the snapshot', () => { 
        const container = render(<GifExperApp />);
        expect( container ).toMatchSnapshot();
     });


     test('should to show the GifExperApp', () => { 
        render(<GifExperApp />);
        expect( screen.getByRole("heading", {level:1}).innerHTML ).toContain('GifExperApp');
        // screen.debug();
     });

     test('should to change the input value', () => { 
        const inputValue = 'lala';

        // render(<GifExperApp />);
        // const input = screen.getByRole('textbox');
        const { input, form } = setup();
        fireEvent.input(input, { target: {value:inputValue} } );
        expect(input.value).toBe(inputValue);
            // screen.debug();

     });

     test('should call to add a new category', () => { 
        const inputValue = 'lala';

        // render(<GifExperApp />);
        // const input = screen.getByRole('textbox');
        // const form = screen.getByRole('form');
        const { input, form } = setup();

        fireEvent.input(input, { target: {value:inputValue} } );
        fireEvent.submit(form);
        expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);

     });

     test('should call to avoid add a new category when the text is repeat', () => { 
        const inputValue = 'Goku';

        // render(<GifExperApp />);
        // const input = screen.getByRole('textbox');
        // const form = screen.getByRole('form');
        const { input, form } = setup();

        fireEvent.input(input, { target: {value:inputValue} } );
        fireEvent.submit(form);
        expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);

     });

 });