
import './styles.css';

import birthday from '../../assets/icons/birthday.png'
import whatsapp from '../../assets/icons/whatsapp.png'
import gmaildark from '../../assets/icons/gmaildark.png'
import mapPoint from '../../assets/icons/map-point.png'
import studies from '../../assets/icons/studies.png'

import curriculo from '../../doc/jhonatan.pdf'

function About() {
  return (
    <div>
      <div className="about">
        <section className="text-box">
        <div className="title-box">
          <h1>Sobre</h1>
        </div>
        <p>Nascido em 09/12/2000 na cidade de São Pedro do Ivaí PR . Aos onze anos minha família se mudou para cidade de Curitiba, e logo após a mudança eu entrei no curso de música Projeto Vida e Arte(pva).</p>
        <p>Com dezessete anos conseguiu entrar como estagiário na escola de música Espaço Vida e Música(evm) da Primeira Igreja Batista de Curitiba, após o término do meu contrato em janeiro de 2020 eu decidi intensificar meus estudos de programação. Já com conhecimento básico de Html Css e JavaScript . comecei a estudar desenvolvimento mobile com React Native e desenvolvimento de api com Node.js</p>
      </section>
        <section className="data">
        <ul>
          <li className="item">
            <img width={30} height={30} src={birthday}/>
            <p>Aniversário : 09/12/2000</p>
          </li>
          <li className="item">
            <img width={30} height={30} src={whatsapp}/>
            <p>Telefone :+55 (41) 9 9696-7647</p>
          </li>
          <li className="item">
            <img width={30} height={30} src={gmaildark}/>
            <p>Gmail : jhonatanjaq@gmail.com</p>
          </li>
          <li className="item">
            <img width={30} height={30} src={mapPoint}/>
            <p>Endereço :  Campo Largo - PR, 83609-140 </p>
          </li>
          <li className="item">
            <img width={30} height={30} src={studies}/>
            <p>Formação : encino medio completo</p>
          </li>
          <li className="download">  
              <a href={curriculo} download>Download do currículo</a>
          </li>
        </ul>
      </section>
      </div>
    </div>
  );
}

export default About;
