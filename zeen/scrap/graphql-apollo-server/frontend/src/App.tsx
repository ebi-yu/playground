import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_USERS, GET_USERS } from "./queries";

function App() {
  const {
    loading: fetchLoading,
    error: fetchError,
    data: fetchData,
  } = useQuery(GET_USERS, {
    pollInterval: 2000,
  });

  const [createUser, { loading: createLoading, error: createError }] =
    useMutation(CREATE_USERS, {
      refetchQueries: [{ query: GET_USERS }], // ユーザー一覧を更新
    });

  if (fetchLoading) return <p>Loading...</p>;
  if (fetchError) return <p>Error: {fetchError.message}</p>;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");

    if (name && email) {
      createUser({ variables: { name, email } }).catch((err) => {
        console.error("Error adding user:", err);
      });
    } else {
      alert("Both name and email are required.");
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="name" placeholder="Name" required />
        </div>
        <div>
          <input name="email" placeholder="Email" required />
        </div>
        <div>
          <button type="submit" disabled={createLoading}>
            {createLoading ? "Adding..." : "Add User"}
          </button>
        </div>
      </form>
      <h2>Users List</h2>
      <ul>
        {fetchData.users.map(
          (user: { id: string; name: string; email: string }) => (
            <li key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default App;
