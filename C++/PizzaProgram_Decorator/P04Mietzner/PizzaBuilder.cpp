//Zachary Mietzner
#include "PizzaBuilder.h"

void PizzaBuilder::buildPizza()
{
	Pizza* basic = new Pizza(pizza); //Making new object
	basic->setCrust(crust);
	pizza = basic;
}

PizzaBuilder::PizzaBuilder()
{
	crust = new Crust(S, THIN);
	/*crust->setSize(S);
	crust->setCrust(THIN);*/
}

bool PizzaBuilder::setSize(string trySize)
{
	char sizeChar = toupper(trySize.at(0));

	if (sizeChar == 'S') {
		crust->setSize(S);
		return true;
	}
	else if (sizeChar == 'M') {
		crust->setSize(M);
		return true;
	}
	else if (sizeChar == 'L') {
		crust->setSize(L);
		return true;
	}
	else return false;
}

bool PizzaBuilder::setCrust(string tryCrust)
{
	char crustChar = toupper(tryCrust.at(0));

	if (crustChar == 'T') {
		crust->setCrust(THIN);
		return true;
	}
	else if (crustChar == 'H') {
		crust->setCrust(HAND);
		return true;
	}
	else if (crustChar == 'P') {
		crust->setCrust(PAN);
		return true;
	}
	else return false;
}

void PizzaBuilder::addTopping(string toppingChar)
{
	char topping = toupper(toppingChar.at(0));
	
	if (topping == 'B') {
		pizza = new Bacon(pizza);
	}
	else if (topping == 'G') {
		pizza = new GreenPeppers(pizza);
	}
	else if (topping == 'M') {
		pizza = new Mushrooms(pizza);
	}
	else if (topping == 'O') {
		pizza = new Onions(pizza);
	}
	else if (topping == 'P') {
		pizza = new Pepperoni(pizza);
	}
	else if (topping == 'S') {
		pizza = new Sausage(pizza);
	}
}

DecoratedPizza * PizzaBuilder::pizzaDone()
{
	buildPizza();
	return pizza;
}

void PizzaBuilder::addDiscount(string msg, double discount)
{
	pizza = new PizzaDiscount(pizza, msg, discount);
}

void PizzaBuilder::addFee(string msg, double fee)
{
	pizza = new PizzaFee(pizza, msg, fee);
}


