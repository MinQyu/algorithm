#include "programmersL0.h"

int numCount(vector<int> array) {
    int answer = 0, i;
    string tmp;
    for (i = 0; i < array.size(); i++) {
        tmp.append(to_string(array[i]));
    }
    for (i = 0; i < tmp.length(); i++) {
        if (tmp[i] == '7') answer++;
    }
    return answer;
}

void numCount() {
    cout << numCount({ 7,77,17 }) << endl;
}