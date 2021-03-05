#include <iostream>
#include "H.h"
using namespace std;
void BOJ11021()
{
	int A, B, T;
	cin >> T;
	int *C = new int[T];
	for (int i = 1; i <= T; i++)
	{
		cin >> A >> B;
		C[i] = A + B;
	}
	for (int i = 1; i <= T; i++)
	{
		cout << "Case #" << i << ": " << C[i]<<"\n";
	}
}