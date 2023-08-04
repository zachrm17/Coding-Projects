//Zachary Mietzner
#if !defined DECORATEDPIZZA_H
#define DECORATEDPIZZA_H

#include <string>
#include <iostream>
using namespace std;

class DecoratedPizza {
	private:
		DecoratedPizza * nextPizzaItem; //Pre: Nothing - Post: Creates Next pizza item pointer
	public:
		DecoratedPizza(); //Pre: Nothing - Post: Returns Nothing
		DecoratedPizza(DecoratedPizza*); //Pre: Nothing - Post: Returns Nothing
		~DecoratedPizza();//Pre: Nothing - Post: Returns Nothing

		virtual double pizzaCost(); //Pre: Nothing - Post: Returns cost of pizza
		virtual string toString();//Pre: Nothing - Post: Returns pizza info
		void setNext(DecoratedPizza *); //Pre: Nothing - Post: Returns nothing
};

#endif