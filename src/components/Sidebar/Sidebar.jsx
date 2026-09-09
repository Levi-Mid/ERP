import "./Sidebar.css";
import logoImg from "../../img/mid.png"

function Sidebar({ activeItem, setActiveItem }) {

    const navItems = [
        { id: 1, label: "Home" },
        { id: 2, label: "Novo Colaborador" },
        { id: 3, label: "Funcionários" },
        { id: 4, label: "Equipamentos" }
    ]
    return (
        <aside className="sidebar">
            <div className="logo-container">
                <img src={logoImg} className="logo" alt="logo" />
            </div>
            <ul className="nav-list">
                {navItems.map(item => (
                    <li key={item.id} className={item.id === activeItem ? "active" : ""}>
                        <button className="btn btn-basic" onClick={() => setActiveItem(item.id)}>
                            {item.label}
                        </button>
                    </li>))}
            </ul>
        </aside>
    )
}

export default Sidebar;