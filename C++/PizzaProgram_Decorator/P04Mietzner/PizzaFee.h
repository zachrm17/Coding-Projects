//Zachary Mietzner
#if !defined PIZZAFEE_H
#define PIZZAFEE_H
#include "DecoratedPizza.h"

class PizzaFee : public DecoratedPizza {
private:
	string description; //Pre: Nothing - Post: Post: Creates String for Description of Pizza
	double fee; //Pre: Nothing - Post: Sets double for fee
public:
	PizzaFee(DecoratedPizza* pizza, string msg, double f); //Pre: Nothing - Post: Creates constructor
	double pizzaCost(); //Pre: Nothing - Post: Returns updated pizza cost
	string toString(); //Pre: Nothing - Post: Returns info for discount
};

#endif