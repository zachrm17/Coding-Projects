//Zachary Mietzer
#include <iostream>
#include "PizzaBuilder.h"
#include "SpecialtyPizza.h"
#include <fstream>
using namespace std;

int menu(istream& finalPizza)
{
	int s = 0;

	cout << "1. Meat Lover's" << endl;
	cout << "2. Veggie Lover's" << endl;
	cout << "3. Hawaiian" << endl;
	cout << "4. Build Your Own" << endl;

	while (s < 1 || s > 4) {
		cout << "Enter a number choice 1-4" << endl;
		finalPizza >> s;
	}

	finalPizza.ignore(1);
	return s;
}

void requestSize(PizzaBuilder* pizzaBuilder, istream& finalPizza)
{
	string sizeChoice = "y";

	while (!pizzaBuilder->setSize(sizeChoice)){

		cout << "What size pizza (S/M/L): " << endl;
		getline(finalPizza, sizeChoice);
	}
}

void requestCrust(PizzaBuilder* pizzaBuilder, istream& finalPizza)
{
	string crustChoice = "y";

	while (!pizzaBuilder->setCrust(crustChoice)) {

		cout << "What type of crust (Thin/Hand/Pan): " << endl;
		getline(finalPizza, crustChoice);
	}
}

void requestToppings(PizzaBuilder* pizzaBuilder, istream& finalPizza)
{
	string toppingChoice = "y";

	while (toupper(toppingChoice.at(0)) != 'D') {
		cout << "Toppings:" << endl;
		cout << "(P)epperoni,(O)nions,(G)reen Peppers,(S)ausage,(M)ushrooms,(D)one" << endl;

		getline(finalPizza, toppingChoice);
		pizzaBuilder->addTopping(toppingChoice);
	}
}

void showOrder(DecoratedPizza* decPizza)
{
	cout << decPizza->toString() << endl;
	cout << "$" << decPizza->pizzaCost() << endl;
}

int main(int argc, char** argv)
{
	ifstream infile(argv[1]);

	int numPizzas = 0;
	double pizzaCost = 0.0;

	string orderChoice = "y";

	cout << "Would you like to order a pizza (y/n)?: " << endl;
	getline(infile, orderChoice);

	while (tolower(orderChoice.at(0)) == 'y') {
		numPizzas++;
		int selection = menu(infile);

		PizzaBuilder* pizzaBuild;

		if (selection == 4) {
			pizzaBuild = new PizzaBuilder();
		}
		else {
			pizzaBuild = new SpecialtyPizza();
		}

		requestSize(pizzaBuild, infile);
		requestCrust(pizzaBuild, infile);

		if (selection == 1) {
			pizzaBuild->addTopping("Bacon");
			pizzaBuild->addTopping("Pepperoni");
			pizzaBuild->addTopping("Sausage");
			pizzaBuild->addTopping("Ham");
		}
		else if (selection == 2) {
			pizzaBuild->addTopping("Mushrooms");
			pizzaBuild->addTopping("Onions");
			pizzaBuild->addTopping("Green Peppers");
		}
		else if (selection == 3) {
			pizzaBuild->addTopping("Ham");
			pizzaBuild->addTopping("APineapple");
		}
		else if (selection == 4) {
			requestToppings(pizzaBuild, infile);
		}

		pizzaBuild->pizzaDone();

		string disChoice = "y";
		cout << "Are you a senior citizen (y/n): " << endl;
		getline(infile, disChoice);

		if (tolower(disChoice.at(0)) == 'y') {
			pizzaBuild->addDiscount("Senior Citizen", 0.1);
		}

		string delChoice = "y";
		cout << "Do you need this pizza delievered (y/n): " << endl;
		getline(infile, delChoice);

		if (tolower(delChoice.at(0)) == 'y') {
			pizzaBuild->addFee("Delivery", 2.50);
		}

		cout << "Your Pizza:" << endl;
		DecoratedPizza* finalPizza = pizzaBuild->pizzaDone();
		showOrder(finalPizza);
		pizzaCost += finalPizza->pizzaCost();

		cout << endl;

		cout << "Are you ordering another pizza" << endl;
		getline(infile, orderChoice);
	}
	infile.close();
	system("PAUSE");
	return 0;
}