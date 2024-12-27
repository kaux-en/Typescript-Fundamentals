import React from 'react';


const FilterNumbers = ({numberList}: { numberList: number[] }): number[] => {
    const newList = numberList.filter(number => (number % 2 === 0))

    return (
      <div>
        <p>New List:</p>

        <ul>
        {
          newList.map((number, index) => (
            <li key={index}>
              {number}
            </li>
          ))
        }
        </ul>
      </div>
    )
  };


  export default FilterNumbers;