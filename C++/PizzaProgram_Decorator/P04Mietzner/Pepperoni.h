//Zachary Mietzner
#if !defined PEPPERONI_H
#include "DecoratedPizza.h"

class Pepperoni : public DecoratedPizza {
public:
	Pepperoni(DecoratedPizza*);//Pre: Nothing - Post: Creates Pepperoni topping for decorated Pizza

	double pizzaCost(); //Pre: Nothing - Post: adds cost of Pepperoni to pizza
	string toString(); //Pre: Nothing - Post: adds topping description
};

#endif