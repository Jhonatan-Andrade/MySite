
import './styles.css';

import reactjs from '../../assets/reactjs.png'
import reactNative from '../../assets/react-native.png'
import nodejs from '../../assets/nodejs.png'

function Tecnologia() {
  return (
    <div className="tecnologia">
      <header>
        <div className="title">
          <p>services</p>
          <h1>Tecnologia</h1>
        </div>
      </header>
      <section className="listTec">
        <div className="tec">
          <div className="img">
            <img width={100} height={100} src={reactjs}/>
          </div>
          <div className="text">
            <div className="h1">
              <h1>{'Reactjs'}</h1>
            </div>
            <div className="p">
              <p>{'Html, Css, Javascript'}</p>
            </div>
          </div>
        </div>
        <div className="tec">
          <div className="img">
            <img width={100} height={100} src={reactNative}/>
          </div>
          <div className="text">
            <div className="h1">
              <h1>{'React Native'}</h1>
            </div>
            <div className="p">
              <p>{'Styled Components, conhecimento em hooks e context api e Realmdb '}</p>
            </div>
          </div>
        </div>
        <div className="tec">
          <div className="img">
            <img width={100} height={100} src={nodejs}/>
          </div>
          <div className="text">
            <div className="h1">
              <h1>{'Nodejs'}</h1>
            </div>
            <div className="p">
              <p>{'Express, Autenticação JWT, Mongodb e Postgresql'}</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Tecnologia;




//