import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Component/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div class="main-container">
        <div class="heading">
          <h1 class="heading__title">File Converter</h1>
          <p class="heading__credits">File convert into another files</p>
        </div>
        <div class="cards">

        <NavLink to={`/wordtopdf`}>
          <div class="card card-1">
            <div class="card__icon"><ion-icon name="download-outline"></ion-icon></div>
            <p class="card__exit"><ion-icon name="search-circle-outline"></ion-icon></p>
            <h2 class="card__title">Word to PDF</h2>
            
            <p class="card__apply">
              <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
            </p>
          </div>
</NavLink>

          <div class="card card-2">
            <div class="card__icon"><ion-icon name="download-outline"></ion-icon></div>
            <p class="card__exit"><ion-icon name="search-circle-outline"></ion-icon></p>
            <h2 class="card__title">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            <p class="card__apply">
              <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
            </p>
          </div>
          <div class="card card-3">
            <div class="card__icon"><ion-icon name="download-outline"></ion-icon></div>
            <p class="card__exit"><ion-icon name="search-circle-outline"></ion-icon></p>
            <h2 class="card__title">Ut enim ad minim veniam.</h2>
            <p class="card__apply">
              <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
            </p>
          </div>
          <div class="card card-4">
            <div class="card__icon"><ion-icon name="download-outline"></ion-icon></div>
            <p class="card__exit"><ion-icon name="search-circle-outline"></ion-icon></p>
            <h2 class="card__title">Quis nostrud exercitation ullamco laboris nisi.</h2>
            <p class="card__apply">
              <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
            </p>
          </div>
          <div class="card card-5">
            <div class="card__icon"><ion-icon name="download-outline"></ion-icon></div>
            <p class="card__exit"><ion-icon name="search-circle-outline"></ion-icon></p>
            <h2 class="card__title">Ut aliquip ex ea commodo consequat. Duis aute irure dolor.</h2>
            <p class="card__apply">
              <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
            </p>
          </div>
          <div class="card card-1">
            <div class="card__icon"><ion-icon name="download-outline"></ion-icon></div>
            <p class="card__exit"><ion-icon name="search-circle-outline"></ion-icon></p>
            <h2 class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p class="card__apply">
              <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home