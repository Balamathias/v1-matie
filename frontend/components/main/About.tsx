'use client'

import { AppWrap, MotionWrap } from '@/wrappers'
import { urlFor, client } from '@/client/client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import matieUrlFor from '@/utils/matieUrlFor';

const About = () => {
  const [abouts, setAbouts] = useState<any>([]);

  async function getAbouts() {
    const abouts = await client.fetch('*[_type == "abouts"]')
    setAbouts(abouts)
    console.log(abouts[0].imgUrl.asset._ref)
    return abouts
  }

  useEffect(() => {
    getAbouts()
  }, [])


  return (
    <section className='w-full flex flex-col gap-8 items-center py-10 px-4'>
      <h2 className="text-5xl font-medium text-center inline-block text-slate-50 break-words w-full">
        I Know that <span className='text-slate-400'>Good Design</span> <br />means  <span className='text-purple-500'>Good Business</span>
      </h2>

      <div className="flex flex-wrap w-full justify-center gap-4">
        {abouts.map((about: any, index: string) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="p-2 bg-transparent border border-slate-900 shadow-2xl object-cover w-80 md:w-96 backdrop-filter backdrop:blur-md flex flex-col justify-between gap-4 rounded-2xl m-4"
            key={about.title + index}
          >
            <div className="w-full h-[250px] flex items-center justify-center">
              <Image 
                src={matieUrlFor(about.imgUrl) || '/assets/pngegg3.png'} 
                alt={about.title}
                width={250}
                height={250}
                style={{height: 'auto'}}
                className='rounded-2xl object-cover w-full'
              />
            </div>
            <h2 className="text-xl font-bold text-purple-400 p-4">{about.title}</h2>
            <p className="text-slate-100 text-md p-4">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(About, ''),
  'about',
  'h-full h-min-screen z-20 relative',
);
