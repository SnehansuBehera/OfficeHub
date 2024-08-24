import { MdOutlineLogout } from "react-icons/md";

function AdminDashboardHeader() {
  return (
    <>
    <header className="header">
      <h1 className="title">Admin DashBoard</h1>
      <button className="logout-btn"> <MdOutlineLogout /> Logout</button>
    </header>
    </>
  );
}

export default AdminDashboardHeader;


