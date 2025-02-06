get_filename_component(TARGET_NAME ${CMAKE_CURRENT_SOURCE_DIR} NAME)
file(GLOB_RECURSE PROJECT_SRC_FILES src/*.cpp)


add_library(${TARGET_NAME} STATIC  ${PROJECT_SRC_FILES})
target_include_directories(${TARGET_NAME} PUBLIC ${CMAKE_CURRENT_SOURCE_DIR}/include/)
target_compile_features(${TARGET_NAME} PUBLIC cxx_std_17)



