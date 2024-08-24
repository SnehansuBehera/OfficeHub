import ClientsTable from "./clientsTable";
import ProjectsTable from "./projectsTable";
import EmployeesTable from "./employeesTable";
import AddClient from "./addClient";
import AddProjects from "./addProjects";

const AdminDashboard = () => {
  return (
    <>
      <div className="container-div ">
        <AddClient />
        <AddProjects />
      </div>

      <EmployeesTable />
      <ClientsTable />
      <ProjectsTable />
    </>
  );
};

export default AdminDashboard;
