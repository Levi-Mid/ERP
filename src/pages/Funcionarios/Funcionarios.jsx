import "./Funcionarios.css";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../../services/supabaseClient";


function Funcionarios() {
    const [funcionarios, setFuncionario] = useState([])
    useEffect(() => {
        async function buscarDados() {
            const {data, error} = await supabase
                .from('colaboradores')
                .select('*')
                .eq('status','completo')
            if(error) console.log(error.message)
            else{
                setFuncionario(data)
            }
        }
        buscarDados()
    }, [])


    return (
        <div className="allCards-fun">
            {funcionarios.map(func => (
                <div className="cards-fun completos" key={func.id}>
                    <h3 className="nome">{func.nome}</h3>
                    <p className="cargo">{func.cargo}</p>
                    <p className="tel">{func.telefone}</p>
                    <p className="email">{func.email}</p>
                </div>
            ))}
        </div>
    )
}


export default Funcionarios;
