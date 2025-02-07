get_filename_component(TARGET_NAME ${CMAKE_CURRENT_SOURCE_DIR} NAME)
file(GLOB_RECURSE PROJECT_SRC_FILES src/*.cpp)


add_executable(${TARGET_NAME}  ${PROJECT_SRC_FILES})
target_include_directories(${TARGET_NAME} PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/include/)
target_compile_features(${TARGET_NAME} PRIVATE cxx_std_17)


target_link_libraries(${TARGET_NAME} PRIVATE base_math)