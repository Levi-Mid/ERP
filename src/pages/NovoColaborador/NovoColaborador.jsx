import "./NovoColaborador.css"
import { useState } from "react";
import {supabase} from "../../services/supabaseClient"

const colaboradorVazio={
    nome: "",
    cargo: "",
    endereco: "",
    telefone: "",
    email: "",
    documento:""
}

function NovoColaborador(){

    const [colaborador, setColaborador] = useState(colaboradorVazio)

    function limparDados(){
        setColaborador(colaboradorVazio)
    }
    function mudancaInput(e){
        setColaborador({...colaborador, [e.target.name]: e.target.value})
    }
    const pessoas = Object.keys(colaborador).map(key => ({
        name: key,
        value: colaborador[key]
    }));

    async function salvarColaborador(){
        const {data, error} = await supabase
        .from('colaboradores')
        .insert([colaborador])
        .select()
        if (error) {
            alert(`Erro ao salvar colaborador: ${error.message}`);
        }
        else{
            alert('Colaborador salvo com sucesso!');
            limparDados();
        }
    }

    return(
        <div className="novo-colaborador">
            {pessoas.map(pessoa =>(
                <label key={pessoa.name}>
                    {pessoa.name}:
                    <input type="text" className="form-control" name={pessoa.name} value={pessoa.value} onChange={mudancaInput} />
                </label>
            ))} 
            <button type="button" onClick={salvarColaborador}>SALVAR</button>
        </div>
    )
}

export default NovoColaborador;