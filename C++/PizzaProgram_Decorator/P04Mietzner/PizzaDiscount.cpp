//Zachary Mietzner
#include "PizzaDiscount.h"

PizzaDiscount::PizzaDiscount(DecoratedPizza* pizza, string msg, double dis)
{
	description = msg;
	discount = dis;
	setNext(pizza);
}

double PizzaDiscount::pizzaCost()
{
	return DecoratedPizza::pizzaCost() * (1.0 - discount);
}

string PizzaDiscount::toString()
{
	return DecoratedPizza::toString() + description;
}
