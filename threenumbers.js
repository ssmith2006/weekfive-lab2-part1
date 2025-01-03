"use strict";



function findSmallest(a,b,c) {

   if(a < b && a < c){
        document.write(a)
   }else if (b < a && b < c){
        document.write(b)
   }else{
        document.write(c)
   }
}

findSmallest (50, -22, 0);
document.write ('<br>');
findSmallest (2500, 60, -17);
document.write ('<br>');
findSmallest (-35, -21, -1000);
document.write ('<br>');