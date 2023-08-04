//Zachary Mietzner
#if !defined PIZZAFACTORY_H
#define PIZZAFACTORY_H
#include "DecoratedPizza.h"
#include "PizzaTopping.h"

class PizzaFactory : public DecoratedPizza{
	public:
		PizzaFactory();
		DecoratedPizza* addPeperoni(DecoratedPizza* decPizza); //Pre: Nothing - Post: Creates Pepperoni Topping
		DecoratedPizza* addBacon(DecoratedPizza* decPizza); //Pre: Nothing - Post: Creates Bacon Topping
		DecoratedPizza* addGreenPeppers(DecoratedPizza* decPizza); //Pre: Nothing - Post: Creates Green Peppers Topping
		DecoratedPizza* addHam(DecoratedPizza* decPizza); //Pre: Nothing - Post: Creates Ham Topping
		DecoratedPizza* addMushrooms(DecoratedPizza* decPizza); //Pre: Nothing - Post: Creates Mushrooms Topping
		DecoratedPizza* addOnions(DecoratedPizza* decPizza); //Pre: Nothing - Post: Creates Onions Topping
		DecoratedPizza* addPineapple(DecoratedPizza* decPizza); //Pre: Nothing - Post: Creates Pineapple Topping
		DecoratedPizza* addSausage(DecoratedPizza* decPizza); //Pre: Nothing - Post: Creates Sausage Topping
};	

#endif