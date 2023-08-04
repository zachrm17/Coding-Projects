#include "Graph.h"
#include <iostream>
using namespace std;

Graph::Graph(int numVertices)
{
	int x, y;
	vector<bool> v = vector<bool>(numVertices, false);
	adjMatrix = vector<vector<bool>>(numVertices, v);

	/*this->numVertices = numVertices;
	adjMatrix = vector<vector<bool>>(numVertices);
	for (int i = 0; i < numVertices; i++) {
		adjMatrix[i] = vector<bool>(numVertices);
		for (int j = 0; j < numVertices; j++) {
			adjMatrix[x][y] = false;
		}
	}*/
}

Graph::~Graph()
{
	for (int i = 0; i < numVertices; i++) {
		adjMatrix.clear();
	}
}

void Graph::addEdge(int x, int y)
{
	adjMatrix[x][y] = true;
	adjMatrix[y][x] = true;
}

void Graph::removeEdge(int x, int y)
{
	adjMatrix[x][y] = false;
	adjMatrix[y][x] = false;
}

//void Graph::toString()
//{
//	for (int i = 0; i < numVertices; i++) {
//		cout << i << " : ";
//		for (int j = 0; j < numVertices; j++) {
//			cout << adjMatrix[i][j] << " ";
//			cout << endl;
//		}
//	}
//}

bool Graph::edgeExists(int x, int y)
{
	if (adjMatrix[x][y] == true || adjMatrix[y][x] == true)
		return true;
	else
		return false;
}
