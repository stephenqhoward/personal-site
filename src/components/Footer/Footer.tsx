import { type FC } from "react";
import Image from 'next/image';
import Link from 'next/link';
import GitHubLogo from '../../../public/img/github-icon.svg';

// type FooterProps = {};

const Footer: FC<unknown> = () => (
  <>
    <div className="footer">
      <ul className="flex flex-row justify-center items-center my-4 md:my-8 space-x-8">
        <a href='https://www.linkedin.com/in/stephenqhoward/' className="flex items-center bg-light-blue rounded-full">
          <li className="flex h-20 w-20 place-self-center">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.31" className="linkedin-logo h-12 w-12 mx-auto self-center">
              <path className="outer" d="M27.75,0H95.13a27.83,27.83,0,0,1,27.75,27.75V94.57a27.83,27.83,0,0,1-27.75,27.74H27.75A27.83,27.83,0,0,1,0,94.57V27.75A27.83,27.83,0,0,1,27.75,0Z" />
              <path className="inner" d="M49.19,47.41H64.72v8h.22c2.17-3.88,7.45-8,15.34-8,16.39,0,19.42,10.2,19.42,23.47V98.94H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72,6.21-9.72,12.65v25.4H49.19V47.41ZM40,31.79a8.42,8.42,0,1,1-8.42-8.42A8.43,8.43,0,0,1,40,31.79ZM23.18,47.41H40V98.94H23.18V47.41Z" />
            </svg>
          </li>
        </a>
        <a href='https://github.com/stephenqhoward' className="bg-light-blue rounded-full">
          <li className="flex text-center justify-items-center h-20 w-20">
            <Image alt="GitHub" src={ GitHubLogo } width={80} className="mx-auto self-center h-12 w-12"></Image>
          </li>
        </a>
        <Link href='/resume' className="bg-light-blue rounded-full">
          <li className="flex h-20 w-20">
            <p className="self-center mx-auto font-bold">Resume
            </p>
          </li>
        </Link>
      </ul>
    </div>
    <div className="flex justify-center">
      <p className="text-color-cream font-thin">&copy; 2022 - Stephen Howard</p>
    </div>
  </>
);

export default Footer;