#include <iostream>
#include "H.h"
using namespace std;
void BOJ15552()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	int A, B, T;
	cin >> T;
	for (int i = 1; i <= T; i++)
	{
		cin >> A >> B;
		cout << A + B<<"\n";
	}
}
// �ӵ� ���� ������ ���ؿ��� main �Լ��� �ٲ㼭 ������(�ð����� 1��)