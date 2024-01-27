// styles
import styles from './Home.module.css';

import { Link } from 'react-router-dom';

// images
import mulher from '../../assets/mulher-trabalhando.jpg';

const Home = () => {
  return (
    <>
      <div className={styles.banner}>
        <h1>
          ICL<span>ea</span>ning
        </h1>
        <p>
          Comprometidos em elevar a qualidade de vida, nossa empresa de limpeza
          residencial oferece serviços excepcionais, transformando cada lar em
          um ambiente imaculado e acolhedor. Vamos além da limpeza,
          dedicando-nos ao cuidado minucioso de cada detalhe, para que você
          possa desfrutar de um espaço verdadeiramente encantador e livre de
          preocupações.
        </p>
        <div className={styles.buttons}>
          <Link to={'/customers'}>Clientes</Link>
          <Link to={'/register'}>Registrar</Link>
        </div>
      </div>
      <div>
        <div className={styles.sobre}>
          <div className={styles.info}>
            <h1 className="title">Sobre nós</h1>
            <p className="subtitle">
              Conheça sobre os serviços que disponibilizamos para o seu lar
            </p>
            <p className={styles.text}>
              Bem-vindo à iCleaning, uma empresa que vai além dos serviços
              tradicionais de limpeza residencial. Somos movidos pela paixão em
              oferecer uma experiência excepcional aos nossos clientes, e nosso
              diferencial é evidenciado por uma inovação singular: o
              desenvolvimento de um sistema inteligente de rotas. Na iCleaning,
              reconhecemos que o tempo é valioso. Por isso, investimos em
              tecnologia avançada para criar um algoritmo exclusivo que otimiza
              as rotas de nossa equipe de limpeza com base na localização
              geográfica de cada cliente. Esse sistema inteligente não apenas
              reduz os deslocamentos, mas também garante uma cobertura
              eficiente, resultando em um serviço mais rápido e preciso.
              Acreditamos que a limpeza de uma residência vai além da remoção de
              poeira; trata-se de proporcionar praticidade, conforto e qualidade
              de vida. Com nosso sistema de rotas inteligentes, oferecemos não
              apenas uma limpeza eficaz, mas também a certeza de que cada
              cliente recebe um tratamento personalizado, adaptado às suas
              necessidades e exigências específicas. Ao escolher a iCleaning,
              você está optando por uma abordagem revolucionária para a
              manutenção do seu lar. Estamos comprometidos com a inovação
              constante e com a entrega de resultados que superam as
              expectativas. Junte-se a nós nessa jornada rumo a residências mais
              limpas, organizadas e, acima de tudo, eficientes. Na iCleaning,
              acreditamos que a limpeza não é apenas um serviço; é um cuidado
              dedicado a criar ambientes que refletem o bem-estar e a felicidade
              de nossos clientes. Descubra a diferença iCleaning e experimente
              um padrão superior de limpeza residencial.
            </p>
          </div>
          <div className={styles.image}>
            <img src={mulher} alt="teste" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
