//Zachary Mietzner
#if !defined SPECIALTYPIZZA_H
#define SPECIALTYPIZZA_H
#include "Ham.h"
#include "Pineapple.h"
#include "PizzaBuilder.h"

class SpecialtyPizza : public PizzaBuilder {
	protected:
		void buildPizza(); //Pre: Nothing - Post: Nothing
	public:
		SpecialtyPizza(); //Pre: Nothing - Post: Nothing
		void addTopping(string top); //Pre: Nothing - Post: Returns nothing/Adds toppings
};

#endif