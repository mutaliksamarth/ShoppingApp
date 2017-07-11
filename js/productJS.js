document.addEventListener("DOMContentLoaded", function(event) {
  $ajaxUtils.sendGetRequest("/data/product.json", function (res) {
    var cat = getParameterByName('category');
    var id = getParameterByName('id');
    var dat = (JSON.parse(res.responseText))[cat];

    var dat_;
    for (var i = 0; i < dat.length; i++) {
      if(id == dat[i].ProductId)
        dat_ = dat[i];
    }
    console.log(dat_.Seller);
    document.querySelector("#name").innerHTML = dat_.Name;
    document.querySelector("#rating-header").innerHTML = dat_.Reviews.Average + " &#9733";
    document.querySelector("#rating-header-number").innerHTML = dat_.Reviews.TotalReviews + " reviews";
    document.querySelector("#rating-header-rating").innerHTML = dat_.Reviews.TotalRatings + " ratings";
    document.querySelector("#discountedPrice").innerHTML = "&#8377; " + dat_.DiscountedPrice;
    document.querySelector("#originalPrice").innerHTML = "&#8377; " + dat_.OriginalPrice;
    document.querySelector("#seller").innerHTML = dat_.Seller;
    document.querySelector("#description").innerHTML = dat_.Description;
    var features_ = dat_.Features;
    var content = "";
    for (var i = 0; i < features_.length; i++) {

      content += '<li class="features_li">'+features_[i]+'</li>';
    }
    document.querySelector("#feat_ul").innerHTML = content;
    var services_ = dat_.Services;
    content="";
    for (var i = 0; i < services_.length; i++) {

      content += '<li class="features_li">'+services_[i]+'</li>';
    }
    document.querySelector("#serv_ul").innerHTML = content;
    content = "";
    var specs = dat_.Specifications;
    console.log(specs[0][1]);
    console.log(specs[0][1][0]);
    console.log(specs[0][1][0][1]);
    for (var i = 0; i < specs.length; i++) {
      content += '<div class="list-heading">' + specs[i][0] + '</div>';
      //console.log(specs[i][1][0][0]);
      for (var j = 0; j < specs[i][1].length; j++) {
        content += '<div class="row">';
        content += '<div class="col-md-3 subheading">'+ specs[i][1][j][0] +'</div><div class="col-md-9 list-attribute">'
        + specs[i][1][j][1] + '</div>';
        content += '</div>';
      }
    }
    document.querySelector("#specs-list-id").innerHTML = content;
    content="";
    document.querySelector("#star-overall-id").innerHTML = dat_.Reviews.Average + " &#9733";
    document.querySelector("#review-id").innerHTML = dat_.Reviews.TotalReviews + " Reviews";
    document.querySelector("#rating-id").innerHTML = dat_.Reviews.TotalRatings + " Ratings";

    var val = dat_.Reviews.star5/dat_.Reviews.MaxRated;
    val *= 100;
    val = Math.floor(val);
    document.querySelector("#star5").style.width = val + "%";
    val = dat_.Reviews.star4/dat_.Reviews.MaxRated;
    val *= 100;
    val = Math.floor(val);
    document.querySelector("#star4").style.width = val + "%";
    val = dat_.Reviews.star3/dat_.Reviews.MaxRated;
    val *= 100;
    val = Math.floor(val);
    document.querySelector("#star3").style.width = val + "%";
    val = dat_.Reviews.star2/dat_.Reviews.MaxRated;
    val *= 100;
    val = Math.floor(val);
    document.querySelector("#star2").style.width = val + "%";
    val = dat_.Reviews.star1/dat_.Reviews.MaxRated;
    val *= 100;
    val = Math.floor(val);
    document.querySelector("#star1").style.width = val + "%";
    document.querySelector("#star1-val").innerHTML = dat_.Reviews.star1;
    document.querySelector("#star2-val").innerHTML = dat_.Reviews.star2;
    document.querySelector("#star3-val").innerHTML = dat_.Reviews.star3;
    document.querySelector("#star4-val").innerHTML = dat_.Reviews.star4;
    document.querySelector("#star5-val").innerHTML = dat_.Reviews.star5;

    var cust_ = dat_.Reviews.CustomerReviews;
    console.log(cust_.length);
    for (var i = 0; i < cust_.length; i++) {
      content += '<div class="comments-heading" style="margin-top:20px;">' +
        '<span class="comments-rating">' + cust_[i].Rated + ' &#9733</span>' +
        '<span class="comments-heading-text">'+ cust_[i].ReviewHeading +'</span>' +
        '</div>' +
        '<div class="comments-description">' +
        '<p>' + cust_[i].ReviewBody + '</p>' +
        '</div>' +
        '<div class="comments-footer">' +
        '<span class="comments-user">' +
        '<span class="glyphicon glyphicon-ok"></span>'+
        '<span comments-user-type> certified buyer</span>' +
        '</span>' +
        '<span style="float:right;">' +
        '<span class="comments-like glyphicon glyphicon-thumbs-up"></span>' +
        '<span>' + cust_[i].Likes + '</span>' +
        '<span class="comments-dislike glyphicon glyphicon-thumbs-down"></span>' +
        '<span>' + cust_[i].Dislikes + '</span>' +
        '<span class="comments-dropdown dropdown">' +
        '<a href="" class="dropdown-toggle" data-toggle="dropdown" style="text-decoration:none; color: inherit;"><span class="caret"></span></a>' +
        '<ul class="dropdown-menu">' +
        '<li class="dropdown-item"><a class="comments-dropdown-li-a" href="#">Report Abuse</a></li>' +
        '</ul>' +
        '</span>' +
        '</span>' +
        '</div>';
    }
    document.querySelector("#customerReviews").innerHTML = content;
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
