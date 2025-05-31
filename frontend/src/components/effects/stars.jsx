import Image from "next/image";

export function RadialStar({size}) {
  return (
    <Image width={size} height={size} alt="star" src={'/Radial-star.svg'}/>
  )
}

export function RhombusStar({size}) {
  return (
    <Image width={size} height={size} alt="star" src={'/Rhombus-star.svg'}/>
  )
}