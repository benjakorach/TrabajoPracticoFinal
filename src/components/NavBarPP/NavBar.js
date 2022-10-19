import React from 'react';

export const NavBar = () => {
    return (
        <header>
    <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html"><i class="fa-brands fa-btc"></i> Wiki Crypto</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-house"></i> Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-house"></i> Noticias</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-house"></i> Wallet </a>
            </li>
          </ul>
          {/*<button class="btn btn-primary" onclick="darkmode()"> <i class="fa-solid fa-moon"></i> </button>*/}
          <form class="d-flex" role="search">


            
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
          
        </div>
      </div>
    </nav>
    <br></br>
    <br></br>
  </header>
    )
}


