class LunchGenerator {

    constructor(menu){
        this.menu = menu;
    }

    randomizeLunches() {
        const menu = [
            "MELI-SALAD: with pita bread (Homemade eggplant puree w/ herbs and spices)",
            "TYROPITA: Greek feta cheese pie",
            "FETA STUFFED RED PEPPER: Oven-roasted red bell pepper stuffed w/ feta cheese & herbs",
            "MERAKI CHEESE PLATTER: Assortment of feta, vlahotiri, goat cheese & tyrokafteri (spicy feta spread), accompanied w/ pita bread",
            "MUSSELS: Steamed in light butter sauce",
            "TENDER CRISPY CALAMARI: Served w/ lemon aioli sauce",
            "OCTOPUS CAKES: Lightly breaded and served w/ a homemade lemon aioli sauce",
            "GOAT CHEESE & BEET SALAD: Spinach, Walnuts, Goat Cheese, Fresh Beets, Balsamic Vinaigrette",
            "ARTICHOKE SALAD: Arugula, Romaine, artichoke hearts, kalamata olives, shaved parmesan, white balsamic vinaigrette",
            "RIBEYE STEAK: 16oz. grilled ribeye steak, served w/ Greek fries, grilled veggies & tzatziki"
          ];
         document.getElementById("randomizeLunches").innerHTML = menu[0];
         
         function LunchGenerator() {
           for (let i = menu.length -1; i > 0; i--) {
             let j = Math.floor(Math.random() * i)
             let k = menu[i]
             menu[i] = menu[j]
             menu[j] = k
           }
           document.getElementById("randomizeLunches").innerHTML = menu[0];
         }

    }
}

export const lunch = new LunchGenerator('By Pimlada Kongkham');
