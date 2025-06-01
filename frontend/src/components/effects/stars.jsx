import Image from "next/image";

export function RadialStar({size, id}) {
  return (
    <Image className="star" width={size} id={id} height={size} alt="star" src={'/Radial-star.svg'}/>
  )
}

export function RhombusStar({size, id}) {
  return (
    <Image className="star" width={size} id={id} height={size} alt="star" src={'/Rhombus-star.svg'}/>
  )
}