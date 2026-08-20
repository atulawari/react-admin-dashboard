import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../services/userService";
import Loader from "../../components/common/Loader";
export default function ViewUser() {
  const { id } = useParams(),
    [user, setUser] = useState(null);
  useEffect(() => {
    getUser(id).then((r) => setUser(r.data.user));
  }, [id]);
  if (!user) return <Loader />;
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>User Details</h1>
        <Link className="btn btn-primary" to={`/users/${id}/edit`}>
          Edit
        </Link>
      </div>
      <div className="card border-0 shadow-sm p-4 mt-3">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.phone || "No phone"}</p>
        <span className="badge text-bg-secondary">{user.role}</span>
      </div>
    </div>
  );
}
