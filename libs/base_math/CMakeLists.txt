get_filename_component(TARGET_NAME ${CMAKE_CURRENT_SOURCE_DIR} NAME)
file(GLOB_RECURSE PROJECT_SRC_FILES src/*.cpp)


add_library(${TARGET_NAME} STATIC  ${PROJECT_SRC_FILES})
target_include_directories(${TARGET_NAME} PUBLIC ${CMAKE_CURRENT_SOURCE_DIR}/include/)
target_compile_features(${TARGET_NAME} PUBLIC cxx_std_17)
target_link_libraries(${TARGET_NAME} PUBLIC calc shape)






if(CMAKE_SYSTEM_NAME MATCHES "Emscripten")
    set(MODULE_EXPORT_LIST 
        "add" 
        "rectangle_perimeter" 
    )


    foreach(item IN LISTS MODULE_EXPORT_LIST)
        list(APPEND modified_array "'_${item}'")
    endforeach()
    string(JOIN "," WASM_EXPORTED_FUNCTION_LIST ${modified_array})


    add_executable(wasm_${TARGET_NAME}  ${PROJECT_SRC_FILES})
    set_target_properties(wasm_${TARGET_NAME} PROPERTIES SUFFIX ".wasm")
    target_include_directories(wasm_${TARGET_NAME} PUBLIC ${CMAKE_CURRENT_SOURCE_DIR}/include/)
    target_compile_features(wasm_${TARGET_NAME} PUBLIC cxx_std_17)
    target_link_libraries(wasm_${TARGET_NAME} PUBLIC calc shape)
    target_link_options(wasm_${TARGET_NAME} PRIVATE
        "--no-entry" # No main function
        "-O3" # max optimization
        "-sWASM=1" # no js warpper
        "-lm"  # link-math standard libs 
        "-sEXPORTED_FUNCTIONS=[${WASM_EXPORTED_FUNCTION_LIST}]" # exposed functions
    )
  endif()