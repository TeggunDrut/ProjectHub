#----------------------------------------------------------------
# Generated CMake target import file for configuration "Release".
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

# Import target "sfml-system" for configuration "Release"
set_property(TARGET sfml-system APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(sfml-system PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/libsfml-system.a"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/sfml-system-2.dll"
  )

list(APPEND _IMPORT_CHECK_TARGETS sfml-system )
list(APPEND _IMPORT_CHECK_FILES_FOR_sfml-system "${_IMPORT_PREFIX}/lib/libsfml-system.a" "${_IMPORT_PREFIX}/bin/sfml-system-2.dll" )

# Import target "sfml-main" for configuration "Release"
set_property(TARGET sfml-main APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(sfml-main PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_RELEASE "CXX"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/lib/libsfml-main.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS sfml-main )
list(APPEND _IMPORT_CHECK_FILES_FOR_sfml-main "${_IMPORT_PREFIX}/lib/libsfml-main.a" )

# Import target "sfml-window" for configuration "Release"
set_property(TARGET sfml-window APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(sfml-window PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/libsfml-window.a"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/sfml-window-2.dll"
  )

list(APPEND _IMPORT_CHECK_TARGETS sfml-window )
list(APPEND _IMPORT_CHECK_FILES_FOR_sfml-window "${_IMPORT_PREFIX}/lib/libsfml-window.a" "${_IMPORT_PREFIX}/bin/sfml-window-2.dll" )

# Import target "sfml-network" for configuration "Release"
set_property(TARGET sfml-network APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(sfml-network PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/libsfml-network.a"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/sfml-network-2.dll"
  )

list(APPEND _IMPORT_CHECK_TARGETS sfml-network )
list(APPEND _IMPORT_CHECK_FILES_FOR_sfml-network "${_IMPORT_PREFIX}/lib/libsfml-network.a" "${_IMPORT_PREFIX}/bin/sfml-network-2.dll" )

# Import target "sfml-audio" for configuration "Release"
set_property(TARGET sfml-audio APPEND PROPERTY IMPORTED_CONFIGURATIONS RELEASE)
set_target_properties(sfml-audio PROPERTIES
  IMPORTED_IMPLIB_RELEASE "${_IMPORT_PREFIX}/lib/libsfml-audio.a"
  IMPORTED_LOCATION_RELEASE "${_IMPORT_PREFIX}/bin/sfml-audio-2.dll"
  )

list(APPEND _IMPORT_CHECK_TARGETS sfml-audio )
list(APPEND _IMPORT_CHECK_FILES_FOR_sfml-audio "${_IMPORT_PREFIX}/lib/libsfml-audio.a" "${_IMPORT_PREFIX}/bin/sfml-audio-2.dll" )

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)
