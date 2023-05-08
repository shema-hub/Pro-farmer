
/* exersise 1*/
const isEqualTo100 =(a,b) => a === 100 || b === 100 || (a +b) === 100;
console.log(isEqualTo100(100,0));
console.log(isEqualTo100(0,100));
console.log(isEqualTo100(20,80));
/* end*/

/* exersise 2 */
const getFileExtention =(str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtention('t.html'));
console.log(getFileExtention('webpack.config.js'))
/* end */


/* exercise 3*/
 const formatDate = (date = new Date()) => {
    const days = date.getDate( );
    const months = date.getMonth() +1;
    const years =date.getFullYear();
    return `${days}/${months}/${years}`;
 }
 console.log(formatDate());