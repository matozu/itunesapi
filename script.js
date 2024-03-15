const searchForm = document.querySelector("form#search-form");
const searchInput = document.querySelector("input#search-input");
const submitButton = document.querySelector("form button[type='submit']");
const resultsDiv = document.querySelector("div#results");

function fetchData(url) {
  return fetch(url).then((result) => result.json());
}

searchForm.onsubmit = (event) => {
  event.preventDefault();
  search();
};

function search() {
  resultsDiv.innerHTML = "loading";
  submitButton.disabled = true;
  const searchValue = searchInput.value;
  const url = `https://itunes.apple.com/search?term=${searchValue}&entity=song`;
  console.log(url);
  setTimeout(() => {
    fetchData(url).then((result) => displayData(result));
  }, 1000);
}

function displayData(result) {
  submitButton.disabled = false;
  resultsDiv.innerHTML = "";
  if (result.resultCount === 0) {
    resultsDiv.innerHTML = "no result";
  } else {
    result.results.forEach((item) => {
      console.log(item);
      const itemDiv = document.createElement("p");
      const artistLink = document.createElement("a");
      artistLink.textContent = item.artistName;
      artistLink.href = item.artistViewUrl;
      artistLink.target = "_blank";
      artistLink.classList.add("artist-link");
      itemDiv.appendChild(artistLink);
      itemDiv.appendChild(document.createTextNode(": "));
      const songLink = document.createElement("a");
      songLink.textContent = item.trackName;
      songLink.href = item.trackViewUrl;
      songLink.target = "_blank";
      itemDiv.appendChild(songLink);
      resultsDiv.appendChild(itemDiv);
    });
  }
}
