//Zachary Mietzner
#include "PizzaFactory.h"

PizzaFactory::PizzaFactory()
{
}

DecoratedPizza * PizzaFactory::addPeperoni(DecoratedPizza* decPizza)
{
	return new PizzaTopping(decPizza, "Pepperoni", "P", 0.99);
}

DecoratedPizza * PizzaFactory::addBacon(DecoratedPizza* decPizza)
{
	return new PizzaTopping(decPizza, "Bacon", "B", 0.89);
}

DecoratedPizza * PizzaFactory::addGreenPeppers(DecoratedPizza* decPizza)
{
	return new PizzaTopping(decPizza, "Green Peppers", "G", 0.69);
}

DecoratedPizza * PizzaFactory::addHam(DecoratedPizza* decPizza)
{
	return new PizzaTopping(decPizza, "Ham", "H", 0.89);
}

DecoratedPizza * PizzaFactory::addMushrooms(DecoratedPizza* decPizza)
{
	return new PizzaTopping(decPizza, "Mushrooms", "M", 0.79);
}

DecoratedPizza * PizzaFactory::addOnions(DecoratedPizza* decPizza)
{
	return new PizzaTopping(decPizza, "Onions", "O", 0.79);
}

DecoratedPizza * PizzaFactory::addPineapple(DecoratedPizza* decPizza)
{
	return new PizzaTopping(decPizza, "Pineapple", "A", 0.89);
}

DecoratedPizza * PizzaFactory::addSausage(DecoratedPizza* decPizza)
{
	return new PizzaTopping(decPizza, "Sausage", "S", 0.99);
}

