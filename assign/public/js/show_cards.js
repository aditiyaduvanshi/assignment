
function showcards(temp1){
  //alert(temp1);
  var inn = "<div class='row'>";

  for (var i = d; i < d + 12; i++) {

      //console.log(temp1[i].winner);
    inn += '<a href="#"><div class="col-sm-3 div2 polaroid box" id='+ docs[i].id+' onClick="reply_click(this.id,1)"><p id="head"><b>' + docs[i].team1 + " VS " + docs[i].team2 + "</b></p>" +
      "<table>" +
      "<tr>" +
      "<td><b>Winner</b></td>" +
      "<td>" + temp1[i].winner + "</td>" +
      "</tr>" +
      "<tr>" +
      "<td><b>Venue</b></td>" +
      "<td>" + temp1[i].venue + "</td>" +
      "</tr>" +
      "<tr>" +
      "<td><b>Season</b></td>" +
      "<td>" + temp1[i].season + "</td>" +
      "</tr>" +
      "</table>" +
      "</div></a>";

  }
  inn += '</div>';

  var len = docs.length;
  var num = len / 12;

  inn += '<div class="container div1 text-center"><ul class="pagination pagination pagination-lg">'

  for (var x = 1; x <= num; x++) {
    var m = (x - 1) * 12 + 1;
    inn += '<li><a href = "#" onclick="d=' + m + ';getdata()">' + x + '</a></li>'
  }
  inn += '</ul></div>'
  //alert("I'm near inn")
  document.getElementById("para").innerHTML = inn;

}

  function filter(){
    var x = document.forms["filter-form"]["year"].value;
    x = parseInt(x);
    //alert(x);
    var y = document.forms["filter-form"]["wol"].value;
    //alert(y);
    //alert(temp);
    var team = document.getElementById("msg").value;
    //alert(team);
    var temp1 = [];

    //alert(temp.length);
    if(y == "win"){

    for(s=0;s<temp.length;s++){
      //console.log(d);
        if(temp[s].winner == y){
        //console.log(temp[s].season, x);
        temp1.push(temp[s]);
        //console.log(temp[s].winner);}
        //alert(temp1[0].winner);
    }
  }}
  else{
    for(s=0;s<temp.length;s++){
      if((temp[s].winner != team)){
        temp1.push(temp[s]);
      }
    }
  }


    // if(x == "" && y == "")
    // {
    //   alert("please select what to filter");
    //
    // }
    // else if(x!="" && y=="")
    // {
    //     for(var j=0;j<temp.length;j++)
    //     {
    //       if(temp[j].season == x && ((temp[j].team1 == team)||(temp[j].team2 == team)) )
    //       {
    //         temp1.push(temp[j]);
    //       }
    //     }
    // }
    // else if(x=="" && y!="")
    // {
    //
    //
    // }


    //console.log(temp1);
    showcards(temp1);

  }
