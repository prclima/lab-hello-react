import Card from "./Card";
import Iron from "./assets/iron.png";
import Menu from "./assets/menu.png";
import Cardteste from "./Cardteste";
import Footer from "./footer";
import Foto from "./assets/chave.png";
import Foto2 from "./assets/telaCaneta.png";
import Foto3 from "./assets/telaEngrenagem.png";
import Foto4 from "./assets/telaHtml.png";


function App() {
  return (
    <>
    <Card img={Iron} img2={Menu} />
   <Cardteste h1="Say hello to ReactJS" p="You will learn how to use the most popular frontend library, and becoe a super 
   Ninja developer."/>
   <Footer img={Foto}  titulo="Declarative" texto="React makes it painless to create inractives UIs"/>
   <Footer img={Foto2} titulo="Components" texto="Build encapsulated componentsthat manage their state."/>
   <Footer img={Foto3}  titulo="Single-Way" texto="A set of immutable values are passed to the components."/>
   <Footer img={Foto4}  titulo="JSX" texto="Statically-typed, desiged to run on modern browsers."/>

   </>
  );
}

export default App;
