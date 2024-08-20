import React from 'react'
import { projects } from '@/data'
import { FaLocationArrow } from 'react-icons/fa'
import { PinContainer } from './ui/Pin'
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
      {/* Header Section */}
      <div className='text-center mb-10 px-4'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold leading-tight'>
          A selection of Jessie&apos;s{' '}
          <span className='text-purple'>personal projects</span>
        </h1>
      </div>

      {/* Projects Section */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
           className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div  className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D"  }}
                >
                  <img src='/bg.png' alt='bgimg' className='object-cover w-full h-full' />
                </div>
                <img
                  src={item.img}
                  alt='cover'
                 className="z-10 absolute bottom-0"
                />
              </div>

              {/* Add a wrapper div for title and description */}
              <div className='text-center space-y-4'>
                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                  {item.title}
                </h1>

                <p
                  className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'
                  style={{
                    color: '#BEC1DD',
                    margin: '1vh 0',
                  }}
                >
                  {item.des}
                </p>
              </div>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt='icon' className='p-2' />
                    </div>
                  ))}
                </div>

                <div className='flex justify-center items-center'>
                  <Link href={item.link} passHref>
                    Check Live Site
                    <FaLocationArrow className='ms-3' color='#CBACF9' />
                  </Link>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects