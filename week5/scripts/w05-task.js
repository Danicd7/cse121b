/* W05: Programming Tasks */

/* Declare and initialize global variables */

// Declare a const variable named templesElement that references the HTML div element.
const templesElement =  document.querySelector('#temples');

// Declare a global empty array variable to store a list of temples.
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    //templesElement.innerHTML = ''; 
      //getTemples();
      temples.forEach(temple => {
        let article = document.createElement('article');                
        let templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;
        let img = document.createElement('img');
        img.setAttribute ('src', temple.imageUrl);
        img.setAttribute ('alt', temple.location);
       
        article.appendChild(templeName);
        article.appendChild(img);

        templesElement.appendChild(article);                
    });
}



/* async getTemples Function using fetch()*/

const getTemples = async () => {
    /*try{
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        templeList = await response.json();
    
        displayTemples(templeList);
    } catch (error) {
        console.error(error);
    }
  };*/

  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  templeList = await response.json();

  displayTemples(templeList);
};

/* reset Function */
const reset = () => {      
    templesElement.innerHTML = '';    
};

/* sortBy Function */

const sortBy = (temples) => {
    reset();

    switch (document.querySelector('#sortBy').value) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
        displayTemples(temples);
        break;
    }
};

/* Event Listener */

getTemples();

document.querySelector('#sortBy').addEventListener('change',() => sortBy(templeList));



