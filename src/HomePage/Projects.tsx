import fruits from '../assets/fruits.jpg';
import car from '../assets/car.jpg';
import { MdArrowOutward } from "react-icons/md";
import './Projects.scss';


interface CardProps {
  img: any;
  content: string;
  devs: string[];
};


const Projects = () => {


  const Card = ({ img, content, devs }: CardProps) => {
    return (
      <div id="card" className='block'>
        <div className='relative overflow-hidden'>
          <figure className='relative bg-black rounded-3xl overflow-hidden'>
            <img src={img} className='w-full h-full rounded-3xl object-cover opacity-80' />
          </figure>
          <div className='absolute bottom-0 h-full w-full p-4 flex items-center justify-start text-white text-sm font-semibold sm:text-base md:text-xl xl:text-3xl xl:leading-10'>
            <p className='tracking-wide'>{content}</p>
          </div>
          <div className='arrow_container absolute right-0 bg-white p-3 md:p-5 xl:p-8'>
          <MdArrowOutward size={30}/>
          </div>
        </div>
        <div className='my-6'>
          <p className='mb-4 text-gray-400'>2023</p>
          <h3 className='tracking-wide text-2xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, reiciendis?
          </h3>
        </div>
        <div className='flex flex-wrap'>
          {devs.map((dev, index) => (
            <p key={index} className='card_tag'>{dev}</p>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='block mt-8 px-12'>
      <h2 className='text-5xl '>
      Mes projets
      </h2>

      <div className=' cards_container grid grid-cols-3 gap-x-5 mt-8 w-full mobile:grid-cols-1 custom:grid-cols-2'>
          <Card img={fruits} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, reiciendis?" devs={["react", "node", "sequelize", "express"]} />
          <Card img={car} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, reiciendis?" devs={["react", "node", "sequelize", "express"]} />
          <Card img={fruits} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, reiciendis?" devs={["react", "node", "sequelize", "express"]} />

        </div>

    </div>
  )

};

export default Projects;