import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1 p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
