// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logout } from "../../redux/slices/authSlice";
// export default function Navbar() {
//   const d = useDispatch(),
//     n = useNavigate();
//   return (
//     <nav className="navbar navbar-dark bg-dark px-3">
//       <span className="navbar-brand fw-bold">React Admin Dashboard</span>
//       <button
//         className="btn btn-outline-light btn-sm"
//         onClick={() => {
//           d(logout());
//           n("/login");
//         }}
//       >
//         Logout
//       </button>
//     </nav>
//   );
// }

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";

export default function Navbar() {
  const d = useDispatch();
  const n = useNavigate();

  return (
    <nav
      className="navbar navbar-light bg-white border-bottom px-4 py-3 sticky-top"
      style={{
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.02)",
        height: "70px",
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center p-0">
        {/* Left Side: Empty or context indicators (e.g., breadcrumbs / system notifications) */}
        <div className="d-flex align-items-center">
          {/* If you want to keep the title in the center/left workspace: */}
          <span
            className="text-muted fw-medium d-none d-md-inline"
            style={{ fontSize: "0.875rem" }}
          >
            Welcome back, Admin
          </span>
        </div>

        {/* Right Side: Quick Action Options & Profile Profile Control */}
        <div className="d-flex align-items-center gap-3">
          {/* Subtle User Quick Info Indicator */}
          <div className="d-flex align-items-center me-2 d-none d-sm-flex">
            <div
              className="bg-light rounded-circle d-flex align-items-center justify-content-center fw-bold text-primary shadow-sm"
              style={{ width: "36px", height: "36px", fontSize: "0.9rem" }}
            >
              AD
            </div>
          </div>

          {/* Cleaned Logout Button */}
          <button
            className="btn btn-outline-danger d-flex align-items-center gap-2 fw-medium transition-all"
            style={{
              borderRadius: "8px",
              fontSize: "0.85rem",
              padding: "7px 16px",
              transition: "all 0.2s ease",
            }}
            onClick={() => {
              d(logout());
              n("/login");
            }}
          >
            <svg
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-box-arrow-right"
            >
              <path
                fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
              />
              <path
                fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
