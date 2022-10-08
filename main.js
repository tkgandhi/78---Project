var images = ["https://us.123rf.com/450wm/kitalek/kitalek2002/kitalek200200011/139909651-vector-illustration-handwritten-lettering-of-we-are-family-template-for-banner-greeting-card-postcar.jpg?ver=6https://i.postimg.cc/MGn9GJXw/family.jpg","https://www.kindpng.com/picc/m/211-2111471_cartoon-guy-drinks-while-using-a-computer-clipart.png", "https://assets.hooray-heroes.ca/books/loveyou-fm/default/characters/C01F.png?version=1661421145" , "https://thumbs.dreamstime.com/z/beautiful-brunette-girl-black-straight-hair-portrait-beautiful-brunette-girl-black-straight-hair-portrait-isolated-188688060.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYrfegimqyfo0krQlDMDpN1CnAo-FONpV6Xw&usqp=CAU"];
var names = ["My Family Book","Dad", "Mom", "Me", "Sister"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}