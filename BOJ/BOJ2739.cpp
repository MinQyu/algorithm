#include <iostream>
#include "H.h"
using namespace std;
void BOJ2739()
{
	int N;
	cin >> N;
	for (int i = 1; i <= 9; i++)
	{
		cout << N << " * " << i << " = " << N * i<<"\n";
	}
}