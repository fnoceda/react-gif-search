import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Test on <GifGrid />', () => { 
    
    const category = 'One punch';

    test('should to show loading', () => { 

        useFetchGifs.mockReturnValue({
            images:[], 
            isLoading:true, 
        });


        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        // screen.debug();
     });


     test('should to show items when the images are loading', () => { 

        const gifs = [
            {
                id:'123', 
                title: 'Saitama',
                url: 'https://lala.com' 
            }, 
            {
                id:'124', 
                title: 'Goku',
                url: 'https://lala.com' 
            }
        ];

        useFetchGifs.mockReturnValue({
            images:gifs, 
            isLoading:false, 
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);



        // screen.debug(); 
     });




 });