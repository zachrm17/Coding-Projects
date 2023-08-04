/*	Zachary Mietzner
	CS 318 - Dr. Brown
	Project Started: 9/22
	Project Completed: 9/30
*/
#include <iostream>
#include <string>
#include "Song.h"

using namespace std;

Song::Song(string nm, string lgth)
{
	name = nm;
	length = lgth;
}

Song::~Song()
{

}

string Song::getSongName()
{
	return name;
}

void Song::printSong()
{
	cout << "Song Name: " << name << endl;
	cout << "Song Length: " << length << endl;
}

string Song::getLength()
{
	return length;
}