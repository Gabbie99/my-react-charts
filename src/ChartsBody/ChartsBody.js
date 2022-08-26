import React from 'react'

function ChartsBody() {
  return (
    <div>
        <section class="section">
        <h2 class="sec-header">Spending - Last 7 days</h2>
        <div class="flex-bar">
            <div class="bar">
                <p class="second-p">mon</p><div class="mon">
            </div>
            </div>
            <div class="bar">
                <p class="second-p">tue</p><div class="tue"></div>
            </div>
            <div class="bar">
                <p class="second-p">wed</p><div class="wed"></div>
            </div>
            <div class="bar">
                <p class="second-p">thu</p><div class="thu"></div>
            </div>
            <div class="bar">
                <p class="second-p">fri</p><div class="fri"></div>
            </div>
            <div class="bar">
                <p class="second-p">sat</p><div class="sat"></div>
            </div>
            <div class="bar">
                <p class="second-p">sun</p><div class="sun"></div>
            </div>
        </div>
        <hr/>
        <div class="second-wrapper">
            <div id="dif">
                <p class="second-p">Total of this month</p>
            <h1 class="section-head">$478.33</h1>
            </div>
            <div class="sec-sec-div">
                <h5 class="sec-head">+2.4%</h5>
                <div class="empty"></div>
                <span class="second-p">from last month</span>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ChartsBody