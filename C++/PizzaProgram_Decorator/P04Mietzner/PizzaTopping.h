//Zachary Mietzner
#if !defined PIZZATOPPING_H
#define PIZZATOPPING_H
#include "DecoratedPizza.h"

class PizzaTopping : public DecoratedPizza{
private:
	string name; //Pre: Nothing - Post: Nothing
	string abrev; //Pre: Nothing - Post: Nothing
	double top;  //Pre: Nothing - Post: Nothing
public:
	PizzaTopping(DecoratedPizza* pizza, string toppingString, string toppingLetter, double toppingCost);//Pre: Nothing - Post: Creates Constructor
	double pizzaCost(); //Pre: Nothing - Post: Returns pizza cost with toppings
	string toString(); //Pre: Nothing - Post: Returns pizza info with toppings
};

#endif