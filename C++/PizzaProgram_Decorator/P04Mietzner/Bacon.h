//Zachary Mietzer
#if !defined BACON_H
#define BACON_H
#include "DecoratedPizza.h"

class Bacon : public DecoratedPizza {
	public:
		Bacon(DecoratedPizza*); //Pre: Nothing - Post: Creates Bacon topping for decorated Pizza

		double pizzaCost(); //Pre: Nothing - Post: adds cost of Bacon to pizza
		string toString(); //Pre: Nothing - Post: adds topping description
};

#endif