#include "Pepperoni.h"

Pepperoni::Pepperoni(DecoratedPizza * nextUp)
{
	setNext(nextUp);
}

double Pepperoni::pizzaCost()
{
	return DecoratedPizza::pizzaCost() + 0.99;
}

string Pepperoni::toString()
{
	return DecoratedPizza::toString() + "\n Pepperoni";
}
