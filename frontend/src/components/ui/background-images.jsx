import Image from "next/image";

export default function BackImage({image, size, position}) {
  const className = `absolute top-[${position.top}px] left-[${position.left}px] w-[${size.x}px] h-[${size.y}px]`
  return (
    <div className={className}>
      <div className={`relative w-full h-full`}>
        <Image src={image} fill alt="img"/>
      </div>
    </div>
  )
}