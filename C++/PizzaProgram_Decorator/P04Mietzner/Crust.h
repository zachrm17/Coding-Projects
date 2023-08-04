//Zachary Mietzner
#if !defined CRUST_H
#define CRUST_H
#include <string>
#include <iostream>
#include "CrustInfo.h"
using namespace std;


class Crust {
	private:
		CrustS size; //Pre: none - Post: Sets size enum to variable
		CrustT type; //Pre: none - Post: Sets type enum to variable
	public:
		Crust(CrustS s, CrustT t); //Pre: Nothing - Post: Returns nothing
		~Crust(); //Pre: Nothing - Post: Returns nothing

		double crustCost(); //Pre: Nothing - Post: Returns crust cost
		CrustT getCrust(); //Pre: Nothing - Post: Returns crust type
		void setCrust(CrustT); //Pre: Nothing - Post: Returns nothing
		CrustS getSize(); //Pre: Nothing - Post: Returns crust size
		void setSize(CrustS); //Pre: Nothing - Post: Returns nothing
		string toString();//Pre: Nothing - Post: Returns crust information
};

#endif