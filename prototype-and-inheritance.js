// Create 2 objects: animal and cat, add move property to animal object, 
// cat object must inherit move property from object animal

const animal = {
    move: function () {
        console.log('The animal is moving.');
    }
};
const cat = {};
cat.__proto__ = animal;
animal.move();
cat.move();