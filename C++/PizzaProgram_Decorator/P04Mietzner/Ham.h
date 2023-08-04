//Zachary Mietzner
#if !defined HAM_H
#define HAM_H
#include "DecoratedPizza.h"

class Ham : public DecoratedPizza {
public:
	Ham(DecoratedPizza*);//Pre: Nothing - Post: Creates Ham topping for decorated Pizza

	double pizzaCost(); //Pre: Nothing - Post: adds cost of Ham to pizza
	string toString(); //Pre: Nothing - Post: adds topping description
};

#endif