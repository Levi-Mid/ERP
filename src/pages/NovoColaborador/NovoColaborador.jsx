import "./NovoColaborador.css"

function NovoColaborador(){

    const [colaborador, setColaborador] = useState({
        nome: "",
        cargo: "",
        endereco: "",
        telefone: "",
        email: "",
        codumento:""
    })

    function mudancaInput(e){
        setColaborador({...colaborador, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <h1>Teste de Novo Colaborador</h1>
        </div>
    )
}

export default NovoColaborador;