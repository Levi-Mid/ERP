import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import Topbar from "../../components/Topbar/Topbar.jsx"
import { useState } from "react";
import Inicio from "../Inicio/Inicio.jsx"
import Funcionarios from "../Funcionarios/Funcionarios.jsx"
import Equipamentos from "../Equipamentos/Equipamentos.jsx"
import NovoColaborador from "../NovoColaborador/NovoColaborador.jsx"


function Dashboard(){

    function renderContent(){
        switch(activeItem){
            case 1: return <Inicio/>
            case 2: return <NovoColaborador/>
            case 3: return <Funcionarios/>
            case 4: return <Equipamentos/>
            default: return <Inicio/>
        }
    }
    
    const[activeItem, setActiveItem] = useState(1)
    return(
        
        <>
        <div className="dashboard">
            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
            <main className ="content-area">
                <Topbar/>
                {renderContent()}
            </main>
        </div>
        </>
    )
}
export default Dashboard