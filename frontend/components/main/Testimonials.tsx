'use client'

import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '@/wrappers';
import Image from 'next/image';
import matieUrlFor from '@/utils/matieUrlFor';
import { client } from '@/client/client';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<any>([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  console.log(brands)
  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data: any) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data: any) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
    <h2 className="text-5xl text-slate-50 text-center py-5">Testimonials</h2>
      {testimonials.length && (
        <>
          <div className="flex flex-col md:flex-row gap-3 w-3/4 text-slate-50 max-w-4xl  mx-auto justify-center p-4 bg-slate-900 shadow-lg rounded-2xl">
            <Image 
                src={matieUrlFor(testimonials[currentIndex]?.imageurl) || ''} 
                alt={testimonials[currentIndex]?.name}
                width={320}
                height={400}
                className='object-cover w-full h-[600px] rounded-2xl flex-[0.75]' 
            />
            <div className="flex flex-col gap-2 p-4 flex-[0.25]">
              <p className="text-md">{testimonials[currentIndex]?.feedback}</p>
              <div>
                <h4 className="text-lg font-bold">{testimonials[currentIndex]?.name}</h4>
                <h5 className="text-md">{testimonials[currentIndex]?.company}</h5>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 z-40 max-w-3xl mx-auto py-4">
            <div className="cursor-pointer text-slate-50 text-lg hover:bg-slate-800 p-4 rounded border border-slate-900" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="cursor-pointer text-slate-50 text-xl p-4 hover:bg-slate-800 rounded border border-slate-900" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* <div className="flex gap-4 flex-wrap items-center bg-slate-800 p-4 justify-center">
        {brands.map((brand: any) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <Image 
                src={matieUrlFor(brand.imgUrl) || ''} 
                alt={brand.name} 
                width={80}
                height={80}
                className='rounded-full object-cover'
            />
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'flex flex-col'),
  'testimonial',
  'min-h-screen',
);