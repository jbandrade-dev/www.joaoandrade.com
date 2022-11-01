import { MyDisclosure } from "../components/Disclosure";

import { Text } from "../components/Text";

export function Steps() {
  const steps = [
    {
      id: 1,
      icon: "/number-circle-one.svg",
      title: "Briefing",
      text: "1",
    },
    {
      id: 2,
      icon: "/number-circle-two.svg",
      title: "Levantamento",
      text: "2",
    },
    {
      id: 3,
      icon: "/number-circle-three.svg",
      title: "Desenvolvimento",
      text: "3",
    },
    {
      id: 4,
      icon: "/number-circle-four.svg",
      title: "Entrega",
      text: "4",
    },
  ];

  return (
    <section id="steps" className="wrapper">
      <Text className="text-cyan-500 font-bold">Como nasce um projeto</Text>

      <ul className="grid gap-2 mt-4">
        {steps.map((step) => {
          return <MyDisclosure key={step.id} content={step} />;
        })}
      </ul>
    </section>
  );
}
