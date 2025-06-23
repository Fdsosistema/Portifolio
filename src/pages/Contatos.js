
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Contatos() {
    return (
        <main>
            <Navbar></Navbar>
            <div class="contato">
                <ul>
                    <li><h1 class="tc">Formulario de Contato</h1></li>
                    <h4>Nome de usuário</h4>
                    <li class="caixa_texto"><label>Nome de Usuário:</label></li>
                    <h4>Seu Email</h4>
                    <li class="caixa_texto"><label>Email:</label></li>
                    <h4>Sua mensagem</h4>
                    <li class="caixa_texto_m"><label>Sua Mensagem:</label></li>
                </ul>
            </div>

            <Footer></Footer>

        </main >

    );
}

import 'bootstrap/dist/css/bootstrap.min.css';

