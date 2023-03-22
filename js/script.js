// Copyright (c) 2023 Dominic M. All rights reserved
//
// Created by: Dominic M.
// Created on: March 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function myButtonClicked () {
  // input
  const base = parseInt(document.getElementById('base-length').value)
  const height = parseInt(document.getElementById('height-triangle').value)

  // process
  const area = (base * height) / 2

  // output
  document.getElementById('area').innerHTML = 'The Area of the triangle is: ' + area + ' cm²'
}
