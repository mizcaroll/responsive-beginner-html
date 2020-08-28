function newPara() {
  //this creates a heading
  var elementH = document.createElement("h1");

  var moretest = document.getElementById("moretest");

  moretest.appendChild(elementH);

  var textH = document.createTextNode("How to Pipe Dots");

  elementH.appendChild(textH);

  //this creates a paragraph
  var element = document.createElement("p");

  moretest.appendChild(element);

  var text = document.createTextNode("Perfect for borders, piping meringues or adding simple decorations to cakes and cookies, the dot is an easy technique to master. Using any round decorating tip, simply squeeze the bag to form a dot. If your dots have small points after pulling the tip away, you can dip your finger in cornstarch and pat it down to smooth it out.");

  element.appendChild(text);

  //hides the button after it is clicked once
  document.getElementById("readmore").style.display = "none";
}
