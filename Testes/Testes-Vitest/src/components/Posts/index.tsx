import axios from "axios";
import { useEffect, useState } from "react";

interface UserProps{
    id: number;
    name: string;
    email: string;
    username: string;
}

export function Posts(){
    const [ users, setUsers ] = useState<UserProps[]>([]);

    useEffect(() => {
        async function fetchUsers(){
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        }

        fetchUsers();
        
    }, []);
    
    async function handleGetUsers(){
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
    }

    return(
        <div>
            <button onClick={handleGetUsers}>Buscar Usuários</button>

            {users.map( (user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.username}</p>
                </div>
            ))}
        </div>
    )
}