


pieces = ["bp","br","bn","bb","bq","bk","wp","wr","wn","wb","wq","wk"]
document.addEventListener('load',goobin);

for(var j = 0; j < 12; j++) {

    var elems = document.getElementsByClassName(pieces[j]);
    for (var i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click',goobin);
        // elems[i].style["background-image"]=`url('https://makit.wtf/static/img/chess/${pieces[j]}.png')`;
    }
}

function goobin() {
    for(var j = 0; j < 12; j++) {

        document.body.style.border = "5px solid green";
        var elems = document.getElementsByClassName(pieces[j]);
        for (var i = 0; i < elems.length; i++) {
            // elems[i].style["background-image"]=`url('https://makit.wtf/static/img/chess/${pieces[j]}.png')`;
            elems[i].style.setProperty('background-image', `url('https://makit.wtf/static/img/chess/${pieces[j]}.png')`, 'important');
            
        }
    }
}
goobin();