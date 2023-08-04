//Zachary Mietzner
#if !defined GREENPEPPERS_H
#define GREENPEPPERS_H
#include "DecoratedPizza.h"

class GreenPeppers : public DecoratedPizza {
public:
	GreenPeppers(DecoratedPizza*);//Pre: Nothing - Post: Creates Green Peppers topping for decorated Pizza

	double pizzaCost(); //Pre: Nothing - Post: adds cost of Green Peppers to pizza
	string toString(); //Pre: Nothing - Post: adds topping description
};

#endif