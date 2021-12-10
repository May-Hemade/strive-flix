const updateMovie = (event, form) => {
  event.preventDefault()

  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get("id")

  let raw = JSON.stringify({
    name: form.name.value,
    description: form.description.value,
    category: form.category.value,
    imageUrl: form.imageUrl.value,
  })

  fetch(`https://striveschool-api.herokuapp.com/api/movies/${id}`, {
    method: "PUT",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYmI1NjRjZmY1ZjAwMTU5MGJkZDEiLCJpYXQiOjE2Mzg5NzI2NzMsImV4cCI6MTY0MDE4MjI3M30.Fp3LdF8GznE1ZjcIp4kZJMiuhdAs4SxH4Wr3gwUj_yg",
      "Content-Type": "application/json",
    },
    body: raw,
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}

const loadMovie = (id, category) => {
  fetch(`https://striveschool-api.herokuapp.com/api/movies/${category}`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYmI1NjRjZmY1ZjAwMTU5MGJkZDEiLCJpYXQiOjE2Mzg5NzI2NzMsImV4cCI6MTY0MDE4MjI3M30.Fp3LdF8GznE1ZjcIp4kZJMiuhdAs4SxH4Wr3gwUj_yg",
    },
  })
    .then((response) => response.json())
    .then((categories) => {
      let movie = categories.filter((category) => category._id === id)[0]
      displayMovie(movie)
    })
    .catch((error) => {
      console.log(error)
    })
}

// const deleteMovie = () => {
//   const hasAccepted = confirm("Are you sure want to delete this item?")

//   if (!hasAccepted) return

//   const urlParams = new URLSearchParams(window.location.search)
//   const productId = urlParams.get("product_id")

//   fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
//     method: "DELETE",
//     headers: {
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYmI1NjRjZmY1ZjAwMTU5MGJkZDEiLCJpYXQiOjE2Mzg5NzI2NzMsImV4cCI6MTY0MDE4MjI3M30.Fp3LdF8GznE1ZjcIp4kZJMiuhdAs4SxH4Wr3gwUj_yg",
//     },
//   })
//     .then((response) => {
//       alert("Item deleted successfully")
//       setTimeout(() => {
//         window.location.assign("/admin.html")
//       }, 3000)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }

const displayMovie = (movie) => {
  const nameNode = document.getElementById("name")
  nameNode.value = movie.name

  const descriptionNode = document.getElementById("description")
  descriptionNode.value = movie.description

  const categoryNode = document.getElementById("category")
  categoryNode.value = movie.category

  const imageUrlNode = document.getElementById("imageUrl")
  imageUrlNode.value = movie.imageUrl
}

window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get("id")
  const category = urlParams.get("category")
  loadMovie(id, category)
}
