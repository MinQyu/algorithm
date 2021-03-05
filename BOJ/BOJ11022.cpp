#include <iostream>
#include "H.h"
using namespace std;
void BOJ11022()
{
	int T;
	cin >> T;
	int* A = new int[T];
	int* B = new int[T];
	int* C = new int[T];
	for (int i = 1; i <= T; i++)
	{
		cin >> A[i] >> B[i];
		C[i] = A[i] + B[i];
	}
	for (int i = 1; i <= T; i++)
	{
		cout << "Case #" << i << ": " << A[i] << " + " << B[i] << " = " << C[i] << "\n";
	}
}