function loader(title){
    var root = getRootPath();
    var word = root.replace(window.location.protocol + "//" + window.location.host + "/", "");


    $("#head").load(root+ "/content/head.html");
    $('title#tt').text(title);

    $("#top-nav-barss").load(root+ "/content/top-nav.html");
    $("#side-nav-barss").load(root+ "/content/side-nav.html");
    $("#side-nav-bars").load(root+ "/content/side-nav-midterm.html");
    $("#side-nav-bars-finals").load(root+ "/content/side-nav-finals.html");
    $("#footer").load(root+ "/content/footer.html");
    $("#footer").after().load(root+ "/content/scripts.html");
}

function getIndex() {
    var fullPath = window.location.href;
    var index = "";
    if(fullPath.indexOf("index.html") >= 0){
        index = fullPath.indexOf("/index.html");
    }

    if(fullPath.indexOf("page") >= 0){
        index = fullPath.indexOf("/page");
    }

    return index;
}

function getRootPath(){
    var fullPath = window.location.href;
    return fullPath.substr(0, getIndex());
}

