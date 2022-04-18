#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include "common.h"

int arr[10000];
int main() {
	int i, j, num;
	double duration = 0;
	printf("데이터 수 입력 : ");
	scanf_s("%d", &num);
	srand(time(NULL));
	for (i = 0; i < 5; i++) {
		ExchangeSort_t(num, arr);
		MergeSort_t(arr, 0, num - 1);
		QuickSort_t(arr, 0, num - 1);
		heapSort_t(arr, num);
		printf("\n");
	}

}
