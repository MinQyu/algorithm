#include "H.h"
#include <iostream>
using namespace std;
void BOJ1330()
{
    int A, B;
    cin>>A >>B;
    if (A > B)
    {
        cout << ">";
    }
    else if (A < B)
    {
        cout << "<";
    }
    else
    {
        cout << "==";
    }
}
