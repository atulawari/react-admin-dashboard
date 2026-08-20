import { Link } from "react-router-dom";
export default function UserTable({ users, onDelete }) {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <Link
                  className="btn btn-sm btn-outline-primary me-2"
                  to={`/users/${u._id}/edit`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onDelete(u._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
