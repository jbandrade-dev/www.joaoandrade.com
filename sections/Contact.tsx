import { FormEvent, useState } from "react";
import axios from "axios";
import { Envelope, Phone, User } from "phosphor-react";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";

export function Contact() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "jbandrade.dev@gmail.com",
      password: "12345678",
    });

    setIsUserSignedIn(true);
  }

  return (
    <section className="wrapper mt-10">
      <Text className="text-cyan-500 font-bold">Vamos trabalhar juntos!?</Text>
      <div className="grid gap-6 items-center pc:grid-cols-2 tablet:grid-cols-1 mob:grid-cols-1 mt-4">
        <img className="rounded overflow-hidden" src="/devdog.jpg" alt="" />

        <form onSubmit={handleSignIn} className="flex flex-col gap-2 w-full">
          {isUserSignedIn && <Text>Login realizado!</Text>}

          <label htmlFor="name">
            <TextInput.Root>
              <TextInput.Icon>
                <User />
              </TextInput.Icon>

              <TextInput.Input type="text" id="name" placeholder="Nome" />
            </TextInput.Root>
          </label>

          <label htmlFor="email">
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>

              <TextInput.Input type="email" id="email" placeholder="Email" />
            </TextInput.Root>
          </label>

          <label htmlFor="telephone">
            <TextInput.Root>
              <TextInput.Icon>
                <Phone />
              </TextInput.Icon>

              <TextInput.Tel />
            </TextInput.Root>
          </label>

          <textarea
            className="flex items-center h-20 pt-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300; placeholder:text-xs "
            placeholder="Me conte um pouco sobre o seu projeto!"
            name=""
            id=""
          />
          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </section>
  );
}
