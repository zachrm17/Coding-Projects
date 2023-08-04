//Zachary Mietzner
#if !defined PIZZA_H
#define PIZZA_H
#include "DecoratedPizza.h"
#include "Crust.h"

class Pizza : public DecoratedPizza {
	private:
		Crust* c; //Pre None - Post: Creates Crust Pointer
	public:
		Pizza(DecoratedPizza*); //Pre: None - Post: Creates Cheese Pizza with no toppings
		double pizzaCost(); //Pre: Nothing - Post: Returns Pizza Cost
		string toString();//Pre: Nothing - Post: Returns Pizza Info
		void setCrust(Crust*);//Pre: Nothing - Post: Returns nothing
};

#endif