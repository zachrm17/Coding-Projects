#include "DecoratedPizza.h"

DecoratedPizza::DecoratedPizza()
{
	nextPizzaItem = nullptr;
}

DecoratedPizza::DecoratedPizza(DecoratedPizza * next)
{
	nextPizzaItem = next;
}

DecoratedPizza::~DecoratedPizza()
{
	delete nextPizzaItem;
}

double DecoratedPizza::pizzaCost()
{
	//recursion case
	if (nextPizzaItem == nullptr)
		return 0;
	return nextPizzaItem->pizzaCost();
}

string DecoratedPizza::toString()
{
	if (nextPizzaItem == nullptr)
		return "";
	return nextPizzaItem->toString();
}

void DecoratedPizza::setNext(DecoratedPizza * next)
{
	nextPizzaItem = next;
}
