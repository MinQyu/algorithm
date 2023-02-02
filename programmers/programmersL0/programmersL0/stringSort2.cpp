#include "programmersL0.h"

string stringSort2(string my_string) {
    string answer = "";
    int i;
    for (i = 0; i < my_string.length(); i++) {
        answer.push_back(tolower(my_string[i]));
    }
    sort(answer.begin(), answer.end());
    return answer;
}

void stringSort2() {
    cout << stringSort2("heLLo") << endl;
}