import React from 'react'
import Image from 'next/image'

const Background = () => {
  return (
    <div className='background'>

        <header>

            <Image src='/images/fitstarklogo.png' alt='' width='150' height='50' />

            <div className='navlinks'>

              <div>
                <Image src='/images/facebook.png' alt='' width='30' height='50' />
                <Image src='/images/x.png' alt='' width='30' height='50' />
                <Image src='/images/instagram.png' alt='' width='30' height='50' />
                <Image src='/images/linkedin.png' alt='' width='30' height='50' />
              </div>

              <p>Connect with Us</p>

            </div>
        </header>

    </div>
  )
}

export {Background}
