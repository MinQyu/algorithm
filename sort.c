
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "common.h"


void ExchangeSort_t(int n, int *arr) {
	srand(time(NULL));
	int i, tmp;
	clock_t start, finish;
	double duration = 0;
	for (i = 0; i < n; i++) {
		arr[i] = rand() % n;
	}
	start = clock();
	for (int i = 0; i < n - 1; i++) {
		for(int j = i + 1; j < n; j++)
		if (arr[i] > arr[j]) {
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
		}
	}
	finish = clock();
	duration = (double)(finish - start) / CLOCKS_PER_SEC;
	printf("Exchange sort 수행시간 : %lf\n",duration);
}

void MergeArea(int arr[], int left, int mid, int right) {
	int fidx = left;
	int ridx = mid + 1;
	int i;
	int* sortArr = (int*)malloc(sizeof(int) * (right + 1));
	int sidx = left;
	while (fidx <= mid && ridx <= right) {
		if (arr[fidx] <= arr[ridx])
			sortArr[sidx] = arr[fidx++];
		else
			sortArr[sidx] = arr[ridx++];
		sidx++;
	}
	if (fidx > mid) {
		for (i = ridx; i <= right; i++, sidx++)
			sortArr[sidx] = arr[i];
	}
	else {
		for (i = fidx; i <= mid; i++, sidx++)
			sortArr[sidx] = arr[i];
	}
	for (i = left; i <= right; i++)
		arr[i] = sortArr[i];
	free(sortArr);
}

void MergeSort(int *arr, int left, int right){
	int mid;
	if (left < right)
	{
		mid = (left + right) / 2;
		MergeSort(arr, left, mid);
		MergeSort(arr, mid + 1, right);
		MergeArea(arr, left, mid, right);
	}
}

void MergeSort_t(int* arr, int left, int right) {
	srand(time(NULL));
	clock_t start, finish;
	double duration = 0;
	for (int i = 0; i <= right; i++) {
		arr[i] = rand() % right+1;
	}
	start = clock();
	MergeSort(arr, left, right);
	finish = clock();
	duration = (double)(finish - start) / CLOCKS_PER_SEC;
	printf("Merge sort 수행시간 : %lf\n", duration);
}

void QuickSort(int arr[], int left, int right) {
	int L = left, R = right;
	int temp;
	int pivot = arr[(left + right) / 2];
	while (L <= R) {
		while (arr[L] < pivot)
			L++;
		while (arr[R] > pivot)
			R--;
		if (L <= R) {
			if (L != R) {
				temp = arr[L];
				arr[L] = arr[R];
				arr[R] = temp;
			}
			L++; R--;
		}
	}
	if (left < R)
		QuickSort(arr, left, R);
	if (L < right)
		QuickSort(arr, L, right);
}

void QuickSort_t(int arr[], int left, int right) {
	srand(time(NULL));
	clock_t start, finish;
	double duration = 0;
	for (int i = 0; i <= right; i++) {
		arr[i] = rand() % right + 1;
	}
	start = clock();
	QuickSort(arr, left, right);
	finish = clock();
	duration = (double)(finish - start) / CLOCKS_PER_SEC;
	printf("Quick sort 수행시간 : %lf\n", duration);
}
int n = 0;
int count = 0;

void heap(int arr[], int k, int n) {
	int left = 2 * k;
	int right = (2 * k) + 1;;
	int bigger, tmp;
	if (right <= n) {
		if (arr[left] <= arr[right])
			bigger = right;
		else bigger = left;
	}

	else if (left <= n) bigger = left;
	else return;

	if (arr[bigger] > arr[k]) {
		tmp = arr[k];
		arr[k] = arr[bigger];
		arr[bigger] = tmp;

		if (count == 1) n++;
		heap(arr, bigger, n);
	}
}
void makeHeap(int arr[], int n) {
	for (int i = n / 2; i > 0; i--) {
		heap(arr, i, n);
	}
}
void heapSort(int arr[], int n) {
	int cnt;
	makeHeap(arr, n);
	count = 1;
	for (int i = n; i > 1; i--) {
		cnt = arr[1];
		arr[1] = arr[i];
		arr[i] = cnt;
		heap(arr, 1, i - 1);
	} 
}

void heapSort_t(int arr[], int n) {
	srand(time(NULL));
	clock_t start, finish;
	double duration = 0;
	for (int i = 0; i < n; i++) {
		arr[i] = rand() % n;
	}
	start = clock();
	heapSort(arr, n);
	finish = clock();
	duration = (double)(finish - start) / CLOCKS_PER_SEC;
	printf("Heap sort 수행시간 : %lf\n", duration);

}