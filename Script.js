 //this is not complete/code isnt working
 //i want to add more imges to the page by filling the form on the page, then when i click "add image" button, file explorer will open and i will select image from there, then after selecting eneter on file explorer, the page will reload automatically ,then it will appear on the page with all the pics
 
 function addImage(){
    //get info from form
    var get = document.getElementById("fm")

 //create the div2 where the div1 with info will be
    var d = document.createElement("div")
    d.setAttribute("id", "class", "forth" ,"firstClass")

    //if form is not empty create the element and add to the div/page
    if(get.value != null || get.value.trim()!= ""){

    //create the div where the info will be ..div1
    var ad = document.createElement("div")
    ad.setAttribute("id" ,"babyForth")
    ad.innerHTML = "\<p\>"+ get.value + "\</p\>"
    

    //add the div1 where the info created is, to the div2 that has the id "forth" that we create above in line 5
    //ad(div1) is added to div2
    document.getElementById("forth").appendChild(ad)
 }
    /*//now add div2(d) to the main "body" tag
    document.getElementsByTagName("body").appendChild(d)
*/

 }