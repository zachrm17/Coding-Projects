#include "Crust.h"

Crust::Crust(CrustS s, CrustT t)
{
	size = s;
	type = t;
}

Crust::~Crust()
{
}

double Crust::crustCost()
{
	double cost = 0.0;

	switch (size) {
	case S:
		cost += 5.99;
		break;
	case M:
		cost += 7.99;
		break;
	case L:
		cost += 9.99;
		break;
	}

	switch (type) {
	case THIN:
		cost += 0.00;
		break;
	case HAND:
		cost += 0.50;
		break;
	case PAN:
		cost += 1.00;
		break;
	}
	return cost;
}

CrustT Crust::getCrust()
{
	return type;
}

void Crust::setCrust(CrustT t)
{
	type = t;
}

CrustS Crust::getSize()
{
	return size;
}

void Crust::setSize(CrustS s)
{
	size = s;
}

string Crust::toString()
{
	string desc = ""; //Describing the Pizza

	switch (size) {
	case S:
		desc += "Small";
		break;
	case M:
		desc += "Medium";
		break;
	case L:
		desc += "Large";
		break;
	}

	switch (type) {
	case THIN:
		desc += "Thin Crust";
		break;
	case HAND:
		desc += "Hand Crust";
		break;
	case PAN:
		desc += "Pan Crust";
		break;
	}
	return desc;
}
