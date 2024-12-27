import React from 'react';


const UserList: React.FC = () => {
    type User = {
        name: string,
        age: number
    }

    const users: User[] = [
        {name: 'Alex', age: 21},
        {name: 'Betty', age: 30},
        {name: 'Lisa', age: 18},
        {name: 'Mark', age: 34}
    ]

    return (
        <div>
            <ul>
                {
                    users.map((user, index) => (
                        <li key={index}>
                            <p>{user.name}: {user.age}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default UserList;