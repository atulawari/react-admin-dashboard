import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../../components/users/UserForm";
import Loader from "../../components/common/Loader";
import { getUser, updateUser } from "../../services/userService";
export default function EditUser() {
  const { id } = useParams(),
    n = useNavigate(),
    [user, setUser] = useState(null);
  useEffect(() => {
    getUser(id).then((r) => setUser(r.data.user));
  }, [id]);
  if (!user) return <Loader />;
  return (
    <div>
      <h1>Edit User</h1>
      <div className="card border-0 shadow-sm p-4 mt-3">
        <UserForm
          defaultValues={user}
          onSubmit={async (d) => {
            await updateUser(id, d);
            n("/users");
          }}
        />
      </div>
    </div>
  );
}
