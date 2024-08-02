import { useState } from "react"
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import {AddCategory, GifGrid} from './components'
export const GifExperApp = () => {

    const [categories, setCategories] = useState(['Goku']);
    // console.log(categories);

    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory)) return;


        setCategories([newCategory, ...categories]);
    }; 


  return (
    <>
 
        <h1>GifExperApp</h1>
 
        <AddCategory 
            onNewCategory={ (value) => onAddCategory(value) } 
        /> 
 
        {
            categories.map( category => (
                <GifGrid key={category} category={category} />
            ))
        }

    </>
  )
}
