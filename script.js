// Create search bar
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search";
searchInput.id = "searchBar";
document.body.appendChild(searchInput);

// Make it active - on enter, alert the value
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    alert("Searching for: " + this.value);
  }
});
