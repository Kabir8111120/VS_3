var images = ["WIN_20211022_15_01_00_PRO (2).jpg" , "WIN_20211022_15_06_03_PRO.jpg" , "pp (3).jpg" , "pp (4).jpg" , "WIN_20211022_14_57_27_PRO (2).jpg" , "WIN_20211022_15_08_50_PRO.jpg" , "https://i.postimg.cc/MKdhy06Z/family.jpg"];
var names = ["Viney Kumar Sehgal" , "Suman Sehgal" , "Vaibhav Sehgal" , "Sonali Sehgal" , "Kabir Sehgal" , "Saanvi Sehgal" , "Family Book"];
var i = 0;
function update(){
 if (i == 7) {
   i = 0;
 }
 document.getElementById("family_member_name").innerHTML = names[i];
 document.getElementById("family_member_image").src = images[i];
 i++;
}