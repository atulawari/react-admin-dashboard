import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../../components/users/UserForm";
import { createUser } from "../../services/userService";
export default function AddUser() {
  const n = useNavigate(),
    [loading, setLoading] = useState(false);
  const submit = async (data) => {
    setLoading(true);
    try {
      await createUser(data);
      n("/users");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Add User</h1>
      <div className="card border-0 shadow-sm p-4 mt-3">
        <UserForm onSubmit={submit} loading={loading} />
      </div>
    </div>
  );
}
