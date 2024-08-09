import { render, screen, fireEvent } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Test on <GitItem />', () => { 
    
    const title = "Saitama";
    const url = "http://one-puch.com/saitama.jpg";


    test('should match with snapshot', () => {  
        const {container} = render(<GifItem title={title} url={url} />);
        expect( container ).toMatchSnapshot();
    });

    test('should to show the proper url and title', () => {  
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
     });

     test('should to show the title', () => { 
        render(<GifItem title={title} url={url} />);
        expect( screen.getByText(title) ).toBeTruthy();
      });

 })