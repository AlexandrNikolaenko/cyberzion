import Image from "next/image"

export default function AccentPoint({children}) {
  return (
    <div className="flex flex-row flex-nowrap items-center p-2.5 gap-[17px] text-accent text-[18px]">
      <Image src={'/Subtract1.svg'} alt="sub" width={18} height={18}/>
      {children}
    </div>
  )
}

export function CardLabel({icon, children}) {
  return (
    <div className="flex flex-row flex-nowrap items-center gap-[17px] text-success text-[18px] font-[300]">
      <Image src={icon} alt="icon" width={26} height={26}/>
      {children}
    </div>
  )
}