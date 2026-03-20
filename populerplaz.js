const images = [
    {image : "img-btn top places/ella.png" , text : " Ella" , link : " https://littlewanderbook.com/srilanka-en/ella-sri-lanka-highlights-tips/"} ,
    {image : "img-btn top places/gall.png" , text : " Gall" , link : " https://thinkingnomads.com/galle-sri-lanka/ "} ,
    {image : "img-btn top places/kandy.png" , text : "Kandy " , link : "https://www.britannica.com/place/Kandy-Sri-Lanka "} ,
    {image : " img-btn top places/sigiriya.png" , text : " Sigiriya" , link : "https://sigiriyafortress.com/ "} ,
    {image : "img-btn top places/yala.jpg " , text : "Yala National Park " , link : "https://www.yalasrilanka.lk"} ,
    {image : "img-btn top places/mirissa.jpg " , text : "Mirissa " , link : ""},
    {image : " img-btn top places/nuwaraeliya.jpg" , text : "Nuwara Eliya" , link : ""},
    {image : "img-btn top places/anuradhapuraya.jpg " , text : "Anuradhapura " , link : ""},
    {image : "img-btn top places/polonnaruwa.jpg " , text : "Polonnaruwa" , link : ""},
    {image : "img-btn top places/arugambey.jpg " , text : "Arumgam Bay " , link : ""},
    {image : " img-btn top places/trinco.jpj.jpg" , text : "Trincomalee" , link : ""},
    {image : "img-btn top places/habarana.jpg " , text : "Habarana " , link : ""},
    {image : " img-btn top places/minneriya.jpg" , text : " Minneriya National Park" , link : ""},
    {image : "img-btn top places/dambulla.jpg " , text : "Daudulla National Park " , link : ""},
    {image : "img-btn top places/dabullacurvetemple.jpg " , text : " Dambulla Cave Temple" , link : ""},
    {image : "img-btn top places/pidurangala.jpg" , text : " Pidurangala Rock " , link : ""}

]

const poplist = document.getElementById("img-btnid");

images.forEach((item ) => {

    const imgDiv = document.createElement("div");
    imgDiv.className = "img-btn" ;

    const alink =document.createElement("a");
    alink.href=item.link ;
    // alink.target = "_blank" ;

    const popimg = document.createElement("img");
    popimg.src = item.image ;

    const imgtxt = document.createElement("dev");
    imgtxt.className ="imgtext";
    imgtxt.innerText = item.text;

    alink.appendChild(popimg);
    imgDiv.appendChild(alink);
    imgDiv.appendChild(imgtxt);
    poplist.appendChild(imgDiv);





} )
