
var navbarhtml = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="#" >Calorie Estimation </a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent" style="text-align: right;">
  <ul class="navbar-nav mr-auto"  >
	<li class="nav-item active">
	  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href="#">About us</a>
	</li>
	<li class="nav-item">
	  <a class="nav-link" href='ct'>Calorie Tracker For Me</a>
	</li>

	<!-- <li class="nav-item">
	  <a class="nav-link disabled" href="#">Get Source Code</a>
	</li> -->
  </ul>
  <!-- <form class="form-inline my-2 my-lg-0">
	<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
	<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form> -->
</div>
</nav>
`


document.getElementById("nav").innerHTML = navbarhtml;