import React from 'react';
import bodyEnvironment from '@/assets/body-environment.jpg';
import bodyMind from '@/assets/body-mind.jpg';
import bodyExecutive from '@/assets/body-executive.jpg';

const BodyText = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-extrabold mb-6" style={{ color: '#e76f51' }}>
          Why Your School Needs More Than Classrooms
        </h2>
        <p className="text-lg max-w-3xl mx-auto" style={{ color: '#454545' }}>
          85% of brain development happens before age 6. The right environment isn’t a luxury, it’s the foundation for lifelong learning.
        </p>

        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="w-[400px] mx-auto">
              <img src={bodyEnvironment} alt="Child playing with wooden blocks" className="w-[400px] h-[400px] object-cover mb-6" />
              <h3 className="text-[25px] font-medium text-black">The Teacher As an Environment</h3>
              <p className="text-[20px] font-light mt-2">Core skills linked to resilience and leadership.</p>
            </div>
            <div className="w-[400px] mx-auto">
              <img src={bodyMind} alt="Illustration of a mind with butterflies" className="w-[400px] h-[400px] object-cover mb-6" />
              <h3 className="text-[25px] font-medium text-black">Multiple Brain Pathways</h3>
              <p className="text-[20px] font-light mt-2">Core skills linked to resilience and leadership.</p>
            </div>
            <div className="w-[400px] mx-auto">
              <img src={bodyExecutive} alt="Family riding a bicycle" className="w-[400px] h-[400px] object-cover mb-6" />
              <h3 className="text-[25px] font-medium text-black">Play = Executive Function</h3>
              <p className="text-[20px] font-light mt-2">Core skills linked to resilience and leadership.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyText;
