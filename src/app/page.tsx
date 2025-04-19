import { TechnologyItem } from "@/components/technologyItem";
import { technologyList } from "@/data/technologylist";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <section className=" flex flex-col items-center justify-center lg:flex-row  lg:h-screen lg:w-screen">
        <div className="  w-full flex flex-col items-center justify-center md:w-3/4 lg:w-5/12 ">
            <Image src="./avatar.svg" alt="Avatar" width={200} height={200} className="lg:w-72 lg:h-72"  />
            <h1 className="font-bold text-2xl">Jhonatan Andrade</h1>
            <p className="text-slate-600 ">jhonatanjaq@gmail.com</p>
            <ul className=" flex flex-row gap-8 py-8">
                <li key={"github"} className=" hover:bg-slate-900  rounded-lg p-2">
                    <Link  href="https://github.com/Jhonatan-andrade" target="_blank">
                    <Image src="./github.svg" alt="github" width={36} height={36} className="lg:w-6 lg:h-6" />
                    </Link>
                </li>
                <li  key={"linkedin"} className=" hover:bg-slate-900  rounded-lg p-2">
                    <Link  href="https://www.linkedin.com/in/jhonatan-andrade-9116241ab/" target="_blank">
                    <Image src="./linkedin.svg" alt="linkedin"width={36} height={36} className="lg:w-6 lg:h-6" />
                    </Link>
                </li>
            </ul>
        
        </div>
        <div className="px-8   md:w-3/4 lg:px-32 lg:w-7/12"> 
            <div className="">
                <h1 className="text-xl font-bold py-2 lg:text-2xl">Olá, Sou um desenvolvedor Back-End</h1>
                <p className="lg:text-lg">Apaixonado por tecnologia e inovação. Atualmente, estou focado em aprimorar minhas habilidades em Back-End  além de explorar as possibilidades do Next.js para criar interfaces de usuário. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer como desenvolvedor.</p>
            </div>
            <ul className=" grid grid-cols-4 md:grid-cols-6  gap-4 py-8 ">
                {technologyList.map((item) => (<TechnologyItem key={item.id} src={item.src} name={item.name} />))}
            </ul>
        </div>   
      </section>
  );

}
