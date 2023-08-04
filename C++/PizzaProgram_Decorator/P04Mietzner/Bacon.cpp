#include "Bacon.h"

Bacon::Bacon(DecoratedPizza * nextUp)
{
	setNext(nextUp);
}

double Bacon::pizzaCost()
{
	return DecoratedPizza::pizzaCost() + 0.89;
}

string Bacon::toString()
{
	return DecoratedPizza::toString() + "\n Bacon";
}
