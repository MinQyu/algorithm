#include <iostream>
#include "H.h"
using namespace std;
void BOJ10951()
{
	int A, B;
	while (1)
	{
		cin >> A >> B;
		if (cin.eof()) break; // EOF : ������ ��. ���� �����Ͱ� ���� �� true���� ��ȯ
		{
			cout << A + B << "\n";
		}
	}
}