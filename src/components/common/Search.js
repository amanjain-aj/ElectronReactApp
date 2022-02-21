import React, { useState }  from 'react'
import {Style} from './style.js';

const Search = (props) => {
    
    const [ searchData, setSearchData ] = useState([...props.Options])
    const [ inputClick, setInputClick ] = useState(false)
    const [ inpselectValue, setinpSelectValue ] = useState('');
    const [ initialinpselectValue, setinitialinpSelectValue ] = useState('');

    const {
        Options,
        searchInputStyle,
        searchInputContainerStyle, 
        disable, 
        selectedTextStyle, 
        placeholder, 
        placeholderStyle, 
        disableSelectedTextStyle
    } = props

    const filterData = (e) => {
        if(e.target.value === ''){
            setSearchData(Options)
        }else{
            const result = Options.filter((data) => {
                return data.value.toLowerCase().includes(e.target.value.toLowerCase())
            })
            setSearchData(result);
        }
    }

    const handleFocus = (e) => {
        console.log('focus',e.target.value);
        setInputClick(true)
    }


    const inputHandleChange = (e) => {
        setinpSelectValue(e.target.value)
    }

    const handleSelectList = (option) => {
        setinpSelectValue(option.value)
        setInputClick(false)
    }


    const handleBlur = () => {
        setInputClick(false)
    }

    // React.useEffect(()=>{
    //     checkChangeInVlaue(inpselectValue)
    // },[inpselectValue])
    const checkChangeInVlaue = ()=>{
        const initialValue = initialinpselectValue;
        const changedValue = inpselectValue;
        
        if(initialValue === changedValue){ return false }
        else{
            setinitialinpSelectValue(changedValue) ;
            return true;
        }
    }


    return (
        <div
        // onKeyUp= {handleBlur} 
        style={ 
            Object.assign(
                {},
                Style.searchInputContainerStyle,
                searchInputContainerStyle
                ) 
            } >
            <input 
                type="text" 
                value = { inpselectValue }
                onChange = { inputHandleChange }
                style={ 
                    Object.assign( 
                        {}, 
                        Style.searchInputStyle,
                        searchInputStyle, 
                        placeholderStyle,
                        selectedTextStyle, 
                        disable ? disableSelectedTextStyle : null
                        ) 
                    } 
                onKeyUp = { filterData }  
                onFocus = { handleFocus } 
                onBlur = { checkChangeInVlaue() ?  handleBlur : ()=>{} }
                disabled = { disable ? true : false}
                placeholder = { placeholder }/>
                <ul
               
                style = { 
                    Object.assign(
                        {},
                        Style.inputUl,
                        !inputClick ? Style.inputUlClick : null
                    )
                 }>
                    {
                        searchData.map( (option) => (
                            <li 
                            
                                key={ option.key } 
                                style={ Style.inputLi } 
                                onClick={ ()=> handleSelectList(option) }
                            > { option.value } </li>
                        ))
                    }
                </ul>
        </div>
    )
}

export default Search
