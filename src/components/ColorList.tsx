import React from 'react';

const ColorList: React.FC = () => {
    const list: string[] = [ 'Blue', 'Red', 'Green', 'Yellow', 'Green']

    return (
        <div>
            <ul>
                {
                    list.map(color => (
                        <li key={color}>
                            <p>{color}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ColorList;