/*	Zachary Mietzner
	CS 318 - Dr. Brown
	Project Started: 9/22
	Project Completed: 9/30
	*/
#include <iostream>
#include <fstream>
#include "Songs.h"


using namespace std;

void Songs::resize()
{
	int newMax = maxSongs * 2;
	Song** newS = new Song*[newMax];
	for (int i = 0; i < maxSongs; i++) {
		newS[i] = songs[i];
	}
	delete[] songs;
	songs = newS;
	maxSongs = newMax;
}

Songs::Songs(int numSongs)
{
	maxSongs = 2;
	songs = new Song*[numSongs];
}

Songs::~Songs()
{
	for (int i = 0; i < numSongs; i++) {
		delete songs[i];
	}
	delete[] songs;
}

void Songs::printSongs()
{
	cout << "Song Information" << endl;
	for (int i = 0; i < numSongs; i++) {
		songs[i]->printSong(); //Calls song function from Song.cpp & prints every song
	}
}

int Songs::getNumSongs()
{
	return numSongs;
}

void Songs::addSong(Song * s)
{
	if (maxSongs == numSongs) resize();
	songs[numSongs] = s;
	numSongs++;
}

int Songs::findSong(string name)
{
	int index = -1;
	string songName;

	for (int i = 0; i < numSongs; i++) {
		songName = songs[i]->getSongName();
		if (name.compare(songName) == 0)
			index = i;
	}
	return index;
}