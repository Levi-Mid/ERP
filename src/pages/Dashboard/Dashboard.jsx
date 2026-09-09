import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import Topbar from "../../components/Topbar/Topbar.jsx"
import { useState } from "react";

function Dashboard(){
    const[activeItem, setActiveItem] = useState(1)
    return(
        
        <>
        <div className="dashboard">
            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
            <main className ="content-area">
                <Topbar/>
            </main>
        </div>
        </>
    )
}
export default Dashboard