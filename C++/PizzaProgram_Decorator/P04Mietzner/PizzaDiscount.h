//Zachary Mietzner
#if !defined PIZZADISCOUNT_H
#define PIZZADISCOUNT_H
#include "DecoratedPizza.h"

class PizzaDiscount : public DecoratedPizza {
	private:
		string description; //Pre: Nothing - Post: Creates String for Description of Pizza
		double discount; //Pre: Nothing - Post: Sets double for discount
	public:
		PizzaDiscount(DecoratedPizza* pizza, string msg, double dis); //Pre: Nothing - Post: Creates Constructor
		double pizzaCost(); //Pre: Nothing - Post: Returns updated pizza cost
		string toString(); //Pre: Nothing - Post: Returns info for discount
};

#endif