#pragma once
/*
	Dr. David Brown
	Node code for Linked structures
	Fall 2019
*/
#if !defined NULL
#define NULL 0
#endif

#if !defined LINK_H
#define LINK_H

template < class T >
class LinkNode {
private:
	T* data;
	LinkNode<T>* nextNode;
public:
	LinkNode(T* item);
	LinkNode();
	LinkNode(T* item, LinkNode next);

	bool setData(T* item);
	bool setNext(LinkNode next);
	T* getData();
	LinkNode getNext();
};

#endif

template<class T>
inline LinkNode<T>::LinkNode(T* item)
{
	data = item;
	nextNode = NULL;
}

template<class T>
inline LinkNode<T>::LinkNode()
{
	data = NULL;
	nextNode = NULL;
}

template<class T>
inline LinkNode<T>::LinkNode(T* item, LinkNode next)
{
	data = item;
	nextNode = next;
}


template<class T>
inline bool LinkNode<T>::setData(T* item)
{
	data = item;
	return true;
}

template<class T>
inline bool LinkNode<T>::setNext(LinkNode next)
{
	nextNode = next;
	return true;
}

template<class T>
inline T* LinkNode<T>::getData()
{
	return data;
}

template<class T>
inline LinkNode<T> LinkNode<T>::getNext()
{
	return nextNode;
}