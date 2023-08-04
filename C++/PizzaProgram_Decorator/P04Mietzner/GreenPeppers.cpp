#include "GreenPeppers.h"

GreenPeppers::GreenPeppers(DecoratedPizza * nextUp)
{
	setNext(nextUp);
}

double GreenPeppers::pizzaCost()
{
	return DecoratedPizza::pizzaCost() + 0.69;
}

string GreenPeppers::toString()
{
	return DecoratedPizza::toString() + "\n Green Peppers";
}
