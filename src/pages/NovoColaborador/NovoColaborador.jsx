import "./NovoColaborador.css"
import { useState } from "react";

function NovoColaborador(){

    const [colaborador, setColaborador] = useState({
        nome: "",
        cargo: "",
        endereco: "",
        telefone: "",
        email: "",
        documento:""
    })

    function mudancaInput(e){
        setColaborador({...colaborador, [e.target.name]: e.target.value})
    }
    const pessoas = Object.keys(colaborador).map(key => ({
        name: key,
        value: colaborador[key]
    }));

    return(
        <div className="novo-colaborador">
            {pessoas.map(pessoa =>(
                <label>
                    {pessoa.name}:
                    <input type="text" className="form-control" name={pessoa.name} value={pessoa.value} onChange={mudancaInput} />
                </label>
            ))} 
        </div>
    )
}

export default NovoColaborador;