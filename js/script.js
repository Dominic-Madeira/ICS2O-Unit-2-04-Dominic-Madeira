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
  const params = new URLSearchParams(document.location.search)

  const base = params.get('b')
  const height = params.get('h')

  // process
  const area = (base * height) / 2

  // output
  document.getElementById('dimensions').innerHTML = 'The base of the triangle is: ' + base + ' cm'
  document.getElementById('area').innerHTML = 'The Area of the triangle is: ' + area + ' cm²'
}
