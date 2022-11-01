import Image from "next/image";
import Link from "next/link";

export function Portfolio(){
  return(
    <ul className="flex gap-3">
        <li className="relative w-10 h-10">
          <Link target="_blank" rel="noreferrer" href="">
            <Image src="/github-logo.png" alt="" width={512} height={512} />
          </Link>
        </li>

        <li className="relative w-10 h-10 ml-0.5">
          <Link target="_blank" rel="noreferrer" href="">
            <Image src="/linkedin-logo.png" alt="" width={512} height={512} />
          </Link>
        </li>

        <li className="relative w-10 h-10">
          <Link target="_blank" rel="noreferrer" href="">
            <Image src="/storybook-logo.png" alt="" width={512} height={512} />
          </Link>
        </li>
      </ul>
  )
}