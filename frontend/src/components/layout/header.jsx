'use client'

import Link from "next/link"
import { useState } from "react"
import Logo from "../core/logo";
import { SmallBorderButton } from "../ui/button";
import Image from "next/image";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [language, setLanguage] = useState('Русский');
  
  function handleContact() {
    return;
  }

  function handleChangeLanguage() {
    if (language == 'Русский') setLanguage('English');
    else setLanguage('Русский');
  }

  return (
    <header>
      <div className="wrapper">
        <Menu isOpen={isOpenMenu}/>
        <Logo />
        <nav>
          <Link href={'/#'}>Услуги</Link>
          <Link href={'/#'}>Проекты</Link>
          <Link href={'/#'}>О нас</Link>
          <Link href={'/#'}>Блог</Link>
          <Link href={'/#'}>Контакты</Link>
        </nav>
        <div>
          <SmallBorderButton onClick={handleContact}>Связаться</SmallBorderButton>
          <button className="languages">
            <Image src={'/languages.svg'} width={30} height={30} alt="lang" style={{color: 'inherit'}}/>
            <div>
              <span>Language</span>
              <span>{language}</span>
            </div>
          </button>
          <button className="relative w-[38px] h-[38px]">
            <Image src={'/menu.svg'} alt="menu" fill/>
          </button>
        </div>
      </div>
    </header>
  )
}

function Menu({isOpen}) {
  return (
    <>
    </>
  )
}