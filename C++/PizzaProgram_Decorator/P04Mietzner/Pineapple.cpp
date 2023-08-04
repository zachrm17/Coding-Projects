#include "Pineapple.h"

Pineapple::Pineapple(DecoratedPizza * nextUp)
{
	setNext(nextUp);
}

double Pineapple::pizzaCost()
{
	return DecoratedPizza::pizzaCost() + 0.89;
}

string Pineapple::toString()
{
	return DecoratedPizza::toString() + "\n Pineapple";
}
