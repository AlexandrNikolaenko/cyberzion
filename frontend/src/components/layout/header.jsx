"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "../core/logo";
import { SmallBorderButton } from "../ui/button";
import Image from "next/image";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [language, setLanguage] = useState("Русский");

  function handleOpenMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  function handleContact() {
    return;
  }

  function handleChangeLanguage() {
    if (language == "Русский") setLanguage("English");
    else setLanguage("Русский");
  }

  return (
    <>
      <div className="fixed top-0 z-[49] w-full">
        <div id="wrapper-menu" className="wrapper">
          <Menu isOpen={isOpenMenu} />
        </div>
      </div>
      <header>
        <div className="wrapper">
          <Logo />
          <nav id="header-nav">
            <Link href={"/#"}>Услуги</Link>
            <Link href={"/#"}>Проекты</Link>
            <Link href={"/#"}>О нас</Link>
            <Link href={"/#"}>Блог</Link>
            <Link href={"/#"}>Контакты</Link>
          </nav>
          <div id="header-actions">
            <SmallBorderButton onClick={handleContact}>
              Связаться
            </SmallBorderButton>
            <button className="languages" onClick={handleChangeLanguage}>
              <div className="realtive w-[30px] h-[30px]">
                <div className="absolute">
                  <Image
                    src={"/languages.svg"}
                    width={30}
                    height={30}
                    alt="lang"
                    id="header-lang-icon"
                  />
                </div>
                <div className="absolute">
                  <Image
                    src={"/languages-active.svg"}
                    width={30}
                    height={30}
                    alt="lang"
                    id="header-lang-active-icon"
                  />
                </div>
              </div>
              <div>
                <span>Language</span>
                <span>{language}</span>
              </div>
            </button>
            <button
              className="relative w-[38px] h-[38px]"
              onClick={handleOpenMenu}
            >
              <Image src={"/menu.svg"} alt="menu" fill />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

function Menu({ isOpen }) {
  return (
    <div id="menu" className={`${isOpen && "show"}`}>
      <nav id="menu-nav">
        <button onClick={() => {}}>
          <Image alt="icon" width={32} height={32} src={"/code_icon.svg"} />
          <div>
            <span>Веб разработка</span>
            <p>Профессиональная веб-разработка под ключ</p>
          </div>
        </button>
        <button onClick={() => {}}>
          <Image alt="icon" width={32} height={32} src={"/bot.svg"} />
          <div>
            <span>Боты и скркипты автоматизации</span>
            <p>Работайте эффективнее с помощью наших систем</p>
          </div>
        </button>
        <button onClick={() => {}}>
          <Image alt="icon" width={32} height={32} src={"/blockchain.svg"} />
          <div>
            <span>Разработка WEB3 проектов</span>
            <p>Запускайте dApps и интегрируйте проекты в блокчейн</p>
          </div>
        </button>
        <button onClick={() => {}}>
          <Image alt="icon" width={32} height={32} src={"/nft.svg"} />
          <div>
            <span>Выпуск токена и выпуск NFT</span>
            <p>Запустите свой токен или NFT-коллекцию</p>
          </div>
        </button>
        <button onClick={() => {}}>
          <Image alt="icon" width={32} height={32} src={"/doc.svg"} />
          <div>
            <span>Смарт-контракты</span>
            <p>Исключите посредников, внедрите смарт-контракты</p>
          </div>
        </button>
        <button onClick={() => {}}>
          <Image alt="icon" width={32} height={32} src={"/code_icon.svg"} />
          <div>
            <span>Разработка CRM систем</span>
            <p>Улучшите работу с клиентами с помощью CRM-систем</p>
          </div>
        </button>
      </nav>
      <div className="label">
        <div className="bg-[#2F3951]">
          <p className="text-[#90ABED]">
            Присоеденяйтесь к лучшей команде в web3
          </p>
          <Link href={"/#"} className="text-white">
            Смотреть вакансии
            <Image
              src={"/white-right-arrow.svg"}
              width={12.28}
              height={14.33}
              alt="go"
            />
          </Link>
        </div>
        <div className="bg-[#C7C7C7]">
          <p className="text-[#525353]">Статья. Какое-то описание IT сферы</p>
          <Link href={"/#"} className="text-[#111111]">
            Читать статью
            <Image
              src={"/black-right-arrow.svg"}
              width={12.28}
              height={14.33}
              alt="go"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
