import "./Topbar.css";

function Topbar(){
    return(
        <header className="topbar">
            <div></div>

            <div className="busca-container">
                <svg className="icone-busca" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" className="input-busca" placeholder="Buscar colaborador, equipamento..." />
            </div>

            <button type="button" className="avatar-btn">
                <span className="avatar-inicial">P</span>
            </button>
        </header>
    )
}

export default Topbar;