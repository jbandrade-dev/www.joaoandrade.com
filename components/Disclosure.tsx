import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { CaretDown } from "phosphor-react";
import { Heading } from "./Heading";
import { Text } from "./Text";

interface MyDisclosureProps {
  content: {
    id: number;
    icon: string;
    title: string;
    text: string;
  };
}

export function MyDisclosure({ content }: MyDisclosureProps) {
  return (
    <section className="w-full">
      <div className="rounded bg-gray-800">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-expanded="false"
                aria-label="Abrir disclosure"
                className="flex justify-between button text-left"
              >
                <div className=" flex gap-2 items-center">
                  <Image
                    className="inline-flex w-6 gap-2 items-center"
                    src={content.icon}
                    alt=""
                    width={36}
                    height={36}
                  />

                  <Heading size="sm" className="text-black">
                    {content.title}
                  </Heading>
                </div>

                <CaretDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-black`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="px-6 py-4">
                <Text size="sm">{content.text}</Text>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </section>
  );
}
