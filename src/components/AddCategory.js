import React, {useState} from 'react'
import ProtoType  from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handlerInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handlerSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){
            setCategories(callback => [inputValue,...callback]);
            setInputValue('');
        }

    }

    return (
        <>
        <form onSubmit={handlerSubmit}>    
            <input 
                type="text"
                value = {inputValue}
                onChange= {handlerInputChange}
            />
        </form>    
        </>
    )
}

AddCategory.prototype={
    setCategories: ProtoType.func.isRequired
}
