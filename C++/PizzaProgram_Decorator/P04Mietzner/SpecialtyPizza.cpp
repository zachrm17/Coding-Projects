//Zachary Mietzner
#include "SpecialtyPizza.h"

void SpecialtyPizza::buildPizza()
{
	PizzaBuilder::buildPizza();
}

SpecialtyPizza::SpecialtyPizza()
{
	PizzaBuilder::PizzaBuilder();
}

void SpecialtyPizza::addTopping(string top)
{
	PizzaBuilder::addTopping(top);

	char topping = toupper(top.at(0));

	if (topping == 'H') {
		pizza = new Ham(pizza);
	}
	else if (topping == 'A') {
		pizza = new Pineapple(pizza);
	}
}
