import React from 'react'
import hero from './images/phone.svg'
import { useGlobalContext } from './context'

function Hero() {
    const {closeSubMenu}=useGlobalContext()
  return (
   <section className='hero'onMouseOver={closeSubMenu}>
    <div className='hero-center'>
        <article className='hero-info'>
            <h1>
            Payments infrastructure for the internet
            </h1>
            <p>Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
            <img src={hero} className='phone-img' alt='hero'/>
        </article>
    </div>
   </section>
  )
}

export default Hero
