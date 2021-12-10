let currentCategory = ""

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
  let categoriesContainerNode = document.getElementById("movie-categories")
  categoriesContainerNode.innerHTML = ""

  categories.forEach((category) => {
    let optionNode = document.createElement("option")
    categoriesContainerNode.appendChild(optionNode)
    optionNode.innerText = capitalizeFirstLetter(category)
    optionNode.value = category
  })

  if (categories.length > 0) {
    loadMovies(categories[0])
  }
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const onCategoryChange = (select) => {
  console.log(select.value)
  loadMovies(select.value)
}

const loadMovies = (category) => {
  currentCategory = category
  fetch(`https://striveschool-api.herokuapp.com/api/movies/${category}`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYmI1NjRjZmY1ZjAwMTU5MGJkZDEiLCJpYXQiOjE2Mzg5NzI2NzMsImV4cCI6MTY0MDE4MjI3M30.Fp3LdF8GznE1ZjcIp4kZJMiuhdAs4SxH4Wr3gwUj_yg",
    },
  })
    .then((response) => response.json())
    .then((movies) => {
      displayMovies(movies)
    })

    .catch((error) => {
      console.log(error)
    })
}

const deleteMovie = (movieId, name) => {
  const hasAccepted = confirm(`Are you sure want to delete "${name}"`)

  if (!hasAccepted) return

  fetch(`https://striveschool-api.herokuapp.com/api/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYmI1NjRjZmY1ZjAwMTU5MGJkZDEiLCJpYXQiOjE2Mzg5NzI2NzMsImV4cCI6MTY0MDE4MjI3M30.Fp3LdF8GznE1ZjcIp4kZJMiuhdAs4SxH4Wr3gwUj_yg",
    },
  })
    .then((response) => {
      alert("Item deleted successfully")
      loadMovies(currentCategory)
    })
    .catch((error) => {
      console.log(error)
    })
}

const displayMovies = (movies) => {
  let moviesContainerNode = document.getElementById("movies-container")
  moviesContainerNode.innerHTML = ""

  movies.forEach((movie) => {
    let trNode = document.createElement("tr")
    moviesContainerNode.appendChild(trNode)
    trNode.innerHTML = `
        <td><img src="${movie.imageUrl}" style="width: 100px;"/></td>
        <td>${movie.name}</td>
        <td>${movie.category}</td>
        <td>
        <a class="btn btn-primary" href="/movie-details.html?id=${movie._id}&category=${movie.category}">View </a>
        </td>
        <td>
        <button class="btn btn-primary" onclick='deleteMovie("${movie._id}","${movie.name}")'>Delete</button>
        </td
        `
  })
}

window.onload = () => {
  loadCategories()
}
