import { About } from '../about/about';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { Other } from '../other/other';
import { Projects } from '../projects/projects';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Projects />
            <Other />
            <Footer />
        </>
    );
}

export default App;
