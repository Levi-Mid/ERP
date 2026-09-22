import "./NovoColaborador.css"
import { useState } from "react";
import { supabase } from "../../services/supabaseClient"
import { useEffect } from "react";

const colaboradorVazio = {
    nome: "",
    cargo: "",
    endereco: "",
    telefone: "",
    email: "",
    documento: ""
}

function NovoColaborador() {

    const [colaborador, setColaborador] = useState(colaboradorVazio)

    function limparDados() {
        setColaborador(colaboradorVazio)
    }
    function mudancaInput(e) {
        setColaborador({ ...colaborador, [e.target.name]: e.target.value })
    }
    const pessoas = Object.keys(colaborador).map(key => ({
        name: key,
        value: colaborador[key]
    }));

    async function salvarColaborador() {
        const { data, error } = await supabase
            .from('colaboradores')
            .insert([colaborador])
            .select()
        if (error) {
            alert(`Erro ao salvar colaborador: ${error.message}`);
        }
        else {
            alert('Colaborador salvo com sucesso!');
            setFunPendente([...funPendentes, data[0]])
            limparDados();
        }
    }

    const [funPendentes, setFunPendente] = useState([])
    useEffect(() => {
        async function buscarDados() {
            const { data, error } = await supabase
                .from('colaboradores')
                .select('*')
                .eq('status', 'pendente')
            if (error) console.log(error.message)
            else {
                setFunPendente(data)
            }
        }
        buscarDados()
    }, [])

    async function completarCadastro(id) {
        const { data, error } = await supabase
            .from('colaboradores')
            .update({ status: 'completo' })
            .eq('id', id)
        if (error) console.log(error.message)
        else {
            alert("Cadastro finalizado com sucesso!")
            setFunPendente(funPendentes.filter(pendente => pendente.id !== id))
        }
    }

    return (
        <>
            <div className="novo-colaborador">
                {pessoas.map(pessoa => (
                    <label key={pessoa.name}>
                        {pessoa.name}:
                        <input type="text" className="form-control" name={pessoa.name} value={pessoa.value} onChange={mudancaInput} />
                    </label>
                ))}
                <button type="button" onClick={salvarColaborador}>SALVAR</button>
            </div>
            <div className="allCards-fun">
                {funPendentes.map(pendente => (
                    <div className="cards-fun pendentes" key={pendente.id}>
                        <h3 className="nome">{pendente.nome}</h3>
                        <p className="cargo">{pendente.cargo}</p>
                        <p className="tel">{pendente.telefone}</p>
                        <p className="email">{pendente.email}</p>
                        <button type="button" onClick={() => completarCadastro(pendente.id)}>Finalizar Cadastro</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default NovoColaborador;