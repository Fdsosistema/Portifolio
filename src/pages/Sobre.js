import Navbar from "@/components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from "@/components/footer";

export default function aaa() {
  return (

    <main class="sobre">
      <Navbar></Navbar>

      <Container>
        <Row>
          <div class="tudo">
            <div class="texto">
              <div class="t">Sobre Mim</div >
              <div class="p">Comecei a mexer com código desde meus 17 anos, Programo em Javascript,
               Typescript, Python e busco continuar apredendo a programar em unity. Já fiz 3 projetos na unity.  </div>
            </div>
            <div class="lista">
              <ul>
                <li class="t2">Habilidades</li>
                <li class="p">- 5 anos de experiência </li>
                <li class="p">- Conhecimendo medio de unity</li>
                <li class="p">- Praticamento de Sofwares avançandos de TS, JS, PY</li>
                <li class="p">- Desenvolvedor de Backend</li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>

      <Footer></Footer>
    </main >

  )
}

