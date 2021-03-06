#include <iostream>
#include "H.h"
using namespace std;
void BOJ10951()
{
	int A, B;
	while (1)
	{
		cin >> A >> B;
		if (cin.eof()) break; // EOF : 파일의 끝. 읽을 데이터가 없을 때 true값을 반환
		{
			cout << A + B << "\n";
		}
	}
}