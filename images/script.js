var index = 0;
var yearW = 0;
var titleNew = 0;
var watchPrice = 0;


show_image(index);

function show_image(i){
    index += 1;
    var year = document.getElementById("year");
    var images = document.getElementsByClassName("image");
    var title = document.getElementById('title');
    var price = document.getElementById("price");
    var watchName = ["DIUEGE", "SANIEGE"];
    var years = ["1971", "1992"];
    var priceWatch = ["$499", "$515"]

    for(i = 0; i < images.length; i++)
        images[i].style.display = "none"
    
        if (index > images.length -1)
            index = 0;
    images[index].style.display = "block";

    title.innerText = watchName[titleNew++];
    
    if(titleNew > watchName.length -1)
        titleNew = 0;


    year.innerText = years[yearW++];

    if(yearW > years.length -1)
        yearW = 0;

    price.innerText = priceWatch[watchPrice++];

    if(watchPrice > priceWatch.length -1)
        watchPrice = 0;
}
