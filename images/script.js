var index = 0;

show_image(index);

function show_image(i){
    index += 1;
    var year = document.getElementById("year");
    var images = document.getElementsByClassName("image");
    var title = document.getElementById('title');
    const watchName = ["RAZANETTI", "SANIEGE"];
    const years = ["1971", "1984"];

    for(i = 0; i < images.length; i++)
        images[i].style.display = "none"
    
    if (index > images.length -1)
        index = 0;

    if (index < 0)
    index = images.length - 1;

    images[index].style.display = "block";
    title.innerHTML = watchName[index++];
    year.textContent = years[index++];

    for(j = 0; j <title.length; j++)
        

    if(index > title.length -1)
        index = 0;

    if(index < 0)
        index = title.length -1;

}
