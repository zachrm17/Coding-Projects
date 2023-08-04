//Zachary Mietzner
#if !defined PIZZABUILDER_H
#define PIZZABUILDER_H

#include "Crust.h"
#include "Bacon.h"
#include "GreenPeppers.h"
#include "Pizza.h"
#include "Mushrooms.h"
#include "Onions.h"
#include "Pepperoni.h"
#include "Sausage.h"
#include "PizzaDiscount.h"
#include "PizzaFee.h"
#include <string>
#include <iostream>
using namespace std;

class PizzaBuilder{
	protected:
		virtual void buildPizza(); //Pre: Nothing - Post: Returns wrong
		DecoratedPizza* pizza; //Pre: Nothing - Post: Creates Decorated Pizza Pointer
		Crust* crust; //Pre: Nothing - Post: Creates Crust Pointer
	public:
		PizzaBuilder();
		bool setSize(string trySize); //Pre: Nothing - Post: returns Size Type
		bool setCrust(string tryCrust); //Pre: Nothing - Post: Returns Crust Type
		virtual void addTopping(string toppingChar);//Pre: Nothing - Post: Returns Nothing
		DecoratedPizza* pizzaDone(); //Pre: Nothing - Post: Returns complete pizza
		void addDiscount(string msg, double discount);//Pre: Nothing - Post: Returns Nothing
		void addFee(string msg, double fee);//Pre: Nothing - Post: Returns Nothing
};

#endif