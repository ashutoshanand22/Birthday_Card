import Navbar from './components/Navbar'
import You from './components/You'
import UsTogether from './components/UsTogether';
import Birthday from './components/Birthday';
import MessageForYou from './components/MessageForYou';
import BestMoments from './components/BestMoments';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <You />
        <UsTogether />
        <Birthday />
        <MessageForYou />
        <BestMoments />
        <Footer />
      </div>
      
    </>
  );
};

export default App;