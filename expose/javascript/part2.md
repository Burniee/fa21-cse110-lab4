1. 3, it's because 'i' the variable that's being outputted is type 'var' so it's still under the scope when called, so it'll display its last known value.
2. 150, same thing as the previous answer, 'discountedPrice' is type 'var' so it's still under the scope of being called, so it'll display its last instance.
3. 150, same thing as the previous answer, 'finalPrice' is type 'var' so it's still under the scope of being called, so it'll display its last instance, where discountedPrice was 150 multiplied by 100 then divided by 100 is still 150.
4. The function will return an array with its contents being [50, 100, 150]. It's because we initialized variable 'discounted' as an empty array then pushed values into it at each instance of the for loop in function 'discountPrices'
5. it'll output an error doing variable 'i' being a variable type 'let' it's outside the scope of being called in line 12.
6. it'll output an error doing variable 'discountedPrice' being a variable type 'let' it's outside the scope of being called in line 12.
7. 150, 'finalPrice' is type 'let' so it's still under the scope of being called unlike the previous two question, and it'll display its last instance, which is 150
8. The function will return an array with its contents being [50, 100, 150]. It's because we initialized variable 'discounted' as an empty array then pushed values into it at each instance of the for loop in function 'discountPrices'
9. it'll output an error doing variable 'i' being a variable type 'let' it's outside the scope of being called in line 11.
10. 3, because that is the length of the array passed through the function
11. The function will return an array with its contents being [50, 100, 150]. Despite variable 'discounted' being type 'const' we're not reassigning its value, we're just pushing still into the already allocated space
12a. student["name"]
12b. student["Grad Year"]
12c. student.greeting()
12d. student["Favorite Teacher"]
12e. student.courseLoad[0]
13a. 32
13b. 1
13c. 3
13d. 3null
13e. 4
13f. 0
13g. 3undefined
13h. NaN
14a. true
14b. false
14c. true
14d. false
14e. false
14f. true
15. The '==' operator will convert both variables to the same type then compare, '===' operator will not convert any variables then compare
17. The result returned will be the array [2,4,6]. So first we start with modifyArray where we passed in the function 'doSomething' and the array [1,2,3]. So first we initalize a new array called newArr which we will be returning, then move onto a for loop who iterates from 0 to 2(representing the total index of the array passed through the function). For every iteration of this for-loop the 'newArr' variable pushes back 2 * the current iteration of the array that was passed in, so [1,2,3] turns to [2,4,6].
19. 
1
4
3
2
