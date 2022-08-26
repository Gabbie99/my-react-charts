import React from 'react'
import logo from '../images/logo.svg'
import './Chart.css'

function ChartsHeader() {
  return (
    <div>
        <header>
        <div class="head-wrapper">
            <div class="head">
                <p class="first-p">My balance</p>
                <h1>$921.48</h1>
            </div>
            <img src={logo} alt="logo" />
        </div>
    </header>
    </div>
  )
}

export default ChartsHeader