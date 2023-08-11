import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import MenuAccount from './components/Layout/MenuAcc';
import MenuLeft from './components/Layout/MenuLeft';
import Slider from './components/Layout/Slider';
import { useLocation } from 'react-router-dom';
function App(props) {
  let path = useLocation();
  return (
    <>
      <Header />
      {path['pathname'] === '/' ? <Slider /> : ''}
      <section>
        <div className="container">
          <div className="row">
            {path['pathname'].includes('account') ? <MenuAccount /> : <MenuLeft />}
            {props.children}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
