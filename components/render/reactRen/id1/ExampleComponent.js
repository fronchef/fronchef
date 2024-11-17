export const ExampleComponent = `import './App.css';
import VideoCarousel from './components/Carousel';

function App() {
  return (
    <div>
    <section
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the highlights.</h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
            </p>
            <p className="link">
              Watch the event
            </p>
          </div>
        </div>
        <VideoCarousel />

      </div>
    </section>
    </div>
  );
}

export default App;
`;
