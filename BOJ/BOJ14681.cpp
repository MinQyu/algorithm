#include "H.h"
#include <iostream>
using namespace std;
void BOJ14681()
{
	int x, y;
	cin >> x >> y;
	if (x > 0 && y > 0)
	{
		cout << "1";
	}
	else if (x < 0 && y > 0)
	{
		cout << "2";
	}
	else if (x < 0 && y < 0)
	{
		cout << "3";
	}
	else if (x > 0 && y < 0)
	{
		cout << "4";
	}
}