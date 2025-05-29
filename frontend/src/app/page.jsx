"use client";

import AccentPoint, { CardLabel } from "@/components/core/accent-point";
import { AccentAngleButton, BorderButton } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: 0,
    icon: "/code_icon.svg",
    title: "Веб разработка",
    description: "",
  },
  {
    id: 1,
    icon: "/code_icon.svg",
    title: "Разработка CRM систем",
    description: "",
  },
  {
    id: 2,
    icon: "/bot.svg",
    title: "Боты и скркипты автоматизации",
    description: "Автоматизируем рутинную работу для вашего бизнеса",
  },
  {
    id: 3,
    icon: "/blockchain.svg",
    title: "Разработка WEB3 проектов",
    description: "",
  },
  {
    id: 4,
    icon: "/doc.svg",
    title: "Смарт-контракты",
    description: "",
  },
  {
    id: 5,
    icon: "/nft.svg",
    title: "Выпуск токена и выпуск NFT",
    description: "",
  },
];

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  function handleChooseService(id) {
    setActiveService(id);
  }

  return (
    <main>
      <section id="intro">
        <div className="wrapper">
          <AccentPoint>IT-решения для бизнеса</AccentPoint>
          <h1 className="max-w-[552px] w-full font-[600] text-[80px] text-white leading-none mt-5 mb-[30px]">
            Полный цикл разработки
          </h1>
          <div className="max-w-[456px] leading-[150%] text-base text-[#C3C3C3] mb-[90px]">
            Превращаем сложные процессы в простые решения — автоматизация,
            интеграции и цифровизация под ключ!
          </div>
          <div className="flex gap-5">
            <AccentAngleButton onClick={() => {}}>
              Обсудить проект
            </AccentAngleButton>
            <BorderButton onClick={() => {}}>Смотреть кейсы</BorderButton>
          </div>
        </div>
      </section>
      <section id="scroll-line">
        <ul>
          <li>
            <Image
              src={"/Company1.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
          <li>
            <Image
              src={"/Company1.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
          <li>
            <Image
              src={"/Company1.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
          <li>
            <Image
              src={"/Company1.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
          <li>
            <Image
              src={"/Company1.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
          <li>
            <Image
              src={"/Company1.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
          <li>
            <Image
              src={"/Company1.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
          <li>
            <Image
              src={"/Company1.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
          <li>
            <Image
              src={"/Company1.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
          <li>
            <Image
              src={"/Company1.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
          <li>
            <Image
              src={"/Company1.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
          <li>
            <Image
              src={"/Company1.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
          <li>
            <Image
              src={"/Company1.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
          <li>
            <Image
              src={"/Company1.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
        </ul>
      </section>
      <section id="services">
        <div className="wrapper">
          <div id="title">
            <AccentPoint>Наши услуги</AccentPoint>
            <h2>
              Создаём решения, которые приносят прибыль и решают бизнес-задачи
            </h2>
          </div>
          <div id="services-info">
            <ul>
              {services.map((elem) => (
                <li
                  key={elem.id}
                  onClick={() => handleChooseService(elem.id)}
                  className={
                    elem.id == activeService
                      ? "enable-service"
                      : "disable-service"
                  }
                >
                  <Image src={elem.icon} width={46} height={46} alt="icon" />
                  <div>
                    <h5>{elem.title}</h5>
                    {elem.id == activeService && <p>{elem.description}</p>}
                  </div>
                  <Image
                    src={"/arrow-button.svg"}
                    width={36}
                    height={36}
                    alt="arrow"
                    className={`${elem.id != activeService && "opacity-0"}`}
                  />
                </li>
              ))}
            </ul>
            <Card>
              <div>
                <CardLabel icon={"/code_xs.svg"}>Веб-разработка</CardLabel>
                <h3>
                  Создаем как простые <br />
                  так и сложные <br />
                  веб-приложение и сайты
                  <br />
                </h3>
                <div className="w-full">
                  <Link
                    href={"/#"}
                    className="flex w-fit gap-[13px] items-center bg-accent rounded-full py-[10.5px] px-[18px] text-white"
                  >
                    Подробнее
                    <Image
                      src={"/angle-arrow.svg"}
                      width={20}
                      height={20}
                      alt="arrow"
                    />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
