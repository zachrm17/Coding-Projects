#pragma once
/*
	Dr. David Brown
	Code for Linked structures
	Fall 2019
*/
#if !defined LINKLIST_H
#define LINKLIST_H

#include "LinkNode.h"
#include "LinkListIterator.h"
#include <iostream>

template < class T >
class ListLink {
private:
	LinkNode<T>* head;
	int size;
	LinkNode<T>* find(int index);

public:
	ListLink();
	~ListLink();

	bool isEmpty();
	int size();

	void removeAll();
	bool remove(int index);
	T* get(int index);
	bool add(int index, T* item);
	bool add(T* item);

	LinkListIterator<T>* iterator();
};

template < class T >
ListLink<T>::ListLink() {
	head = NULL;
	size = 0;
}

template < class T >
ListLink<T>::~ListLink() {
	removeAll();
}

template < class T >
bool ListLink<T>::isEmpty() {
	return size == 0;
}

template < class T >
int ListLink<T>::size() {
	return size;
}

template < class T >
void ListLink<T>::removeAll() {
	//loop over the list, deleting the nodes the actual items are not deleted
	if (size == 0) return;

	NextNode<T>* curr = head;
	NextNode<T>* prev = NULL;
	while (curr != NULL) {
		prev = curr;
		curr = curr->getNext();
		prev->setNext(NULL);
		delete prev;
	}

	size = 0;
	head = NULL;
}

template < class T >
LinkNode<T>* ListLink<T>::find(int index) {
	NextNode<T>* node = head;
	for (int i = 1; i < index; i++) {
		node = node->getNext();
	}
	return node;
}

template < class T >
T* ListLink<T>::get(int index) {
	T* item = NULL;

	if (index >= 1 && index <= size) {
		NextNode<T>* curr = find(index);
		item = curr->getItem();
	}

	return item;
}

template < class T >
bool ListLink<T>::add(T* item) {
	return add(size + 1, item);
}

template < class T >
bool ListLink<T>::add(int index, T* item) {
	if (index < 1 || index > size + 1) {
		return false;
	}

	NextNode<T>* node = new NextNode<T>(item);
	if (index == 1) {
		node->setNext(head);
		head = node;
	}
	else {
		NextNode<T>* prev = find(index - 1);
		NextNode<T>* curr = prev->getNext();
		prev->setNext(node);
		node->setNext(curr);
	}
	size++;
	return true;
}

template < class T >
bool ListLink<T>::remove(int index) {
	if (index < 1 || index > size) {
		return false;
	}

	if (index == 1) {
		NextNode<T>* node = head->getNext();
		delete head;
		head = node;
	}
	else {
		NextNode<T>* prev = find(index - 1);
		NextNode<T>* curr = prev->getNext();
		NextNode<T>* after = curr->getNext();
		prev->setNext(after);
		delete curr;
	}
	size--;
	return true;
}

template < class T >
LinkListIterator<T>* ListLink<T>::iterator() {
	ListLinkIterator<T>* iter = new ListLinkIterator<T>(head);
	return iter;
}

#endif