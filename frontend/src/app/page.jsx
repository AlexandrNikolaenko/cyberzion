"use client";

import AccentPoint, { CardLabel } from "@/components/core/accent-point";
import {
  AccentAngleButton,
  AccentButton,
  BorderButton,
  MoveToButton,
} from "@/components/ui/button";
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

  function handleAllBlog() {
    return;
  }

  function handleDiscussProject() {
    return;
  }

  function handleReadMore() {
    return;
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
      <section id="why">
        <div className="wrapper">
          <div id="why-title">
            <AccentPoint>Почему мы</AccentPoint>
            <h2>Ключевые преимущества выбора нашей команды разработчиков</h2>
          </div>
          <div id="why-grid">
            <Card>
              <div className="fon"></div>
              <div className="card-body justify-end">
                <CardLabel icon={"/universal-icon.svg"}>
                  Универсальность
                </CardLabel>
                <h3>
                  Полный цикл разработки, <br /> от идеи до масштабирования
                </h3>
              </div>
            </Card>
            <div className="pt-[50px] discr max-w-[328px]">
              Проектирование, дизайн, frontend/backend. Вам не нужно искать
              отдельные команды — экономим ваше время и бюджет.
            </div>
            <Card>
              <div className="fon"></div>
              <div className="card-body justify-start">
                <CardLabel icon={"/soft-icon.svg"}>Гибкость</CardLabel>
                <h3>Гибкие решения под любые технологии</h3>
                <div className="discr h-full flex flex-col justify-end">
                  Блокчейн-интеграция и поддержка
                </div>
              </div>
            </Card>
            <div className="pt-[186px] discr max-w-[166px]">
              Единый подрядчик для всех IT-задач.
            </div>
            <Card>
              <div className="fon"></div>
              <div className="card-body justify-start">
                <CardLabel icon={"/result-icon.svg"}>
                  Ориентация на результат
                </CardLabel>
                <h3>Гибкие решения под любые технологии</h3>
                <div className="discr pt-[15px]">
                  Увеличиваем прибыль с помощью автоматизации рутинных
                  процессов, защит от взлома и интеграцию криптоплатежей
                </div>
              </div>
            </Card>
            <Card>
              <div className="fon"></div>
              <div className="card-body justify-start">
                <h3>Фиксированные сроки и стоимость без скрытых платежей.</h3>
                <CardLabel icon={"/trust-icon.svg"}>Доверие</CardLabel>
                <div className="sub-card"></div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section id="blog">
        <div className="wrapper">
          <div id="blog-title">
            <AccentPoint>Блог</AccentPoint>
            <h2>Здесь пишут разработчики</h2>
            <p>Честно о технологиях без маркетинговой воды</p>
          </div>
          <div id="blog-grid">
            <Card>
              <div className="blog-media">
                <Image alt="media" src={"/Blog1.png"} fill objectFit="cover" />
              </div>
              <div className="blog-body">
                <div className="date">
                  <div>Апрель, 2025</div>
                  <div>6 мин</div>
                </div>
                <div className="title">Какое-то описание IT сферы</div>
                <div className="desc">
                  Какое-то описание заголовка нужно написать и не забыть...
                </div>
                <MoveToButton onClick={handleReadMore}>Читать</MoveToButton>
              </div>
            </Card>
            <Card>
              <div className="blog-media">
                <Image alt="media" src={"/Blog2.png"} fill objectFit="cover" />
              </div>
              <div className="blog-body">
                <div className="date">
                  <div>Апрель, 2025</div>
                  <div>6 мин</div>
                </div>
                <div className="title">Какое-то описание IT сферы</div>
                <div className="desc">
                  Какое-то описание заголовка нужно написать и не забыть...
                </div>
                <MoveToButton onClick={handleReadMore}>Читать</MoveToButton>
              </div>
            </Card>
            <Card>
              <div className="blog-media">
                <Image alt="media" src={"/Blog3.png"} fill objectFit="cover" />
              </div>
              <div className="blog-body">
                <div className="date">
                  <div>Апрель, 2025</div>
                  <div>6 мин</div>
                </div>
                <div className="title">Какое-то описание IT сферы</div>
                <div className="desc">
                  Какое-то описание заголовка нужно написать и не забыть...
                </div>
                <MoveToButton onClick={handleReadMore}>Читать</MoveToButton>
              </div>
            </Card>
          </div>
          <div className="flex justify-center w-full">
            <AccentButton onClick={handleAllBlog}>Все статьи</AccentButton>
          </div>
        </div>
      </section>
      <section id="trigger">
        <div className="fon"></div>
        <div id="trigger-title">
          <h2>Создаем магию разработки</h2>
          <p>Расскажите нам о вашем проекте и мы дадим решение по реализации</p>
        </div>
        <AccentButton onClick={handleDiscussProject}>
          Обсудить проект
        </AccentButton>
      </section>
    </main>
  );
}
