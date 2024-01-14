import { ReactElement, useState } from 'react';
import profile from '../assets/Myself.png';
import { IoPersonSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";


interface contentButtonProps {
  contentTxt: string;
  icon: ReactElement;
};

const WhoAmI = () => {

  const [content, setContent] = useState<string>('profile')

  const ContentButton = ({ contentTxt, icon }: contentButtonProps) => (
    <button
      onClick={(() => { setContent(contentTxt) })}
      className='rounded-full bg-blue-600 px-4 py-2 text-white mr-2 hover:bg-blue-900'
    >
      {icon}
    </button>
  )

  return (

    <div className='block mt-8 px-4'>
      <h2 className='text-4xl lg:text-5xl pb-4'>
        Qui suis-je ?
      </h2>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center'>
          <img src={profile} className='w-3/4' />
        </div>
        <div className='my-2 py-2 border-b-blue-600 border-solid border-b-2 flex flex-row'>
          <ContentButton contentTxt='profile' icon={<IoPersonSharp />} />
          <ContentButton contentTxt='study' icon={<PiStudentFill />} />
          <ContentButton contentTxt='work' icon={<MdWork />} />
          <ContentButton contentTxt='talk' icon={<IoChatbubbleEllipsesOutline />} />
        </div>
        <div className='pb-2 border-b-blue-600 border-solid border-b-2'>
          {content === 'profile' && (
            <>
              <ul>
                <li><span className='font-semibold'>Nom :</span> Maxime Huynh</li>
                <li><span className='font-semibold'>Âge :</span> 30</li>
                <li><span className='font-semibold'>Adresse :</span> Caen</li>
              </ul>
              <ul>
                <li><span className='font-semibold'>Tél :</span> 06.28.76.89.22</li>
                <li><span className='font-semibold'>E-mail :</span> huynh.maxime@gmail.com</li>
                <li className='font-semibold'>Permis B</li>
              </ul>
            </>
          )}
          {content === 'study' && (
            <>
              <ul>
                <li className='mb-2 p-2 bg-violet-200'>
                  <span className='font-semibold'>En cours</span>
                  <br/>
                  Concepteur Développeur de Solutions Digitales (Bac+3)
                </li>
                <li className='mb-2 p-2'>
                  <span className='font-semibold'>2023</span>
                  <br/>
                  Devéloppeur Web et Web Mobile (bac+2)
                </li>
                <li className='mb-2 p-2 bg-violet-200'>
                  <span className='font-semibold'>2019</span>
                  <br/>
                  LP Conception et Commercialisation de Produits Touristiques
                </li>
                <li className='mb-2 p-2'>
                  <span className='font-semibold'>2016</span>
                  <br/>
                  DUT Techniques de Commercialisation
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>

  )
}
export default WhoAmI;