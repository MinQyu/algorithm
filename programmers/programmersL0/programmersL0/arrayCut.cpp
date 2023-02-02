#include "programmersL0.h"

vector<string> solution(string my_str, int n) {
    string tmp;
    vector<string> answer;
    while (!my_str.empty()) {
        if (my_str.length() >= n) {
            tmp.append(my_str, 0, n);
            my_str.erase(0, n);
        }
        else {
            tmp.append(my_str);
            my_str.erase(0, n);
        }
        answer.push_back(tmp);
        tmp.clear();
    }
    return answer;
}
void arrayCut() {
    vector<string> tmp = solution("abc1Addfggg4556b", 6);
    int i;
    for (i = 0; i < tmp.size(); i++) {
        cout << tmp[i] << endl;
    }
}