const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
  'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 
  'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 
  'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 
  'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 
  'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 
  'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 
  'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 
  'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 
  'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'
];

function search(str) {
  const query = str.toLowerCase();
  return fruit.filter(fruitItem => fruitItem.toLowerCase().includes(query));
}

function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results);
}

function showSuggestions(results) {
  suggestions.innerHTML = ''; // Clear previous suggestions
  if (results.length) {
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = result;
      suggestions.appendChild(li);
    });
    suggestions.parentElement.classList.add('has-suggestions');
  } else {
    suggestions.parentElement.classList.remove('has-suggestions');
  }
}

function highlightSuggestion(e) {
  if (e.target.tagName === 'LI') {
    document.querySelectorAll('.suggestions li').forEach(li => li.classList.remove('highlight'));
    e.target.classList.add('highlight');
  }
}

function useSuggestion(e) {
  if (e.target.tagName === 'LI') {
    input.value = e.target.textContent;
    suggestions.innerHTML = ''; // Clear suggestions
    suggestions.parentElement.classList.remove('has-suggestions');
  }
}

input.addEventListener('input', searchHandler);
suggestions.addEventListener('mouseover', highlightSuggestion);
suggestions.addEventListener('click', useSuggestion);
