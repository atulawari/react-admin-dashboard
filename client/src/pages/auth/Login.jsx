import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setCredentials } from "../../redux/slices/authSlice";
import { loginUser } from "../../services/authService";
export default function Login() {
  const [email, setEmail] = useState("admin@example.com"),
    [password, setPassword] = useState("Admin@123"),
    [error, setError] = useState("");
  const d = useDispatch(),
    n = useNavigate(),
    loc = useLocation();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });
      d(setCredentials(data));
      n(loc.state?.from || "/dashboard");
    } catch (e) {
      setError(e.response?.data?.message || "Login failed");
    }
  };
  return (
    <main className="login-page">
      <div className="card login-card border-0 shadow-lg p-4">
        <h1 className="h3">Admin Login</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={submit}>
          <input
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="form-control mb-4"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="btn btn-primary w-100">Login</button>
        </form>
        <small className="text-secondary mt-3">
          Default: admin@example.com / Admin@123
        </small>
      </div>
    </main>
  );
}
