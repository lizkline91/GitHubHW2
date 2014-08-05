
  var myArray = [

  {"avatar_url":"https://avatars.githubusercontent.com/u/115030?v=2",
  "name":"Calvin Webster",
  "location":"Charleston, SC",
  "followers":64,
  "following":96},

  {"avatar_url":"https://avatars2.githubusercontent.com/u/8241367?v=2&s=400",
  "name":"Charles Nguyen",
  "location":"Charleston, SC",
  "followers":7,
  "following":16},

  {"avatar_url":"https://avatars2.githubusercontent.com/u/7799207?v=2&s=400",
  "name":"William Gallop",
  "location":"Charleston, SC",
  "followers":6,
  "following":0},

  {  "avatar_url":"https://avatars0.githubusercontent.com/u/8247044?v=2&s=400",
  "name":"Ansley Jones",
  "location":"Charleston, SC",
  "followers":10,
  "following":9},

  {"avatar_url":"https://avatars0.githubusercontent.com/u/6947446?v=2&s=400",
  "name":"Brendan Quinn",
  "location":"Charleston, SC",
  "followers":7,
  "following":4}
  ];


var template = function(arrayName, $target) {
  var beginString = "";
  for (i = 0; i < myArray.length; i++) {

    beginString += "<div class=\"info\">"
    + "<img src=\"" + myArray[i].avatar_url + "\">"
    + "<h2>" + myArray[i].name + "</h2>"
    + "<ul>"
    + "<li>" + "Location: " + myArray[i].location + "</li>"
    + "<li>" + "Followers: " + myArray[i].followers + "</li>"
    + "<li>" + "Following: " + myArray[i].following + "</li>"
    + "</ul>"
    + "</div>";
  }

  $target.append(beginString);
}

  template(myArray, $(".profile"));
