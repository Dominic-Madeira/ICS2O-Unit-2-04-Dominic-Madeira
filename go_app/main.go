// Created by: Mr Coxall
// Created on: Sep 2020
//
// This program finds the area and perimeter of a rectangle

package main

import "fmt"

func main() {
	// This function finds the area and perimeter of a rectangle
	var base int
	var height int
	var area int

	// input
	fmt.Println("This program finds the area and perimeter of a rectangle.")
	fmt.Println()
	fmt.Print("Enter the base length (cm): ")
	fmt.Scanln(&base)
	fmt.Print("Enter the height (cm): ")
	fmt.Scanln(&height)

	// process
	area = (base * height) / 2

	// output
	fmt.Println()
	fmt.Println("The area is:", area, "cm².")
	fmt.Println("\nDone.")
}
