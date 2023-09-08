import Link from 'next/link';
import Image from 'next/image';

import jayduuuh from '../../public/images/jayduuuh.png';

const SubscriptionPlans = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <div className='w-1/4'>
          <h3 className="text-4xl">
            Affordable Subscription Plans
          </h3>
          <p className='text-lg'>Say goodbye to financial stress. Our monthly subscription plans start at just $50, making it accessible for artists of all backgrounds. Get the support you need without breaking the bank.</p>
          <div className='h-8'></div>
          <Link
            href="/pricing"
            className="text-lg bg-white text-black font-extrabold rounded-full px-6 py-4 hover:scale-105 transform transition-all duration-200 ease-in-out"
          >see pricing</Link>
        </div>
        <div>
          <Image
            src={jayduuuh}
            alt="image of jayduhhh"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
