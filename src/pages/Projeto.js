import Cartas from "@/components/cards";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Projeto() {
    return (
        <main>
            <Navbar></Navbar>
            <div class="t">Meus projetos</div>

            <Cartas></Cartas>
          
            <Footer></Footer>
        </main>

    );
}

import 'bootstrap/dist/css/bootstrap.min.css';

