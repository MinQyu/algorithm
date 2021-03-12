#include <iostream>
#include <algorithm>
#include "H.h"
using namespace std;
void BOJ1546() {
	int n;
	double S = 0;
	cin >> n;
	double c = n;
	double* N = new double[n];
	for (int i = 0; i <= n-1; i++)
	{
		cin >> N[i];
	}
	sort(N, N + n);
	double M = N[n-1];
	for (int i = 0; i <= n-1; i++) {
		S = S + (N[i] / M * 100);
	}
	cout << S / c;
}