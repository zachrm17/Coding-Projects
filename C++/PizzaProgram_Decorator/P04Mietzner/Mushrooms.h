//Zachary Mietzner
#if !defined MUSHROOMS_H
#define MUSHROOMS_H
#include "DecoratedPizza.h"

class Mushrooms : public DecoratedPizza {
public:
	Mushrooms(DecoratedPizza*);//Pre: Nothing - Post: Creates Mushrooms topping for decorated Pizza

	double pizzaCost(); //Pre: Nothing - Post: adds cost of Mushrooms to pizza
	string toString(); //Pre: Nothing - Post: adds topping description
};

#endif