/*	Zachary Mietzner
	CS 318 - Dr. Brown
	Project Started: 9/22
	Project Completed: 9/30
*/
#include <iostream>
#include "CD.h"

using namespace std;

	CD::CD(string ttl, string art, int date, int rat, int songs)
	{
		title = ttl;
		artist = art;
		releaseDate = date;
		rating = rat;
		numSongs = songs;
		collection = new Songs(numSongs);
	}

	CD::~CD()
	{
	}

	string CD::getCDTitle()
	{
		return title;
	}

	string CD::getArtistName()
	{
		return artist;
	}

	void CD::printCD()
	{
		cout << "Album Name: " << title << endl;
		cout << "Artist: " << artist << "\t\tRelease Date: " << releaseDate << endl;
		cout << "Rating: " << rating << "\t\tNumber of Songs: " << numSongs << endl;
		collection->printSongs();
	}

	int CD::getNumSongs()
	{
		return numSongs;
	}

	int CD::getReleaseDate()
	{
		return releaseDate;
	}

	int CD::getRating() 
	{
		return rating;
	}

	void CD::addToSongs(Song * s)
	{
		collection->addSong(s);
	}