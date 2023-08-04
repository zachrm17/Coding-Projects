//Zachary Mietzner
#if !defined PINEAPPLE_H
#define PINEAPPLE_H
#include "DecoratedPizza.h"

class Pineapple : public DecoratedPizza {
public:
	Pineapple(DecoratedPizza*);//Pre: Nothing - Post: Creates Pineapple topping for decorated Pizza

	double pizzaCost(); //Pre: Nothing - Post: adds cost of Pineapple to pizza
	string toString(); //Pre: Nothing - Post: adds topping description
};

#endif