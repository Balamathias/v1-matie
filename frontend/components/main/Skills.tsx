'use client'

import { motion } from 'framer-motion';
import Image from 'next/image'

import { Tooltip as ReactTooltip } from 'react-tooltip'

import { AppWrap, MotionWrap } from '@/wrappers';
import { urlFor, client } from '@/client/client';
import { useEffect, useState } from 'react';
import matieUrlFor from '@/utils/matieUrlFor';

const Skills = (): React.ReactElement => {
  const [skills, setSkills] = useState<any>([]);
  const [experiences, setExperiences] = useState([]);

  async function getSkills() {
    const skills = await client.fetch('*[_type == "skills"]')
    setSkills(skills)
    return skills
  }

  async function getExperiences() {
    const experiences = await client.fetch('*[_type == "experiences"]')
    setExperiences(experiences)
    return experiences
  }

  useEffect(() => {
    getSkills()

    getExperiences()

  }, []);

  if (skills.length === 0) return <p>loading...</p>

  return (
    <>
      <div className="flex flex-col gap-3 items-center justify-center mx-auto pb-7 mb-6">
        <h2 className="font-bold text-slate-400 text-5xl w-full text-center py-6">Skills & Experiences</h2>
        <p className="text-lg text-slate-50">
          I am proficient in the following modern skills:
        </p>
      </div>
      <div className="flex gap-8 flex-col md:flex-row">
        <motion.div className="flex justify-start gap-5 flex-wrap items-center flex-1">
          {skills.map((skill: any) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center w-[200px] h-[200px] gap-2 shadow-lg backdrop:blur-md"
              key={skill?.name}
            >
              <div className="flex items-center justify-center  w-[120px] h-[120px] rounded-full"
                style={{backgroundColor: skill?.bgColor}}
              >
                <Image 
                    src={matieUrlFor(skill.icon) || ''}
                    width={80}
                    height={80}
                    alt={skill.name}
                    className='rounded-full object-cover flex flex-col items-center justify-center backdrop:fill-transparent' 
                />
              </div>
              <p className="text-slate-100 mt-3 font-md text-base p-4 capitalize">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex-1">
          {experiences.map((experience: any) => (
            <motion.div
              className="flex items-start gap-4 p-4 text-slate-50"
              key={experience.year}
            >
              <div className="mr-2">
                <p className="font-bold text-xl text-fuchsia-600">{experience.year}</p>
              </div>
              <motion.div className="flex flex-col gap-3">
                {experience.works.map((work: any) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="z-20"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="font-bold text-lg">{work.name}</h4>
                      <p className="text-md">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      arrowColor="#fff"
                      className="px-2 rounded-md border border-slate-950 shadow-lg"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'min-h-screen flex flex-col justify-center gap-7',
);