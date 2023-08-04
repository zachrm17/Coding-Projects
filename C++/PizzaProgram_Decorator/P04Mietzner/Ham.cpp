#include "Ham.h"

Ham::Ham(DecoratedPizza * nextUp)
{
	setNext(nextUp);
}

double Ham::pizzaCost()
{
	return DecoratedPizza::pizzaCost() + 0.89;
}

string Ham::toString()
{
	return DecoratedPizza::toString() + "\n Ham";
}
