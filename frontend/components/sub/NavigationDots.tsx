import React from "react";

const NavigationDots = ({ active }: {active: string}): React.ReactNode => (
    <div className="bg-inherit z-30 hidden flex-col gap-3 text-slate-50 absolute top-1/2 left-0">
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="w-2 h-2 rounded-full bg-white cursor-pointer"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
  
  export default NavigationDots;