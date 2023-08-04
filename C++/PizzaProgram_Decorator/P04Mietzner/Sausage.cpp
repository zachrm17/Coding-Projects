#include "Sausage.h"

Sausage::Sausage(DecoratedPizza * nextUp)
{
	setNext(nextUp);
}

double Sausage::pizzaCost()
{
	return DecoratedPizza::pizzaCost() + 0.99;
}

string Sausage::toString()
{
	return DecoratedPizza::toString() + "\n Sausage";
}
