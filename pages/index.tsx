import { Container } from "../components/Container";
import { Contact } from "../sections/Contact";
import { Projects } from "../sections/Projects";
import { Steps } from "../sections/Steps";
import { Technologies } from "../sections/Technologies";

export default function Home() {
  return (
    <Container>
   
      <Projects />
      <Technologies />
      <Steps />
      <Contact />
    </Container>
  );
}
