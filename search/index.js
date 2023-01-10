window.onload = randome()
document.getElementById('srch').addEventListener('keyup', recherche)

function affiche () {
  var valu = document.getElementById('srch').value
  if (valu == '') {
    randome()
  } else {
    var valu = document.getElementById('srch').value
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${valu}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.meals == null) {
          alert('sorry not fund')
          console.log('sorry not fund')
          document.getElementById('section').innerHTML = ' '
        } else {
          afficher(data.meals)
        }
      })
  }
}
// ////////////////////////////////////////////////////////////////////////////////////////

function recherche () {
  let valu = document.getElementById('srch').value
  document.getElementById('section').innerHTML = ''
  if (valu == '') {
    document.getElementById('pages').innerHTML = ''
    randome()
  } else {
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${valu}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var meals = data.meals
        var aff = ``
        console.log(Math.ceil(meals.length / 6))

        for (var z = 1; z <= Math.ceil(meals.length / 6); z++) {
          aff += `<a class="page-link"  id="page${z}">${z}</a>`
        }
        document.getElementById('pages').innerHTML = aff

        const page1 = meals.slice(0, 6)
        afficher(page1)
        const page2 = meals.slice(6, 12)
        const page3 = meals.slice(12, 18)
        const page4 = meals.slice(18, 24)
        const page5 = meals.slice(24, 30)
        document.getElementById('page1').onclick = function () {
          afficher(page1)
        }

        document.getElementById('page2').onclick = function () {
          afficher(page2)
        }
        document.getElementById('page3').onclick = function () {
          afficher(page3)
        }
        document.getElementById('page4').onclick = function () {
          afficher(page4)
        }
        document.getElementById('page5').onclick = function () {
          afficher(page5)
        }
      })
  }
}

// ////////////////////////////////////////////////////////////////

function afficher (vluchercher) {
  document.getElementById('section').innerHTML = ''
  var contant
  for (var i = 0; i < vluchercher.length; i++) {
    contant = `<div class="col mb-3 mx-md-5">
      <div class="card">
        <img src="${vluchercher[i].strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${vluchercher[i].strMeal}</h5>
        </div>
        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="mymodal(${vluchercher[i].idMeal})">
        MORE
      </button>
      </div>
    </div>`
    document.getElementById('section').innerHTML += contant
  }
}
// carde modal////////////////////////////////////////////////////////////////////////////////////////////////
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

function randome () {
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
