# TypeScript Type Error: String in Number Array

This repository demonstrates a common type error in TypeScript when working with arrays of numbers. The error, "Type 'string' is not assignable to type 'number'," occurs because an array intended to hold only numbers contains a string element.

## Bug

The `combine` function attempts to concatenate two arrays of numbers. However, `arr2` contains the string "6", leading to a type error.

## Solution

The solution involves stricter type checking and potentially using type guards or type assertions to handle mixed-type arrays. The improved solution uses a type guard to ensure all array elements are numbers before combining them.