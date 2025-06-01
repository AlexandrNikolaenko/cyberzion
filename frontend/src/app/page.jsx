"use client";

import AccentPoint, { CardLabel } from "@/components/core/accent-point";
import { RadialStar, RhombusStar } from "@/components/effects/stars";
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
        <div className="absolute top-0 overflow-x-clip max-w-screen">
          <div className="relative w-full">
            <Image src={'/main-fon.png'} alt="fon" width={1645.42} height={677.55}/>
          </div>
        </div>
        <div className="light rotate-[41.31deg] h-[290.29px] w-[871.27px] top-[138px] left-[-160px]">
          <div>
            <Image src={'/light.png'} fill alt="light"/>
          </div>
        </div>
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
            <Image
              src={"/Company1-gray.svg"}
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
            <Image
              src={"/Company1-gray.svg"}
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
            <Image
              src={"/Company1-gray.svg"}
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
            <Image
              src={"/Company1-gray.svg"}
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
            <Image
              src={"/Company1-gray.svg"}
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
            <Image
              src={"/Company1-gray.svg"}
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
            <Image
              src={"/Company1-gray.svg"}
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
            <Image
              src={"/Company1-gray.svg"}
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
            <Image
              src={"/Company1-gray.svg"}
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
            <Image
              src={"/Company1-gray.svg"}
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
            <Image
              src={"/Company1-gray.svg"}
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
            <Image
              src={"/Company1-gray.svg"}
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
            <Image
              src={"/Company1-gray.svg"}
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
            <Image
              src={"/Company1-gray.svg"}
              alt="company"
              width={127}
              height={43}
            />
          </li>
        </ul>
      </section>
      <section id="services" className="max-w-screen overflow-clip relative">
        <div className="w-[398.65px] h-[458.54px] absolute top-[230px] right-[-194px] rotate-[-23.11deg]">
          <div className="relative w-full h-full">
            <Image src={'/light-ellips.png'} alt="fon" fill objectFit="cover"/>
          </div>
        </div>
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
              <div className="services-image p-0 w-[467.1px] absolute right-[27px] bottom-[37.35px]">
                <div className="relative w-full aspect-[467.1/376.69]">
                  <Image alt="fon" src={'/fon-services.svg'} fill/>
                </div>
              </div>
              <div className="services-info-card">
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
      <section id="why" className="relative">
        <div className="light rotate-[-31.04deg] top-[845px] left-[-223px] w-[723.89px] h-[441.19px]">
          <div>
            <Image src={'/light2.png'} fill alt="light"/>
          </div>
        </div>
        <div className="wrapper">
          <div id="why-title">
            <AccentPoint>Почему мы</AccentPoint>
            <h2>Ключевые преимущества выбора нашей команды разработчиков</h2>
          </div>
          <div id="why-grid">
            <Card>
              <div className="absolute top-[-40px] left-[-134px]">
                <div className="w-[692px] h-[438px]">
                  <Image src={'/why-fon-1.svg'} fill alt="fon"/>
                </div>
              </div>
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
              <RadialStar id={'why2star'} size={30}/>
            </div>
            <Card>
              <div className="absolute top-[160px] left-[74px]">
                <div className="w-[208px] h-[222px]">
                  <Image src={'/why-fon-2.svg'} fill alt="fon"/>
                </div>
              </div>
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
              <RhombusStar id={'why1star'} size={12.16}/>
              <RhombusStar id={'why3star'} size={5.33} />
            </div>
            <Card>
              <div className="absolute top-[223px] left-[0]">
                <div className="w-[374.5px] h-[308px]">
                  <Image src={'/why-fon-3.svg'} fill alt="fon"/>
                </div>
              </div>
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
              <div className="absolute top-[170px] left-[-10.5px]">
                <div className="w-[390px] h-[254px]">
                  <Image src={'/why-fon-4.svg'} fill alt="fon"/>
                </div>
              </div>
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
        <div className="fon">
          <RadialStar id={'trigger-1'} size={1}/>
          <RadialStar id={'trigger-2'} size={3}/>
          <RhombusStar id={'trigger-3'} size={5.33}/>
          <RhombusStar id={'trigger-4'} size={7.86}/>
          <RhombusStar id={'trigger-5'} size={7.86}/>
          <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
            <polygon />
          </svg>
        </div>
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
