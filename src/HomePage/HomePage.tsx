import React, { useEffect, useRef } from 'react';
import node from '../assets/framework/nodejs.svg';
import express from '../assets/framework/expressjs.svg';
import sequelize from '../assets/framework/sequelize.svg';
import js from '../assets/framework/javascript.svg';
import reactjs from '../assets/framework/reactjs.svg';
import ts from '../assets/framework/typescript.svg';
import postgre from '../assets/framework/postgresql.svg';
import docker from '../assets/framework/docker.svg';
import git from '../assets/framework/gitlab.svg';
import css from '../assets/framework/css.svg';
import './HomePage.scss';
import gsap from 'gsap';
import Projects from './Projects';


const HomePage = () => {

  const logoCrsl = useRef<HTMLDivElement>(null);

  const logos = [
    { src: node, width: 150 },
    { src: express, width: 150 },
    { src: sequelize, width: 150 },
    { src: js, width: 75 },
    { src: reactjs, width: 150 },
    { src: ts, width: 75 },
    { src: css, width: 75 },
    { src: postgre, width: 75 },
    { src: docker, width: 150 },
    { src: git, width: 150 }
  ];

  const duplicatedLogos: any[] = [...logos, ...logos];

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      ease: "linear",

    });
    tl.fromTo(logoCrsl.current,
      { xPercent: 0 },
      { xPercent: -100, duration: 15, ease: "linear" })
  }, [])

  return (
    <>
      <div id="home" className=" relative home-bg-magic pt-6">
        <div className="mt-16 px-4 text-center sm:mt-20">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block uppercase xl:inline">développeur web </span>
            <span className="block uppercase text-blue-600 xl:inline">full stack junior</span>
          </h1>
          <p className='mt-3 max-w-sm mx-auto text-gray-700 sm:text-lg md:mt-8 md:text-xl md:max-w-2xl lg:max-w-3xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, assumenda! Velit quibusdam ab dicta quas modi omnis consectetur ullam cum?
          </p>
          <div className='mt-5 max-w-md mx-auto flex justify-center md:mt-12'>
            <a
              href="#"
              className='rounded-full shadow flex items-center justify-center w-32 md:w-52 px-4 py-3 text-sm sm:text-base font-medium text-white bg-blue-600 md:py-4 md:text-xl md:px-10 hover:bg-white hover:text-blue-600 hover:ring-1'
            >
              Me découvrir
            </a>
          </div>

          <div className='mt-8 absolute bottom-0' ref={logoCrsl}>
            <ul className='flex justify-between items-center whitespace-nowrap overflow-hidden' style={{ width: '200%' }}>
              {duplicatedLogos.map((logo: any, index: number) => (
                <li key={index} className='sm:w-4/12 lg:w-1/12 flex justify-center items-center pl-1 pr-1'>
                  <img src={logo.src} width={logo.width} alt="Logo" className='' />
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      <Projects />
    </>

  )
};

export default HomePage;