//Zachary Mietzner
#include "PizzaTopping.h"

PizzaTopping::PizzaTopping(DecoratedPizza * pizza, string toppingString, string toppingLetter, double toppingCost)
{
	setNext(pizza);
	name = toppingString;
	abrev = toppingLetter;
	top = toppingCost;
}

double PizzaTopping::pizzaCost()
{
	return DecoratedPizza::pizzaCost() + top;
}

string PizzaTopping::toString()
{
	return DecoratedPizza::toString() + name;
}
