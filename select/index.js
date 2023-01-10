window.onload = first()
fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  .then(response => response.json())
  .then(data => {
    for (i = 0; i < data.meals.length; i++) {
      option = `<option value="${data.meals[i].strArea}">${data.meals[i].strArea}</option>`
      document.getElementById('area').innerHTML += option
    }
  })
fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
  .then(response => response.json())
  .then(data => {
    for (i = 0; i < data.meals.length; i++) {
      option = `<option value="${data.meals[i].strCategory}">${data.meals[i].strCategory}</option>`
      document.getElementById('cat').innerHTML += option
    }
  })
// area //////////////////////////////////////////////////////////////////////////////////

function afficher_Area (area_choizser) {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area_choizser}`)
    .then(response => response.json())
    .then(data => {
      if (document.getElementById('cat').value == '1') {
        var meals = data.meals
        var aff = ``
        for (var z = 1; z <= Math.ceil(meals.length / 12); z++) {
          aff += `<a class="page-link"  id="page${z}">${z}</a>`
        }
        document.getElementById('pages').innerHTML = aff
        const page1 = meals.slice(0, 12)
        affic(page1)
        const page2 = meals.slice(12, 24)
        const page3 = meals.slice(24, 36)
        const page4 = meals.slice(36, 48)
        const page5 = meals.slice(48, 60)
        document.getElementById('page1').onclick = function () {
          affic(page1)
        }

        document.getElementById('page2').onclick = function () {
          affic(page2)
        }
        document.getElementById('page3').onclick = function () {
          affic(page3)
        }
        document.getElementById('page4').onclick = function () {
          affic(page4)
        }
        document.getElementById('page5').onclick = function () {
          affic(page5)
        }
      } else if (
        document.getElementById('cat').value != '1' ||
        area_choizser == '1'
      ) {
        afficher_Category(document.getElementById('cat').value)
      } else {
        var affecar = []
        for (var i = 0; i < data.meals.length; i++) {
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[i].idMeal}`
          )
            .then(response => response.json())
            .then(data => {
              if (
                data.meals[0].strArea == document.getElementById('cat').value
              ) {
                affecar.push(data.meals[0])
              }
              var aff = ``
              console.log(Math.ceil(affecar.length / 12))

              for (var z = 1; z <= Math.ceil(affecar.length / 12); z++) {
                aff += `<a class="page-link"  id="page${z}">${z}</a>`
              }
              document.getElementById('pages').innerHTML = aff

              const page1 = affecar.slice(0, 12)
              affic(page1)
              const page2 = affecar.slice(12, 24)
              const page3 = affecar.slice(24, 36)
              const page4 = affecar.slice(36, 48)
              const page5 = affecar.slice(48, 60)
              document.getElementById('page1').onclick = function () {
                affic(page1)
              }

              document.getElementById('page2').onclick = function () {
                affic(page2)
              }
              document.getElementById('page3').onclick = function () {
                affic(page3)
              }
              document.getElementById('page4').onclick = function () {
                affic(page4)
              }
              document.getElementById('page5').onclick = function () {
                affic(page5)
              }
            })
        }
      }
    })
}

// category   ///////////////////////////////

function afficher_Category (Category_choizser) {
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category_choizser}`
  )
    .then(response => response.json())
    .then(data => {
      if (document.getElementById('area').value == '1') {
        var meals = data.meals
        var aff = ``

        for (var z = 1; z <= Math.ceil(meals.length / 12); z++) {
          aff += `<a class="page-link"  id="page${z}">${z}</a>`
        }
        document.getElementById('pages').innerHTML = aff

        const page1 = meals.slice(0, 12)
        affic(page1)
        const page2 = meals.slice(12, 24)
        const page3 = meals.slice(24, 36)
        const page4 = meals.slice(36, 48)
        const page5 = meals.slice(48, 60)
        document.getElementById('page1').onclick = function () {
          affic(page1)
        }

        document.getElementById('page2').onclick = function () {
          affic(page2)
        }
        document.getElementById('page3').onclick = function () {
          affic(page3)
        }
        document.getElementById('page4').onclick = function () {
          affic(page4)
        }
        document.getElementById('page5').onclick = function () {
          affic(page5)
        }
      } else {
        var affecar = []
        for (var i = 0; i < data.meals.length; i++) {
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[i].idMeal}`
          )
            .then(response => response.json())
            .then(data => {
              if (
                data.meals[0].strArea == document.getElementById('area').value
              ) {
                affecar.push(data.meals[0])
              }
              var aff = ``
              console.log(Math.ceil(affecar.length / 12))

              for (var z = 1; z <= Math.ceil(affecar.length / 12); z++) {
                aff += `<a class="page-link"  id="page${z}">${z}</a>`
              }
              document.getElementById('pages').innerHTML = aff

              const page1 = affecar.slice(0, 12)
              affic(page1)
              const page2 = affecar.slice(12, 24)
              const page3 = affecar.slice(24, 36)
              const page4 = affecar.slice(36, 48)
              const page5 = affecar.slice(48, 60)
              document.getElementById('page1').onclick = function () {
                affic(page1)
              }

              document.getElementById('page2').onclick = function () {
                affic(page2)
              }
              document.getElementById('page3').onclick = function () {
                affic(page3)
              }
              document.getElementById('page4').onclick = function () {
                affic(page4)
              }
              document.getElementById('page5').onclick = function () {
                affic(page5)
              }
            })
        }
      }
    })
}
// aficher select //////////////////////////////////
function affic (vluchercher) {
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
//  afficher cards ///////////////////////////////////////////////////////////
function afficher () {
  document.getElementById('section').innerHTML = ''
  var contant
  for (var i = 0; i < 6; i++) {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        // console.log(data.meals[0].strMeal);

        contant = `<div class="col mb-5 mx-md-5">
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

// afficher modal ////////////////////////////////////
function mymodal (parametr) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${parametr}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('img').innerHTML = `
      <img src="${data.meals[0].strMealThumb}" alt="photo" id="modalimg" />`
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
///// releod //////////////////////////////////////////////////////

function first () {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Moroccan`)
    .then(response => response.json())
    .then(data => {
      var meals = data.meals
      var affec = []
      for (var i = 0; i < meals.length; i++) {
        fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.meals[i].idMeal}`
        )
          .then(response => response.json())
          .then(data => {
            if (data.meals[0].strCategory == 'Lamb') {
              affec.push(data.meals[0])
            }
            affic(affec)
            var aff = ``
            for (var z = 1; z <= Math.ceil(affec.length / 12); z++) {
              aff += `<a class="page-link"  id="page${z}">${z}</a>`
            }
            document.getElementById('pages').innerHTML = aff
            const page1 = affec.slice(0, 12)
            affic(page1)
            const page2 = affec.slice(12, 24)
            const page3 = affec.slice(24, 36)
            const page4 = affec.slice(36, 48)
            const page5 = affec.slice(48, 60)
            document.getElementById('page1').onclick = function () {
              affic(page1)
            }

            document.getElementById('page2').onclick = function () {
              affic(page2)
            }
            document.getElementById('page3').onclick = function () {
              affic(page3)
            }
            document.getElementById('page4').onclick = function () {
              affic(page4)
            }
            document.getElementById('page5').onclick = function () {
              affic(page5)
            }
          })
      }
    })
}
