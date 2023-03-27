import { About } from '../about/about';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { Projects } from '../projects/projects';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Footer />
        </>
    );
}

export default App;
