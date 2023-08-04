#include "Onions.h"

Onions::Onions(DecoratedPizza * nextUp)
{
	setNext(nextUp);
}

double Onions::pizzaCost()
{
	return DecoratedPizza::pizzaCost() + 0.79;
}

string Onions::toString()
{
	return DecoratedPizza::toString() + "\n Onions";
}
