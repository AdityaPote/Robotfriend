import React from 'react';

const SearchBox = ({searchChange}) => {  //using destructing here
    return (
        <div className='pa2'>
            <input 
            className=' br3 pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search for a robotfriend' 
            onChange={searchChange}
            />
        </div>  
    );
}

export default SearchBox;