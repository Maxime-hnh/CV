import React from 'react';
import node from '../assets/framework/nodejs.svg'
import express from '../assets/framework/expressjs.svg'
import sequelize from '../assets/framework/sequelize.svg'
import js from '../assets/framework/javascript.svg'
import reactjs from '../assets/framework/reactjs.svg'
import ts from '../assets/framework/typescript.svg'
import postgre from '../assets/framework/postgresql.svg'
import docker from '../assets/framework/docker.svg'
import git from '../assets/framework/gitlab.svg'
import css from '../assets/framework/css.svg'

const HomePage = () => {


  return (
    <div className="home-bg-magic pt-6 pb-16 min-h-500 sm:pb-24 md:min-h-650">

      <div className="mt-20 px-4 text-center sm:mt-16">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block uppercase xl:inline">développeur web </span>
          <span className="block uppercase text-blue-600 xl:inline">full stack junior</span>
        </h1>
        <div className='mt-12'>
          <ul className='flex justify-between items-center'>
            <li>
              <img src={node} width={150} />
            </li>
            <li>
              <img src={express} width={150} />
            </li>
            <li>
              <img src={sequelize} width={150} />
            </li>
            <li>
              <img src={js} width={75} />
            </li>
            <li>
              <img src={reactjs} width={150} />
            </li>
            <li>
              <img src={ts} width={75} />
            </li>
            <li>
              <img src={css} width={75} />
            </li>
            <li>
              <img src={postgre} width={75} />
            </li>
            <li>
              <img src={docker} width={150} />
            </li>
            <li>
              <img src={git} width={150} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage;