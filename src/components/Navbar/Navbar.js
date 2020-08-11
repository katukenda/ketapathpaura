import React from 'react'

const navbar = () => {
    return (  
        <div>
        <header >
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Brand Name</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="#">Poems</a>
      <a class="nav-link" href="#">Books</a>
      <a class="nav-link" href="#">Login</a>
    </div>
  </div>
</nav>
        </header>
      </div>
    );
}
 
export default navbar;
