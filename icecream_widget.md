# The ice cream widget

Create a widget that can calculate the price of an ice cream. The widget should allow users to select a flavour, the type of container to use and the toppings to add to the ice cream. Once users selected all the options they want - they can click on the 'Get price' button to get the total cost of the ice cream displayed on the screen. (You could also display the price in real-time if you want as the user selection changes.)

The widget:
* should  calculate the price of the ice cream based on the options that the user selected.
* should allow for three or more flavours, three of more different containers and five or more toppings.

Possible flavours are: 
* Vanilla, Chocolate and Strawberry.
* Containers could be: Plain Cone, Sugar Cone & a paper cup.
* Toppings could include: 
    * Crumbed peanuts, 
    * Caramal dip, 
    * Chocolate Dip, 
    * Smarties, 
    * Oreos 
    * & Astros.

Each flavour, container and topping should have a different price.

## Instructions

Create a paper prototype - add this to your GitHub repo.
Write unit tests - use TDD
Deploy to GitHub pages
Email the deployed link to: `mentors@projectcodex.co`

Use:
* a factory function to calculate the total price for an ice cream,
* dropdowns or radio buttons for the flavour & container type,
* check boxes for the toppings - as the user can select more than one topping.

## Consider

Rendering the screens from data that exist in the Factory Function using a template. This will make it easy to add new data and update the screen dynamically.

Alternatively hardcode the data in the screen and link it with the Factory Function to calculate the total price.

## Extra things to do

Create an option to add an ice cream to a a basket. 
Display:

* each ice cream added to the basket
* the total price for all the ice creams added to the basket.

## Technical tips

To select values from a a series radio buttons or checkboxes you can use the `:checked` pseudo selector.

To get all the values from the checkboxes checked you can do this:

```javascript
// get all the checkboxes ticked
// each checkbox should have a different value
const flavours = document.querySelectorAll(".flavour:checked");

// if you use a radio button for the container Type
const container = document.querySelector(".containerType:checked");

```

You can use the `find` method on list to easily find the correct `flavour`, `toppings` or `container`.

In the example below it's used to do a look up in the `languages` list of objects. Alternatively you can just use a loop with if statements.

```javascript

const languages = [{ language: "afr", greeting: "Goeie dag"}, {language: "eng", greeting: "Good morning"}, {language: "xhosa", greeting : "Molo"}];

cons languageLookingFor = languages.find(function(option){
   return option.language == "eng";
});

// this will print 'Good mornin'
console.log(languageLookingFor.greeting);

```






