import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../../services/userService";
import UserTable from "../../components/users/UserTable";
import Loader from "../../components/common/Loader";
export default function UserList() {
  const [users, setUsers] = useState([]),
    [search, setSearch] = useState(""),
    [loading, setLoading] = useState(true);
  useEffect(() => {
    getUsers()
      .then((r) => setUsers(r.data.users || []))
      .finally(() => setLoading(false));
  }, []);
  const filtered = users.filter((u) =>
    `${u.name} ${u.email} ${u.role}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  const remove = async (id) => {
    if (!confirm("Delete this user?")) return;
    await deleteUser(id);
    setUsers(users.filter((u) => u._id !== id));
  };
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Users</h1>
        <Link className="btn btn-primary " to="/users/new">
          + Add User
        </Link>
      </div>

      <div className="card border-0 shadow-sm p-3">
        <input
          className="form-control mb-3"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {loading ? (
          <Loader />
        ) : (
          <UserTable users={filtered} onDelete={remove} />
        )}
      </div>
    </div>
  );
}
