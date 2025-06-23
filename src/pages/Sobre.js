import Navbar from "@/components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function aaa() {
  return (

    <main class="sobre">
      <Navbar></Navbar>

      <Container>
        <Row>
          <div class="tudo">
            <div class="texto">
              <div class="t">Sobre Mim</div >
              <div class="p">aaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            </div>
            <div class="lista">
              <ul>
                <li class="t2">Habilidades</li>
                <li class="p">Projeto</li>
                <li class="p">Sobre</li>
                <li class="p">Contatos</li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </main >

  )
}

