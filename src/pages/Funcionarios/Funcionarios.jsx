import "./Funcionarios.css";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../../services/supabaseClient";


function Funcionarios(){
    const[funcionarios, setFuncionario] = useState([])
    useEffect = {
        async function buscarDados() {
            
        }
    }
    return(
        <div>
            <h1> Teste de Funcionários</h1>
        </div>
    )
}

export default Funcionarios;