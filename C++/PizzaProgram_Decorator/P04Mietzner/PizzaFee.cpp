//Zachary Mietzner
#include "PizzaFee.h"

PizzaFee::PizzaFee(DecoratedPizza * pizza, string msg, double f)
{
	description = msg;
	fee = f;
	setNext(pizza);
}

double PizzaFee::pizzaCost()
{
	return DecoratedPizza::pizzaCost() + fee;
}

string PizzaFee::toString()
{
	return DecoratedPizza::toString() + description;
}
