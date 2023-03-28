import { About } from '../about/about';
import { Contact } from '../contact/contact';
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
            <Contact />
            <Footer />
        </>
    );
}

export default App;
