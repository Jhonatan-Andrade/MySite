import Image from "next/image";

export function TechnologyItem({ src, name }: { src: string; name: string }) {
    return (
        <div className=" flex flex-col items-center justify-center gap-4">	
            <Image src={src} alt={name} width={30} height={30} className="lg:w-6 lg:h-6"/>
            <p>{name}</p>
        </div>
    );
}
                            
                