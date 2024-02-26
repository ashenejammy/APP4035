import React from "react";
const Hello=()=>{
    // return(
    //     <div>
    //         <h1>Siuuuu</h1>
    //     </div>
    // )
    var sem='SEMESTER: SPRING 2024';
    var course='COURSE: APT';
    var subject='SUBJECT: WEB FRAMEWORKS';
    var day='DAYS: MONDAY/WEDNESDAY';
    var time='TIME: 11.00 AM';
return React.createElement('div',null,sem, <br/ >,course,<br/ >,subject,<br/ >,day,<br/ >,time)
}
export default Hello