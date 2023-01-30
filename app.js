"use strict";

async function get_file() {
  let response = await fetch("https://swapi.dev/api/films/");
  let data = await response.json();
  data.results.map((el) => console.log(el));
}
get_file();
