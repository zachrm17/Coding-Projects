/*	Zachary Mietzner
	CS 318 - Dr. Brown
	Project Started: 9/22
	Project Completed: 9/30
*/
#include <iostream>
#include <fstream>
#include "CDs.h"


using namespace std;

void CDs::resize()
{
	int newMax = maxCDs * 2;
	CD** newS = new CD*[newMax];
	for (int i = 0; i < maxCDs; i++) {
		newS[i] = cds[i];
	}
	delete[] cds;
	cds = newS;
	maxCDs = newMax;
}

CDs::CDs(const char* filename)
{
	ifstream inFile;
	string ttl, art, nm, lgth;
	int date, songs, rat;

	int songNum = 0;

	numCDs = 0;
	maxCDs = 2;
	cds = new CD* [maxCDs];

	inFile.open(filename);
	while (!inFile.eof()) 
	{
		if (maxCDs == numCDs) {
			resize();
		}
		getline(inFile, ttl);
		getline(inFile, art);
		inFile >> date;
		inFile >> rat;
		inFile >> songNum;
		inFile.ignore();
		CD* c = new CD(ttl, art, date, rat, songNum);
		for (int i = 0; i < songNum; i++) {
			getline(inFile, lgth, ',');
			getline(inFile, nm);
			Song* s = new Song(nm, lgth);
			c->addToSongs(s);
		}
		addCD(c);
	}
	inFile.close();
}

CDs::~CDs()
{
}

void CDs::printCDs()
{
	cout << "CD Information" << endl;
	for (int i = 0; i < numCDs; i++) {
		cds[i]->printCD();
	}
}

int CDs::getNumCDs()
{
	return numCDs;
}

void CDs::addCD(CD* s)
{
	if (maxCDs == numCDs) resize();
	cds[numCDs] = s;
	numCDs++;
}

void CDs::findRating(int rating)
{
	int cdRating;

	for (int i = 0; i < numCDs; i++) {
		cdRating = cds[i]->getRating();
		if (cdRating >= rating)
			cds[i]->printCD();
	}
}


void CDs::findArtist(string name)
{
	string artistName;

	for (int i = 0; i < numCDs; i++) {
		artistName = cds[i]->getArtistName();
		if (name == artistName)
			cds[i]->printCD();
	}

}

