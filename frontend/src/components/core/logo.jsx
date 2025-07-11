import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="logo">
      <Image src={"/CYBERZION.svg"} alt="CYBERZION" fill />
    </Link>
  );
}
