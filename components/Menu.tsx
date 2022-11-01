import Link from "next/link";
import { Text } from "./Text";

export const menu = [
  { name: "O que eu faço", href: "/#o-que-eu-faco" },
  { name: "Como nasce um projeto", href: "/#como-nasce" },
  { name: "Vamos trabalhar juntos?", href: "/#vamos-trabalhar-juntos" },
];

export function Menu() {
  return (
    <menu className="mob:hidden pc:flex justify-center gap-3 uppercase">
      <ul className="flex-1 inline-flex gap-8">
        {menu.map((item) => {
          return (
            <li key={item.name}>
              <Link href={item.href}>
                <Text size="sm" className="itemMenu">{item.name}</Text>
              </Link>
            </li>
          );
        })}
      </ul>
    </menu>
  );
}
