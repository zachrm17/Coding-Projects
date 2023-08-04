/*	Zachary Mietzner
	CS 318 - Dr. Brown
	Project Started: 9/22
	Project Completed: 9/30
*/
#if !defined CDS_H
#define CDS_H
#include "CD.h"

class CDs{
	private:
		CD** cds;
		int numCDs;
		int maxCDs;
		void resize();
	public:
		CDs(const char* filename);
		~CDs();
		void printCDs();
		int getNumCDs();
		void addCD(CD* s);
		void findRating(int rating);
		void findArtist(string name);
	
};

#endif