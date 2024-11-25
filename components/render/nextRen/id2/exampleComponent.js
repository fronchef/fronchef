export const exampleComponent =`
import './App.css';
import About from './components/About';

function App() {
  return (
    <div>
      <About
        heading="Welcome to Adventure World"
        description="Step into the most immersive adventure of your life."
        subDescription="Join players from around the globe in a unified economy of fun and challenges."
        imageSrc="img/about.webp"
      />

      <div className='flex justify-center items-center h-screen w-full bg-white'>
        <p className='text-center text-4xl text-black uppercase font-extrabold'> your more content goes here </p>
      </div>
    </div>
  );
}

export default App;
`;