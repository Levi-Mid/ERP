import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import Topbar from "../../components/Topbar/Topbar.jsx"

function Dashboard(){
    return(
        <>
        <div className="dashboard">
            <h1>Dashboard</h1>
        </div>
        <Sidebar/>
        <Topbar/>
        </>
    )
}
export default Dashboard