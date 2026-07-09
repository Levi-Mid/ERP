import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

function Home(){
    return(
        <div className="home">
            <Header/>
            <main>
                <section className="hero">
                </section >
                <section className="sobre">
                </section>
                <section className="funcionalidades">
                </section>
                <section className="tecnologias">
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Home