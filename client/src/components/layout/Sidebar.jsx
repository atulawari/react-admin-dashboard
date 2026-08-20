// import { NavLink } from "react-router-dom";
// const links = [
//   ["/dashboard", "Dashboard"],
//   ["/users", "Users"],
//   ["/users/new", "Add User"],
//   ["/profile", "Profile"],
//   ["/settings", "Settings"],
// ];
// export default function Sidebar() {
//   return (
//     <aside className="sidebar bg-white border-end p-3">
//       <b>Navigation</b>
//       {links.map(([to, label]) => (
//         <NavLink
//           key={to}
//           to={to}
//           className={({ isActive }) =>
//             `nav-link mt-2 ${isActive ? "active bg-primary text-white" : ""}`
//           }
//         >
//           {label}
//         </NavLink>
//       ))}
//     </aside>
//   );
// }

import { NavLink } from "react-router-dom";

const links = [
  ["/dashboard", "Dashboard"],
  ["/users", "Users"],
  ["/users/new", "Add User"],
  ["/profile", "Profile"],
  ["/settings", "Settings"],
];

export default function Sidebar() {
  return (
    <aside
      className="bg-white border-end p-4 d-flex flex-column"
      style={{
        width: "250px",
        minHeight: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      {/* Sidebar Header Brand (Optional but looks great) */}
      <div className="d-flex align-items-center mb-4 pb-2 border-bottom">
        <div
          className="bg-primary rounded-3 d-flex align-items-center justify-content-center me-2"
          style={{ width: "32px", height: "32px" }}
        >
          <span className="fw-bold text-white small">A</span>
        </div>
        <span className="fw-bold text-dark fs-5 tracking-tight">
          AdminPanel
        </span>
      </div>

      {/* Navigation Label */}
      <small
        className="text-muted text-uppercase fw-bold tracking-wider mb-2 d-block"
        style={{ fontSize: "0.75rem" }}
      >
        Navigation
      </small>

      {/* Nav Link List Loop */}
      <nav className="nav flex-column gap-1">
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `nav-link py-2 px-3 rounded-3 fw-medium transition-all ${
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "text-secondary hover-bg-light"
              }`
            }
            style={({ isActive }) => ({
              fontSize: "0.925rem",
              backgroundColor: isActive ? "" : "transparent",
              transition: "all 0.2s ease",
            })}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
