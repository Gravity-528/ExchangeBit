import React, { useContext } from 'react'
import "./Sidebar.scss"
import { SiteContext } from '../../Context/siteContext'

const Sidebar = () => {
   
    const {toggle,Post,setPost}=useContext(SiteContext);

  return (
    <div class="SidebarMenu">
        
        <div class="side d-flex flex-column flex-shrink-0 p-3" /*style={{width: "280px",height:"100vh"}}*/style={toggle?{opacity:"1"}:{opacity:"0"}} >
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      {/* <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
      <span class="fs-4">Your Posts</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" className={`nav-link text-white ${Post===true && "activ"}`} aria-current="page" onClick={()=>setPost(!Post)}>
          {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
          PostSection
        </a>
      </li>
      <li>
        <a href="#" className={`nav-link text-white ${Post===false && "activ"} `} onClick={()=>setPost(!Post)}>
          {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg> */}
          Create Your Post
        </a>
      </li>
      {/* <li>
        <a href="#" class="nav-link text-white">
          Orders
        </a>
      </li> */}
      {/* <li>
        <a href="#" class="nav-link text-white">
          Products
        </a>
      </li> */}
      {/* <li>
        <a href="#" class="nav-link text-white">
          Customers
        </a>
      </li> */}
    </ul>
    <hr/>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" style={{}}>
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </div>
  )
}

export default Sidebar