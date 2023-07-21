import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import MenuLeft from './components/Layout/MenuLeft';
import Slider from './components/Layout/Slider';
import { useNavigate } from 'react-router-dom';
function App(props) {
  useNavigate();
  function renderSlider() {
    let path = window.location.pathname;
    if (path === '/' || path === '/blog/list') {
      return <Slider />;
    }
  }
  return (
    <>
      <Header />
      {renderSlider()}
      <section>
        <div className="container">
          <div className="row">
            <MenuLeft />
            {props.children}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
