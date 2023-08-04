//Zachary Mietzner
#if !defined SAUSAGE_H
#define SAUSAGE_H
#include "DecoratedPizza.h"

class Sausage : public DecoratedPizza {
public:
	Sausage(DecoratedPizza*);//Pre: Nothing - Post: Creates Sausage topping for decorated Pizza

	double pizzaCost(); //Pre: Nothing - Post: adds cost of Sausage to pizza
	string toString(); //Pre: Nothing - Post: adds topping description
};

#endif