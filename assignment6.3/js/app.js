

   
//Sum with For loop //
var add = 0;

             for (var num = 1; num <= 1000;  num++){   /* -- condition  -- updater*/
                  add =  add + num; 				    // -- body             
             };
            console.log("For loop: " + "Sum = " + add);  // Output            


//Sum with While loop //
var sum=0, number = 1;
             while(number <= 1000){    // -- condition
                   sum += number;     // -- body
				   number++;          // -- updater         
             };
             console.log("While Output: " + "Sum = " + sum); // Output




//Sum with Do - While loop //
var sum = 0;
				var number = 1;
				do {
				   sum += number;               // -- body
				   number++;                    // -- updater
				} while (number <= 1000);       // -- condition
				console.log("DO-while Output: " + "Sum = " + sum);    // Output
