cmake_minimum_required(VERSION 3.31.5)
# add_definitions(-std=c++17)
# set (CMAKE_CXX_STANDARD 17)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/bin)

project(base_math)
add_subdirectory(libs/calc)
add_subdirectory(libs/shape)
add_subdirectory(libs/base_math)
add_subdirectory(tui/calc_rect_surface)



