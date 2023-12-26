import Certification from '@components/certifications';
import Education from '@components/education';
import Experience from '@components/experience';
import Header from '@components/header';
import Hero from '@components/hero';
import Footer from '@components/footer';
import { useRef } from 'react';

function App() {
  const about = useRef<HTMLDivElement>(null);
  const experience = useRef<HTMLDivElement>(null);
  const education = useRef<HTMLDivElement>(null);
  const certification = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header aboutRef={about} experienceRef={experience} educationRef={education} certificationRef={certification}></Header>

      <Hero ref={about}></Hero>

      <Experience ref={experience}></Experience>

      <Education ref={education}></Education>

      <Certification ref={certification}></Certification>

      <Footer></Footer>
    </>
  );
}

export default App;
