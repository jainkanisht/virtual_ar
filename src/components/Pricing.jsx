import React from 'react';

const Pricing = () => {
  const pricingPlans = [
    {
      price: "$0/month",
      features: ["Private board sharing", "5GB of storage", "Web analytics", "Private Mode"],
    },
    {
      price: "$19/month",
      features: ["Unlimited boards", "50GB of storage", "Advanced analytics", "Team collaboration"],
    },
    {
      price: "$49/month",
      features: ["All features", "Unlimited storage", "Premium support", "AI-powered insights"],
    },
  ];

  return (
    <div className='mt-20 p-6'>
      <h2 className='text-3xl lg:text-5xl text-center my-8 tracking-wider'>Pricing</h2>

      {/* Cards Container */}
      <div className='flex flex-wrap justify-center gap-8'>
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className='w-72 border rounded-lg flex flex-col text-center p-6 bg-gray-800 text-white shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
            {/* Plan Price */}
            <h2 className='text-4xl mb-4 font-semibold'>{plan.price}</h2>

            {/* Features List */}
            <div className='space-y-2 flex-1'>
              {plan.features.map((feature, idx) => (
                <p key={idx} className='text-neutral-300'>• {feature}</p>
              ))}
            </div>

            {/* Subscribe Button */}
            <a
              href="#subscribe"
              className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md w-32 mx-auto mt-6 text-white text-center font-medium hover:from-orange-600 hover:to-orange-900 transition-colors duration-300'
            >
              Subscribe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;