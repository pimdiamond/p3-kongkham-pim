import { header } from './modules/header';
import { footer } from './modules/footer';
import { lunch } from './modules/lunchgenerator';


class App {

    constructor() {
        this.renderTemplate();
        lunch.randomizeLunches();
    }
    
    renderTemplate() {

        const template = `
      <h1>${header.title}</h1>
      <h2>${header.subtitle}</h2>
      <p>${lunch.menu}</p>
      <button id="random">Let's Reveal!</button>
      <p id="randomizeLunches"></p>
      <footer>${footer.footer}</footer>
`;


document.body.innerHTML = template;
    }

}
  
new App;
