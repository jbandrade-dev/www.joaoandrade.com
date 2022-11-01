import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../components/Card";
import { Slide } from "../components/Slide";
import { Text } from "../components/Text";

const data = [
  {
    id: uuidv4(),
    title: "Reimont",
    strong: "Forte",
    src: "/site-reimont.png",
    alt: "",
    link: "#",
  },
  {
    id: uuidv4(),
    title: "ToDo List",
    strong: "Forte",
    src: "/site-todo.png",
    alt: "",
    link: "#",
  },
  {
    id: uuidv4(),
    title: "Blog",
    strong: "Forte",
    src: "/site-blog.png",
    alt: "",
    link: "#",
  },
  {
    id: uuidv4(),
    title: "Storybook",
    strong: "Forte",
    src: "/site-reimont.png",
    alt: "",
    link: "#",
  },
  {
    id: uuidv4(),
    title: "Blog",
    strong: "Forte",
    src: "/site-reimont.png",
    alt: "",
    link: "#",
  },
  {
    id: uuidv4(),
    title: "Backend",
    strong: "Forte",
    src: "/site-reimont.png",
    alt: "",
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="grid wrapper gap-5">
      <Text className="text-cyan-500 font-bold ">Projetos</Text>
      <ul className="grid grid-cols-2 gap-3">
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Card className="grid gap-4">
                <Link href={item.link} target="_blank" rel="noreferrer">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={400}
                    height={300}
                  />
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    aliquid voluptatum labore, maxime expedita dolor
                    exercitationem dolorem.
                  </Text>
                </Link>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
