#include <iostream>
#include <vector>
#include <climits>

int main() {
    std::vector<int> v = {8, 4, 1, 7, 9};
    int min = INT_MAX;
    int smin = INT_MAX;
    int max = INT_MIN;

    for(int i = 0; i < v.size(); i++) {
        if(v[i] < min) { // smallest
            min = v[i];
            smin = min;
        } 

        if(v[i] < smin && v[i] >= smin) { // second smallest
            smin = v[i];
        }
        
        if(v[i] > max) { // largest
            max = v[i];
        } 
    }
 
    std::cout << "Smallest : " << min << std::endl;
    std::cout << "Second Smallest : " << smin << std::endl;
    std::cout << "Largest : " << max << std::endl;

    return 0;
} 