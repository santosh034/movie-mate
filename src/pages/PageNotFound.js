import React from 'react'
import image from '../assets/images/pagenotfound.png'
import { Button } from '../components/Button'
import {Link} from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'
export const PageNotFound = (title) => {
  useTitle('Page Not Found');

  return (
    <main>
      <section className='flex flex-col items-center'>
        <div className='flex flex-col items-center'>
          <p className='text-7xl font-bold text-dark-gray-700 dark:text-white py-10 mx-auto'>404, Oops!</p>
          <div className='max-w-lg'>
            <img src={image} alt="Page Not Found" />
          </div>

        </div>
        <div>
          <Link to='/'>
            <Button>
              Back to Cinemate
            </Button>         
          </Link>

        </div>
      </section>
    </main>

  )
}
