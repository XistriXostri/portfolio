import { About } from '../about/about';
import { Career } from '../career/career';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { Other } from '../other/other';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Career />
            <Projects />
            <Other />
            <Footer />
        </>
    );
}

export default App;
