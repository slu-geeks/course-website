
function loader(title){
    var root = getAbsolutePath(window.location.href);

    $("#head").load(root+ "content/head.html");
    $('title#tt').text(title);

    $("#top-nav-barss").load(root+ "content/top-nav.html");
    $("#side-nav-barss").load(root+ "content/side-nav.html");
    $("#footer").load(root+ "content/footer.html");
    $("#footer").after().load(root+ "content/scripts.html");
}

function getAbsolutePath(fullPath) {
    var absolutePath = "";
    if(fullPath.indexOf("index.html") >= 0){
        absolutePath = fullPath.substr(0, fullPath.indexOf("index.html"));
    }

    if(fullPath.indexOf("page") >= 0){
        absolutePath = fullPath.substr(0, fullPath.indexOf("page"));
    }

    return absolutePath;
}