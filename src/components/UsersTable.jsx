import React from "react";

export default function UsersTable({ users }) {
  return (
    <div className="user-table">
      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.address?.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}




