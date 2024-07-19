import styled from './HeroHome.module.css';

export default function HeroHome() {
  return (
    <div className={`${styled['hero-home']} relative`}>
      <div className={`${styled['heroe-home-gradient']} absolute bottom-0`}>
        <h1 className="w-full h-full text-5xl text-center font-bold text-[var(--grey-1000)]">
          <div className='w-min h-full m-auto flex flex-col justify-center px-4'>
            <p className='font-bold text-5xl w-min whitespace-nowrap text-[var(--grey-0)]'>Amor</p>
            <p className='ml-14 mt-3 font-bold text-5xl w-min whitespace-nowrap text-[var(--color-4)]'>identidad</p>
            <p className='ml-28 mt-3 font-bold text-5xl w-min whitespace-nowrap text-[var(--color-2)]'>y respeto</p>
          </div>
        </h1>
      </div>
    </div>
  )
}