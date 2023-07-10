import React from 'react'

import Link from 'next/link'

const Header = () => {
  const handleClick = () => {
    console.log('hola')
  }

  return (
    <header className='w-full'>
      <section className='flex w-[90%] py-6 bg-white text-black mx-auto justify-around'>
        <Link href={'/'}>AgroRedes SRL</Link>

        <ul className='flex gap-16'>
          <li className='hover:scale-105'>
            <a href='/nosotros'>Nosotros</a>
          </li>
          <li className='hover:scale-105'>
            <a href='/servicios'>Servicios</a>
          </li>
          <li className='hover:scale-105'>
            <a href='/trabajos'>Trabajos</a>
          </li>
        </ul>

        <div>
          <button onClick={handleClick()}>Contacto</button>
        </div>
      </section>
    </header>
  )
}

export default Header
