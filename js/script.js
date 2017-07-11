//Event Handling

document.addEventListener("DOMContentLoaded", function (event){
  $ajaxUtils.sendGetRequest("/data/product.json", function(res){
    console.log("inside getRequest");
    var x = JSON.parse(res.responseText);
    var categoryValue = getParameterByName('category');
    var category = x[categoryValue];
    console.log(category.length);
    var content = "<div class=\"row\"><div class=\"col-md-2\" style=\"border:1px solid\"></div>";
    content += "<div class=\"col-md-10\" style=\"margin-top:70px; margin-bottom:70px;\">";
    content += "<div class=\"container-fluid\">";
    for(var i = 0; i < category.length; i += 4) {
      content += "<div class=\"row\">";
      for(var j = 0; j < category.length; j++){
      content += "<div class=\"col-md-3\">";
      content += "<div class=\"thumbnail\">";
      content += "<a href=\"product.html?category="+categoryValue+"&id="+category[j].ProductId+"\">" +
        "<img src=\"http://via.placeholder.com/350x250?text=";
          var name = category[j].Name.split(" ");
          for(var k = 0; k < name.length - 1; k++)
            content += name[k] + "+";
          content += name[name.length-1];
          content += "\" style=\"margin-top: 5px; max-width:100%; max-height:100%;\">" +
                     "<div class=\"caption\">" +
                     "<a href=\"#\" class=\"link1\"><h4>" + category[j].Name + "</h4></a>" +
                     "<p style=\"font-size:12px; color:#8c8c8c\"><b>by "+ category[j].Seller +"</b></p>" +
                     "<span>" +
                     "<p style=\"font-size:18px;\"><b style=\"margin-right:10px;\">&#8377;" + category[j].DiscountedPrice + "</b><span style=\"font-size:16px; font-weight:300\"><b style=\"color:#8c8c8c\"><strike>&#8377;" + category[j].OriginalPrice + "</strike></b></span></p>" +
                     "</span>"+
                     "<div>"+
                     "<span><span style=\"margin:10px 10px 10px 0px; padding:5px; color:white; border-radius:5px; background-color:#388e3c; font-size:12px;\">" + category[j].Reviews.Average + "&#9733 </span><span style=\"color:#8c8c8c\">("+ category[j].Reviews.totalReviews + ")</span></span>"+
                     "</div>"+
                     "</div></a></div></div>";
        }
        content += "</div>";
    }
    content += "</div></div></div>";
    console.log(content);
    document.querySelector("#main-content").innerHTML = content;
  });
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
