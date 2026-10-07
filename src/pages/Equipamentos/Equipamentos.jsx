import "./Equipamentos.css";
import { useState } from "react"
import { supabase } from "../../services/supabaseClient"
import editar from "../../img/botao-editar.png"

const opcoes = {
    tipo: ["celular", "computador", "notebook", "tablet"],
    status: ["disponivel", "indisponivel", "manutencao"]
}

const equipamentoVazio = {
    tipo: "",
    nome: "",
    numSerie: "",
    codPulsus: "",
    codIpv: "",
    status: ""
}

function Equipamentos() {
    const [equipamento, setEquipamento] = useState(equipamentoVazio)

    function mudancaInput(e) {
        setEquipamento({ ...equipamento, [e.target.name]: e.target.value })
    }

    return (
        <div className="equipamentos">
            {Object.keys(equipamentoVazio).map(campo => (
                <div key={campo}>
                    <p>{campo}</p>
                    {opcoes[campo] ? (
                        opcoes[campo].map(opcao => (
                            <label key={opcao}>
                                <input type="radio" name={campo} value={opcao} checked={equipamento[campo] === opcao} onChange={mudancaInput} />
                                {opcao}
                            </label>
                        ))) : (
                        <input type="text" name={campo} value={equipamento[campo]} onChange={mudancaInput} />
                    )}
                </div>
            ))}
        </div>
    )
}

export default Equipamentos