import React from 'react'


const Navbar = () => {
  return (
    <>
        
    <div id="navcontainer">

      <nav>
        <div id="logo">
          File Converter
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li class="dropdown"  onmouseover="hover(this);" onmouseout="out(this);"><a href="#">Gallery &nbsp;<span style={{paddingTop:50}}><ion-icon   name="chevron-down-outline"></ion-icon> </span></a>
            <div class="dd">
              <div id="up_arrow"></div>
            <ul>
              
              <li><a href="#">2019</a></li>
              <li><a href="#">2018</a></li>
              <li><a href="#">2017</a></li>
            </ul>
            </div>
          </li>
          <li><a href="#">Contact</a></li>
          <li class="dropdown"><a href="#">Others &nbsp;<i class="fa fa-caret-down"></i> </a>
           <div class="dd">
             <div id="u_a_c"><div id="up_arrow"></div></div>
            <ul>
              
              <li><a href="#">DOCS</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">PROJECTS</a></li>
            </ul>
            </div>

            </li>
        </ul>
      </nav>
    </div>

    </>
  )
}

export default Navbar