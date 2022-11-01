import Image from "next/image";
import Link from "next/link";

const ddi = "55";
const ddd = "21";
const tel = "987654321";

export function WhatsAppButton() {
  return (
    <Link
      title="Botão do Whatsapp"
      href={`https://wa.me/${ddi}${ddd}${tel}`}
      target="_blank"
      className=""
    >
      <Image src="/whatsapp.png" alt="" fill />
    </Link>
  );
}
