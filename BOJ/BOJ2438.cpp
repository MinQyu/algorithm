#include <iostream>
#include"H.h"
using namespace std;
void BOJ2438()
{
	int N;
	cin >> N;
	for (int i = 1; i <= N; i++)
	{
		for (int k = 1; k <= i; k++) {
			cout << "*";
		}
		cout << "\n";
	}
}