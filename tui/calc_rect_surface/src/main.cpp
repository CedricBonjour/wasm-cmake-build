#include <iostream>
#include "base_math/base_math.h"

int main()
{
    double length, width;

    // Prompt user for input
    std::cout << "Enter length of the rectangle: ";
    std::cin >> length;
    std::cout << "Enter width of the rectangle: ";
    std::cin >> width;

    // Calculate the perimeter
    double perimeter = rectangle_perimeter(length, width);

    // Output the result
    std::cout << "The perimeter of the rectangle is: " << perimeter << std::endl;

    return 0;
}