const addMovie = (event, form) => {
  event.preventDefault()
  let raw = JSON.stringify({
    name: form.name.value,
    description: form.description.value,
    category: form.category.value,
    imageUrl: form.imageUrl.value,
  })

  fetch("https://striveschool-api.herokuapp.com/api/movies", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYmI1NjRjZmY1ZjAwMTU5MGJkZDEiLCJpYXQiOjE2Mzg5NzI2NzMsImV4cCI6MTY0MDE4MjI3M30.Fp3LdF8GznE1ZjcIp4kZJMiuhdAs4SxH4Wr3gwUj_yg",
      "Content-Type": "application/json",
    },
    body: raw,
  })
    .then((response) => {
      alert("Movie added")
      form.reset()
    })
    .catch((error) => {
      console.log(error)
    })
}
