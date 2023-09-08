
import Image from 'next/image';
import nyweekly from '../../public/images/ny-weekly.png';
import calipost from '../../public/images/calipost.png';
import vcunews from '../../public/images/vcu-news.png';
import Link from 'next/link';

const FeaturedIn = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-12 items-center justify-center py-12">
        <p className="font-extrabold opacity-80">FEATURED IN</p>
        <div>
          <Link
            href="https://nyweekly.com/business/how-tapped-ai-and-ilias-anwar-are-making-record-labels-more-fair/"
          >
            <Image
              src={nyweekly}
              alt="new york weekly logo"
              width={124}
            />
          </Link>
        </div>
        <div>
          <Link
            href="https://calipost.com/empowering-artists-tappedai-and-johannes-naylor-welcome-first-10-artists-to-ai-powered-record-label/"
          >
            <Image
              src={calipost}
              alt="calipost logo"
              width={124}
            />
          </Link>
        </div>
        <div>
          <Link
            href="https://news.vcu.edu/article/2023/07/starting-with-a-blog-during-freshman-year-vcu-alum-ilias-anwar-has-built-a-creative-agency"
          >
            <Image
              src={vcunews}
              alt="vcu news logo"
              width={124}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedIn;
