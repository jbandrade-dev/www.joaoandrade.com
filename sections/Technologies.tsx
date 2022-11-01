import { v4 as uuidv4 } from "uuid";
import { Slide } from "../components/Slide";
import { Text } from "../components/Text";

const data = [
  {
    id: uuidv4(),
    title: "Next.js",
    strong: "Forte",
    src: "/next-logo.jpg",
    alt: "O melhor framework para trabalhar com React",
    link: "https://nextjs.org/docs/getting-started",
    weight: 600,
    height: 600,
  },
  {
    id: uuidv4(),
    title: "React",
    strong: "Forte",
    src: "/react-logo.png",
    alt: "React é uma linguagens criada pela meta, uma dasmais utilizadas e a minha favorita",
    link: "https://pt-br.reactjs.org/docs/getting-started.html",
    weight: 600,
    height: 600,
  },

  {
    id: uuidv4(),
    title: "Vite.js",
    strong: "Forte",
    src: "/vite-logo.png",
    alt: "O segundo melhor framework react",
    link: "https://vitejs.dev/guide/",
    weight: 600,
    height: 600,
  },
  {
    id: uuidv4(),
    title: "Node.js",
    strong: "Forte",
    src: "/node-logo.png",
    alt: "Node.Js tecnologia utilizada para o desenvolvimento de backends e APIs",
    link: "https://nodejs.org/en/docs",
    weight: 600,
    height: 600,
  },
  {
    id: uuidv4(),
    title: "Javascript",
    strong: "Forte",
    src: "/javascript-logo.png",
    alt: "",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    weight: 600,
    height: 600,
  },
  {
    id: uuidv4(),
    title: "Typescript",
    strong: "Forte",
    src: "/typescript-logo.png",
    alt: "",
    link: "https://www.typescriptlang.org/",
    weight: 600,
    height: 600,
  },
  {
    id: uuidv4(),
    title: "HTML 5",
    strong: "Forte",
    src: "/html5-logo.png",
    alt: "Linguagem de marcação utilizada para o desenvolvimento de páginas web",
    link: "https://www.w3schools.com/html/",
    weight: 600,
    height: 600,
  },
  {
    id: uuidv4(),
    title: "CSS 3",
    strong: "Forte",
    src: "/css-logo.png",
    alt: "Logo CSS 3 tecnologia usada para estilização de páginas web",
    link: "https://www.w3schools.com/css/",
    weight: 600,
    height: 600,
  },
];

export function Technologies() {
  return (
    <section id="technologies" className="grid wrapper gap-5 mt-10">
      <Text className="text-cyan-500 font-bold ">Tecnologias</Text>
      <Slide data={data} />
    </section>
  );
}
