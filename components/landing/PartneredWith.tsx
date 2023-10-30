
import Link from 'next/link';
import Image from 'next/image';

export default function PartneredWith() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-8'>
        <div className="uppercase text-center font-bold opacity-80">
        IN PARTNERSHIP WITH
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
          <Link
            href="https://www.deathrowofficial.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src='/images/drr_logo.png'
              width={100}
              height={100}
              alt='Death row records logo'
            />
          </Link>
          <Link
            href="https://www.instagram.com/blankkanvaz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src='/images/bcm_logo.png'
              width={100}
              height={100}
              alt='Black canvaz logo'
            />
          </Link>
          <Link
            href="https://www.instagram.com/playmakrsent/"
          >
            <Image
              src='/images/pe_logo.png'
              width={100}
              height={100}
              alt='Playmakrs entertainment logo'
              className='rounded-full'
            />
          </Link>
          <Link
            href="https://tccentertainment.com"
          >
            <Image
              src='/images/tcc_logo.png'
              width={100}
              height={100}
              alt='TCC entertainment logo'
              className='rounded-full'
            />
          </Link>
        </div>
      </div>
    </>
  );
}