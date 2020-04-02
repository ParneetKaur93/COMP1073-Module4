// creating url
let URL = 'https://parneetkaur93.github.io/COMP1073-Module4/';
// using javascript api to fetch data 
fetch(URL+'main.json').then(function(response) {
  response.json().then(function(text) {
    strangeProducts(text);
  });
});

// function to update html page
function strangeProducts(jsonObj) {
    let strangeProducts = jsonObj.Products;
    for(let i = 0; i<strangeProducts.length; i++){
		// creating elements for html page to append data gathered from json file
        let articleElement = document.createElement('article');
        let h2Element = document.createElement('h2');
        let imgElement = document.createElement('img');
        let h4Element = document.createElement('h4Element');
        let pElement = document.createElement('p');
		// selecting section from html page to append elemnts 
        let section = document.querySelector('section');
		
		// adding attributes to img element to show images
		
        imgElement.setAttribute('src',URL+'images/' + strangeProducts[i].image);
        imgElement.setAttribute('alt', strangeProducts[i].image);
		imgElement.setAttribute('height', '100px');
		imgElement.setAttribute('width', '100px')
		// adding text to text elements
        h2Element.textContent = strangeProducts[i].name;
        h4Element.textContent = 'Price : ' + strangeProducts[i].price;
        pElement.textContent = 'Description : ' + strangeProducts[i].description;
		// creating break elements for designing
        let br1Element = document.createElement('br');
        let br2Element = document.createElement('br');
        let br3Element = document.createElement('br');
		// adding all elements to index html
        articleElement.appendChild(h2Element);
		articleElement.appendChild(br1Element);
        articleElement.appendChild(imgElement);
		articleElement.appendChild(br2Element);
        articleElement.appendChild(h4Element);
		articleElement.appendChild(br3Element);
        articleElement.appendChild(pElement);
        section.appendChild(articleElement);
    }

}