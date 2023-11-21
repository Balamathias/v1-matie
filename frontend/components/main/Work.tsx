'use client'

import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import AppWrap from '@/wrappers/AppWrap';
import MotionWrap from '@/wrappers/MotionWrap';
import matieUrlFor from '@/utils/matieUrlFor';
import Image from 'next/image';
import { client } from '@/client/client';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState<any>({ y: 0, opacity: 1 });

  const [overlay, setOverlay] = useState(false)

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data: any) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item: any) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work: any) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <section className='flex flex-col flex-1 gap-4 z-30'>
      <h2 className="text-5xl font-bold text-slate-50 text-center justify-center py-5">My Creative <span className='text-fuchsia-500'>Portfolio</span> Section</h2>

      <div className="flex justify-center items-center flex-wrap text-slate-50 gap-3 py-4">
        {['Web App', 'Django', 'Python', 'Mobile App', 'ReactJs', 'All'].map((item: any, index: number) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`text-md cursor-pointer border border-slate-800 hover:bg-slate-700 p-5 rounded-xl shadow-md ${activeFilter === item ? 'bg-slate-600' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex w-full mx-auto flex-1 gap-4 flex-wrap justify-center"
      >
        {filterWork.map((work: any, index: number) => (
          <div className="p-4 w-80 md:w-96 border border-slate-900 rounded-2xl" key={index}>
            <div
              className="w-full relative cursor-pointer"
              onMouseOver={() => setOverlay(true)}
              onMouseOut={() => setOverlay(false)}
            >
              <Image 
                src={matieUrlFor(work?.imgUrl) || ''} 
                alt={work.name} 
                width={250}
                height={320}
                className='object-cover w-full h-[320px] rounded-2xl'
            />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className={`${overlay ? "block" : "hidden"} bg-gradient-to-r from-slate-900 via-purple-800 to-fuchsia-600 cursor-pointer items-center absolute top-0 right-0 left-0 w-full h-[320px] rounded-2xl py-3`}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-1/2 right-1/4 cursor-pointer text-slate-50 text-xl"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-1/2 left-1/4 cursor-pointer text-slate-50 text-xl"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="flex flex-col gap-3 text-slate-50 py-4">
              <h4 className="font-bold">{work.title}</h4>
              <p className="text-md" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="rounded-lg shadow-md">
                <p className="text-md text-fuchsia-500 capitalize">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Work, 'flex flex-col flex-1'),
  'work',
  'bg-inherit',
);