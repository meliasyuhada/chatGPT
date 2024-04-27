// Daftar istilah IT dan definisi dalam bahasa Indonesia, diurutkan secara alfabetis berdasarkan istilah
const glossary = [
  { term: "API", definition: "Antarmuka Pemrograman Aplikasi" },
  { term: "CSS", definition: "Cascading Style Sheets" },
  { term: "HTML", definition: "Hypertext Markup Language" },
  { term: "JavaScript", definition: "Bahasa pemrograman tingkat tinggi, yang diterjemahkan" },
  { term: "SQL", definition: "Structured Query Language" },
  { term: "URL", definition: "Lokator Sumber Daya Seragam" },
];

// Binary Search Algorithm
function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid].term.toLowerCase() === key.toLowerCase()) {
      return arr[mid].definition;
    } else if (arr[mid].term.toLowerCase() < key.toLowerCase()) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return "Istilah tidak ditemukan di kamus.";
}

// Search function
function search() {
  const searchTerm = document.getElementById("searchTerm").value;
  const result = binarySearch(glossary, searchTerm);
  const resultElement = document.getElementById("result");
  if (result === "Istilah tidak ditemukan di kamus.") {
    resultElement.innerHTML = `<p class="text-lg">${result}</p>`;
    document.getElementById("glossaryList").classList.remove("hidden");
  } else {
    resultElement.innerHTML = `<p class="text-lg">${result}</p>`;
    document.getElementById("glossaryList").classList.add("hidden");
  }
}

// Display glossary list in alphabetical order
function displayGlossaryList() {
  const glossaryList = document.getElementById("glossaryList");
  glossary.sort((a, b) => a.term.localeCompare(b.term));
  glossary.forEach((item) => {
    glossaryList.innerHTML += `<p><strong>${item.term}:</strong> ${item.definition}</p>`;
  });
}

displayGlossaryList(); // Call the function to display glossary list when the page loads
