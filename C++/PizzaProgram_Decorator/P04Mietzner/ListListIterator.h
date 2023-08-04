#pragma once
/*
	Dr. David Brown
	Code for Linked structures
	Fall 2019
*/

#if !defined LIST_LINKED_ITERATOR
#define LIST_LINKED_ITERATOR

#include "LinkNode.h"

template < class T >
class LinkListIterator
{
private:
	LinkNode<T>* ref;

public:
	LinkListIterator(LinkNode<T>* head);
	~LinkListIterator();

	bool hasNext();
	T* next();
};

template<class T>
inline LinkListIterator<T>::LinkListIterator(LinkNode<T>* head) {
	ref = head;
}

template<class T>
inline LinkListIterator<T>::~LinkListIterator() {
	ref = NULL;
}

template<class T>
inline bool LinkListIterator<T>::hasNext() {
	return ref != NULL;
}

template<class T>
inline T* LinkListIterator<T>::next()
{
	T* item = NULL;

	if (hasNext()) {
		item = ref->getItem();
		ref = ref->getNext();
	}
	return item;
}

#endif