import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Test on <AddCatery />', () => {

    test('should to change the input text', () => {  
        const inputValue = 'Saitama';
        render(<AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: {value: inputValue} } );
        expect(input.value).toBe(inputValue);
        // screen.debug();
    });


    test('should to call onNewCategory when the input its filled', () => {  
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: {value:inputValue} } );
        expect(input.value).toBe(inputValue);
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled(); // que se haya llamado
        expect(onNewCategory).toHaveBeenCalledTimes(1); // que se haya llamado solo una vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); // que se haya llamado con el valor del input
         // screen.debug();
    });


    test('should not submit when the input its empty', () => {  
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } /> );
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled(); // que se haya llamado
        expect(onNewCategory).toHaveBeenCalledTimes(0); // que se haya llamado solo una vez



        // screen.debug();
    });
 


});