#include "Mushrooms.h"

Mushrooms::Mushrooms(DecoratedPizza * nextUp)
{
	setNext(nextUp);
}

double Mushrooms::pizzaCost()
{
	return DecoratedPizza::pizzaCost() + 0.79;
}

string Mushrooms::toString()
{
	return DecoratedPizza::toString() + "\n Mushrooms";
}
