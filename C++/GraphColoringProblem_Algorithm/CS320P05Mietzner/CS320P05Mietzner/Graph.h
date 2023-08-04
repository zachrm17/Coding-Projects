#pragma once
#include <string>
#include <vector>

using namespace std;

class Graph {
	private:
		vector<vector<bool>> adjMatrix;
		int numVertices;
	public:
		Graph(int numVertices);
		~Graph();

		void addEdge(int x, int y);			//Adds edge to graph
		void removeEdge(int x, int y);		//Removes edge from graph
	/*	void toString();	*/				//Prints Matrix
		bool edgeExists(int x, int y);		//Checks if edge exists
};