import Image from 'next/image';
import { type imgs } from '../PortfolioItem/PortfolioItem';
import styles from './EducationItem.module.css';

export type EducationItemProps = {
  children?: React.ReactNode;
  institution: string;
  description: string;
  technologies?: Array<imgs>;
  honors?: string;
  url?: string;
  projectTitle?: string;
  projectDescription?: Array<string>;
  integratedApis?: Array<imgs>;
};

const EducationItem = ({ institution, description, honors, technologies, url, projectTitle, projectDescription, integratedApis }: EducationItemProps) => {

  return (
    <div className="lg:border-2 border-light-blue rounded-lg flex flex-col flex-wrap pb-6 lg:p-4 lg:pl-0 space-y-6 text-cream text-lg w-full z-10">
      <div className="flex flex-col pl-0 lg:pl-4 space-y-2 w-full">
        <a href={ url } target="_blank" rel="noreferrer">
          <h3 className="font-bold text-2xl text-cream">{ institution }</h3>
        </a>
        <p>{ description }</p>
        { honors && <p>Honors: { honors }</p> }
        { technologies && (
          <>
            <p className="underline">Tech Stack</p>
            <ul className={`flex flex-row flex-wrap lg:flex-nowrap items-center justify-center self-center sm:space-y-4 md:space-y-0 lg:self-start w-[75%] lg:w-[33%] ${styles["technologies-item-buttons"]}`}>
              {technologies?.map((img) => {
                return (
                  <li key={ img.alt } className={`sm:max-w-[90px] md:max-w-full lg:min-w-[${img.width}px] duration-500 motion-safe:hover:scale-110`}>
                    <a href={ img.url }>
                      <Image src={ img.src } alt={ img.alt } width={ img.width } />
                    </a>
                  </li>
                )
              })}
            </ul>
          </>)
        }
      </div>
      { projectTitle && (
        <div className="pl-0 lg:pl-4 w-full lg:w-[62%]">
        <h4 className="font-bold italic text-cream text-xl">{ projectTitle }</h4>
          <ul>
            {projectDescription?.map((bullet, index) => {
              return (                
                <li key={ index } className='mb-4 mx-auto lg:mr-4'>
                  <p className="text-justify lg:text-left">{ bullet }</p>
                </li>
              )
            })}
          </ul>
          <p className="pb-4 underline">External APIs Integrated</p>
          <ul className={`flex flex-row flex-wrap lg:flex-nowrap items-center justify-center self-center lg:self-start sm:space-y-4 md:space-y-0 ${styles["technologies-item-buttons"]}`}>
            {integratedApis?.map((img) => {
              return (
                <li key={ img.alt } className={`sm:max-w-[90px] md:max-w-full lg:min-w-[${img.width}px] duration-500 motion-safe:hover:scale-110`}>
                  <a href={ img.url }>
                    <Image src={ img.src } alt={ img.alt } width={ img.width } />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>)
      }
    </div>
  )
};

export default EducationItem;
