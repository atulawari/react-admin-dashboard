// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getUsers } from "../../services/userService";
// import Loader from "../../components/common/Loader";
// export default function Dashboard() {
//   const [users, setUsers] = useState([]),
//     [loading, setLoading] = useState(true);
//   useEffect(() => {
//     getUsers()
//       .then((r) => setUsers(r.data.users || []))
//       .finally(() => setLoading(false));
//   }, []);
//   if (loading) return <Loader />;
//   return (
//     <div>
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div>
//           <h1>Dashboard</h1>
//           <p className="text-secondary">Admin overview and user statistics.</p>
//         </div>
//         <Link className="btn btn-primary" to="/users/new">
//           + Add User
//         </Link>
//       </div>
//       <div className="row g-3">
//         <div className="col-md-4">
//           <div className="card border-0 shadow-sm p-3">
//             <small>Total Users</small>
//             <div className="display-6">{users.length}</div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card border-0 shadow-sm p-3">
//             <small>Frontend</small>
//             <div className="h4">React + Redux</div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card border-0 shadow-sm p-3">
//             <small>Backend</small>
//             <div className="h4">Express + MongoDB</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../services/userService";
import Loader from "../../components/common/Loader";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((r) => setUsers(r.data.users || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div
      className="container-fluid py-4 px-md-5"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      {/* Header Row */}
      <div className="d-flex justify-content-between align-items-center mb-5 pb-2 border-bottom">
        <div>
          <h1
            className="fw-bold tracking-tight text-dark mb-1"
            style={{ fontSize: "2rem" }}
          >
            Dashboard
          </h1>
          <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
            Admin overview and system metrics.
          </p>
        </div>
        <Link
          className="btn btn-primary px-4 py-2 fw-semibold d-flex align-items-center gap-2 shadow-sm"
          to="/users/new"
          style={{
            borderRadius: "8px",
            fontSize: "0.9rem",
            transition: "all 0.2s",
          }}
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 10 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          Add User
        </Link>
      </div>

      {/* Grid Statistics Row */}
      <div className="row g-4">
        {/* Total Users Metric Card */}
        <div className="col-12 col-md-4">
          <div
            className="card h-100 border-0 shadow-sm p-4 text-white"
            style={{
              background: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)",
              borderRadius: "16px",
            }}
          >
            <small
              className="text-white-50 text-uppercase fw-bold tracking-wider mb-2 d-block"
              style={{ fontSize: "0.75rem" }}
            >
              Total Users
            </small>
            <div className="display-4 fw-bold">{users.length}</div>
          </div>
        </div>

        {/* Frontend Framework Status Card */}
        <div className="col-12 col-md-4">
          <div
            className="card h-100 border-0 shadow-sm p-4 bg-white"
            style={{ borderRadius: "16px", borderLeft: "5px solid #06b6d4" }}
          >
            <small
              className="text-muted text-uppercase fw-bold tracking-wider mb-2 d-block"
              style={{ fontSize: "0.75rem" }}
            >
              Frontend Stack
            </small>
            <div className="h4 fw-bold text-dark mb-1">React</div>
            <p className="text-muted mb-0 small">State Management: Redux</p>
          </div>
        </div>

        {/* Backend Stack Status Card */}
        <div className="col-12 col-md-4">
          <div
            className="card h-100 border-0 shadow-sm p-4 bg-white"
            style={{ borderRadius: "16px", borderLeft: "5px solid #10b981" }}
          >
            <small
              className="text-muted text-uppercase fw-bold tracking-wider mb-2 d-block"
              style={{ fontSize: "0.75rem" }}
            >
              Backend Infrastructure
            </small>
            <div className="h4 fw-bold text-dark mb-1">Express.js</div>
            <p className="text-muted mb-0 small">Database: MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
