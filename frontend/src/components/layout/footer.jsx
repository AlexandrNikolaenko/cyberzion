"use client";

import Link from "next/link";
import Logo from "../core/logo";
import Image from "next/image";
import { BorderButton } from "../ui/button";

export default function Footer() {
  function handleAddNews() {
    return;
  }

  return (
    <footer>
      <div className="wrapper">
        <div id="base-footer-info">
          <Logo />
          <div id="base-footer-info-contact">
            <span>Пополните свой почтовый ящик</span>
            <ul>
              <li>
                <Link href={"/#"}>
                  <Image
                    src={"/telegram.svg"}
                    width={24}
                    height={24}
                    alt="telegram"
                  />
                </Link>
              </li>
              <li>
                <Link href={"/#"}>
                  <Image
                    src={"/whatsapp.svg"}
                    width={24}
                    height={24}
                    alt="whatsapp"
                  />
                </Link>
              </li>
              <li>
                <Link href={"/#"}>
                  <Image
                    src={"/instagram.svg"}
                    width={24}
                    height={24}
                    alt="instagram"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div id="mailing-list">
            <span>Пополните свой почтовый ящик</span>
            <p>
              Подпишитесь на нашу новостную рассылку и будьте в курсе всех
              событий
            </p>
            <BorderButton onClick={handleAddNews}>Подписаться</BorderButton>
          </div>
        </div>
        <div id="footer-services" className="footer-col">
          <span>Услуги</span>
          <ul>
            <li>
              <Link href={"/#"}>Веб разработка</Link>
            </li>
            <li>
              <Link href={"/#"}>Разработка WEB3 проектов</Link>
            </li>
            <li>
              <Link href={"/#"}>Разработка WEB3 проектов</Link>
            </li>
            <li>
              <Link href={"/#"}>Боты и скркипты автоматизации</Link>
            </li>
            <li>
              <Link href={"/#"}>Выпуск токена и выпуск NFT</Link>
            </li>
            <li>
              <Link href={"/#"}>Разработка CRM систем</Link>
            </li>
          </ul>
        </div>
        <div id="footer-company" className="footer-col">
          <span>Компании</span>
          <ul>
            <li>
              <Link href={"/#"}>О нас</Link>
            </li>
            <li>
              <Link href={"/#"}>Карьера</Link>
            </li>
          </ul>
        </div>
        <div id="footer-contacts" className="footer-col">
          <span>Услуги</span>
          <ul>
            <li>
              <Link href={"/#"}>Pochta@cyberzion.com</Link>
            </li>
            <li>
              <Link href={"/#"}>Telegram</Link>
            </li>
            <li>
              <Link href={"/#"}>+7 932 000 31 31</Link>
            </li>
          </ul>
        </div>
        <div id="lang-footer">
          <div>
            <span>Language</span> Русский
          </div>
          <div className="min-h-full min-w-[1px] bg-[#919191]"></div>
          <Link href={"/#"}>Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
