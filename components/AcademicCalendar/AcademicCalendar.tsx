import Image from "next/image";

const calendar = [
  {
    id: 0,
    image: '/assets/image01.png',
    alt: 'Image 01',
    fecha: '14 de julio de 2024',
    title: 'Clases',
    description: 'Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet.'
  },
  {
    id: 1,
    image: '/assets/image02.png',
    alt: 'Image 02',
    fecha: 'Hoy',
    title: 'Día del Padre',
    description: 'Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet.'
  },
  {
    id: 2,
    image: '/assets/image03.png',
    alt: 'Image 03',
    fecha: '16 de julio de 2024',
    title: 'Feriado',
    description: 'Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet.'
  }
]

export default function AcademicCalendar() {
  return (  
    <div className="flex flex-nowrap justify-center gap-6 my-12">
      { calendar.map( ele => {
        return (
          <div className="w-96 rounded-2xl overflow-hidden">
            <div className="w-full h-56 relative">
              <Image src={ele.image} alt={ele.alt} fill></Image>          
            </div>
            <div className="bg-[var(--grey-1000)] p-4 flex flex-col gap-1">
              <p className="text-[var(--grey-0)] text-base">{ele.fecha}</p>
              <p className="text-[var(--grey-0)] text-2xl">{ele.title}</p>
              <p className="text-[var(--grey-0)] text-sm">{ele.description}</p>
            </div>
          </div>
        )
      }) }
    </div>
  );
}
