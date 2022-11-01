import Image from "next/image";
import Link from "next/link";
import { Portfolio } from "./Portfolio";
import { Text } from "./Text";
import { WhatsAppButton } from "./WhatsAppButton";

const ddi = "55";
const ddd = "21";
const tel = "987654321";

export function Footer() {
  return (
    <footer className="wrapper p-4 tablet:px-6 tablet:py-8">
      <div className="flex justify-center mt-10">
        <Portfolio />
        <Link
        className="relative w-10 ml-2"
      title="Whatsapp"
      href={`https://wa.me/${ddi}${ddd}${tel}`}
      target="_blank"
    >
      <Image src="/whatsapp.png" alt="" width={512} height={512} />
    </Link>
        
      </div>

      <hr className="my-6 border-gray-200 mob:mx-auto pc:my-8" />

      <Text className="flex justify-center">
        Made with ❤️ by
        <a href="https://www.linkedin.com/in/jbandrade/">João Andrade</a>
      </Text>
    </footer>
  );
}
