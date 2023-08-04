//Zachary Mietzner
#if !defined ONIONS_H
#define ONIONS_H
#include "DecoratedPizza.h"

class Onions : public DecoratedPizza {
public:
	Onions(DecoratedPizza*);//Pre: Nothing - Post: Creates Onions topping for decorated Pizza

	double pizzaCost(); //Pre: Nothing - Post: adds cost of Onions to pizza
	string toString(); //Pre: Nothing - Post: adds topping description
};

#endif