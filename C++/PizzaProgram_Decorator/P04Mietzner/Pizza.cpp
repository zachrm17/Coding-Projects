//Zachary Mietzner
#include "Pizza.h"

Pizza::Pizza(DecoratedPizza * nextUp)
{
	setNext(nextUp);
}

double Pizza::pizzaCost()
{
	return c->crustCost() + DecoratedPizza::pizzaCost();
}

string Pizza::toString()
{
	return c->toString() + DecoratedPizza::toString();
}

void Pizza::setCrust(Crust * crust)
{
	c = crust;
}
