
import './App.css';
import Bubbles from './Bubbles';
import Hero from './Hero.js';
import Rewards from './Rewards';
import Roadmap from './Roadmap';
import Wargames from './Wargames';
import Footer from './Footer';
function App() {

  // window.addEventListener('scroll', () => {
  //   document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  // }, false);
  return (
    <>
      <Bubbles />
      <Hero />
      <div className='colorsec'>
        
        <div className='glass titlebox'>
          <img src="./images/WLUG_black.png" alt="logo" />
          <div>
            <h1>Linux Diary 4.0</h1>
            <h2>#Explore The Linux Realm</h2>
          </div>
        </div>
        <Roadmap />
        <Wargames />
        <Rewards />
      </div>
      <Footer />
    </>
  );
}

export default App;
