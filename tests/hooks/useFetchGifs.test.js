import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('test on hook useFetchGifs', () => { 
    
    test('should to return initial state', () => { 
        const { result } = renderHook( () => useFetchGifs('One punch') );
        const { images, isLoading } = result.current;
        expect( images.length).toBe(0);
        expect( isLoading ).toBe(true);
        expect( isLoading ).toBeTruthy();
     });

     test('should to return an images array and isLoading on false', async() => { 
        const { result } = renderHook( () => useFetchGifs('One punch') );
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),    
        );


        const { images, isLoading } = result.current;
        expect( images.length).toBeGreaterThan(0);
        expect( isLoading ).toBe(false);
        expect( isLoading ).toBeFalsy();

    });
 })