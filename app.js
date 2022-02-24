// fetch data
const searchInput = document.querySelector(".search").value;
function loadData() {
  const url = ` https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadMeal(data.meals));
}
const loadMeal = (data) => {
  console.log(data);
  data.forEach((food) => {
    const movies = document.querySelector(".movies");
    const div = document.createElement("div");
    div.classList.add("movie-card");
    div.innerHTML = `
    <img src="${food.strMealThumb}" width="100%" alt="" />
            <h3>${food.strMeal}</h3>
            <p>
          ${food.strInstructions.slice(0, 300)}
            </p>`;
    movies.appendChild(div);
  });
};
