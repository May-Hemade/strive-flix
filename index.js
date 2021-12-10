const loadCategories = () => {
  fetch("https://striveschool-api.herokuapp.com/api/movies", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYmI1NjRjZmY1ZjAwMTU5MGJkZDEiLCJpYXQiOjE2Mzg5NzI2NzMsImV4cCI6MTY0MDE4MjI3M30.Fp3LdF8GznE1ZjcIp4kZJMiuhdAs4SxH4Wr3gwUj_yg",
    },
  })
    .then((response) => response.json())
    .then((categories) => {
      displayCategories(categories)
    })

    .catch((error) => {
      console.log(error)
    })
}

const displayCategories = (categories) => {
  let categoriesContainerNode = document.getElementById("carousel-container")
  categoriesContainerNode.innerHTML = ""

  categories.forEach((category) => {
    let h4Node = document.createElement("h4")
    h4Node.className = "mt-5 mb-2 text-white font-weight-bold"
    categoriesContainerNode.appendChild(h4Node)
    h4Node.innerText = capitalizeFirstLetter(category)

    let rowNode = document.createElement("div")
    rowNode.className = "row"
    categoriesContainerNode.appendChild(rowNode)

    loadMovies(category, rowNode)
  })

  if (categories.length > 0) {
    loadMovies(categories[0])
  }
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const loadMovies = (category, container) => {
  fetch(`https://striveschool-api.herokuapp.com/api/movies/${category}`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYmI1NjRjZmY1ZjAwMTU5MGJkZDEiLCJpYXQiOjE2Mzg5NzI2NzMsImV4cCI6MTY0MDE4MjI3M30.Fp3LdF8GznE1ZjcIp4kZJMiuhdAs4SxH4Wr3gwUj_yg",
    },
  })
    .then((response) => response.json())
    .then((movies) => {
      displayMovies(movies, container)
    })

    .catch((error) => {
      console.log(error)
    })
}

const displayMovies = (movies, container) => {
  container.innerHTML = ""

  movies.forEach((movie) => {
    let movieNode = document.createElement("div")
    movieNode.className = "col-2 px-05"
    movieNode.innerHTML = `
      <img class="img-fluid w-100 movie-img" src="${movie.imageUrl}" alt="${movie.name}" />`
    container.appendChild(movieNode)
  })
}

{
  /* <h4 class="mt-5 mb-2 text-white font-weight-bold">Trending Now</h4>

    <div id="carouselExampleControls" class="carousel slide d-none d-md-block" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row row-cols-md-3 row-cols-lg-6 mx-n05">
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media1.jpg" alt="movie picture 1" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media10.jpg" alt="movie picture 2" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media11.jpg" alt="movie picture 3" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media14.webp" alt="movie picture 4" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media17.jpg" alt="movie picture 5" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media23.webp" alt="movie picture 6" />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row row-cols-md-3 row-cols-lg-6 mx-n05">
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media30.jpg" alt="movie picture 7" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="/assets/media/media4.jpg" alt="movie picture 8" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media6.jpg" alt="movie picture 9" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media30.jpg" alt="movie picture 10" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media5.webp" alt="movie picture 11" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media7.webp" alt="movie picture 12" />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row row-cols-md-3 row-cols-lg-6 mx-n05">
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media5.webp" alt="movie picture 13" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media28.jpg" alt="movie picture 14" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media25.webp" alt="movie picture 15" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media2.webp" alt="movie picture 16" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media13.jpg" alt="movie picture 17" />
            </div>
            <div class="col px-05">
              <img class="img-fluid w-100" src="assets/media/media1.jpg" alt="movie picture 18" />
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div> */
}

window.onload = () => {
  loadCategories()
}
