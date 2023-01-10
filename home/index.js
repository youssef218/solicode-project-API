//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = afficher()
document.getElementById('random').addEventListener('click', afficher)

function afficher () {
  document.getElementById('section').innerHTML = ''
  var contant
  for (var i = 0; i < 6; i++) {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        // console.log(data.meals[0].strMeal);

        contant = `<div class="col mb-3 mx-md-5">
  <div class="card">
    <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.meals[0].strMeal}</h5>
      
    </div>
    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="mymodal(${data.meals[0].idMeal})">
    MORE
  </button>
  </div>
</div>`
        document.getElementById('section').innerHTML += contant
      })
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function mymodal (parametr) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${parametr}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('img').innerHTML = `
    <img src="${data.meals[0].strMealThumb}" alt="photo" id="modalimg" />
    `

      var Ingredien = ''
      for (var g = 1; g <= 20; g++) {
        let ingredient = data.meals[0]['strIngredient' + g]
        let measure = data.meals[0]['strMeasure' + g]
        if (ingredient && measure) {
          Ingredien += `  ${ingredient}  ${measure} <br>`
        }
      }
      document.getElementById('modal').innerHTML = `
    <h1>${data.meals[0].strMeal}</h1>
  <p><strong>Category : </strong>${data.meals[0].strCategory}</p>
  <p><strong>Area : </strong> ${data.meals[0].strArea}</p>
  <p><strong>Ingredient : </strong> </p>
  <p> ${Ingredien} </p>
  <p><strong>Instructions : </strong></p><p>${data.meals[0].strInstructions}</p>
    `
    })
}
