import { useEffect, useState } from "react";
import axios from "axios";
import { formatUsername } from "./../../Utils/utils";

interface UserItem {
  id: string;
  name: string;
  username: string;
}

export default function App() {
  const [users, setUsers] = useState([]);

  // Load the data from the server
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };
    getUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.map((item: UserItem) => (
        <li key={item.id}>{item.username}</li>
      ))}
    </div>
  );
}
