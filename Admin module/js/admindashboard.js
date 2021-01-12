$(document).ready(function() {
  $("a").on("click", function() {
    $cat = $(this).text();
    console.log("Text:", $cat);

    $("#tableData").text("");
    $.get("http://localhost:4000/" + $cat, function(data, status) {
      for ($i = 0; $i < data.length; $i++) {
        $("#tableData").append('<tr id="row' + data[$i].id + '"></tr>');
        $("#row" + data[$i].id + "").append(
          "<td>" + data[$i].Question + "</td>"
        );

        $("#row" + data[$i].id + "").append(
          '<td><button id="2" class="update btn btn-secondary" qid="' +
            data[$i].id +
            '" >Update</button></td>'
        );

        $("#row" + data[$i].id + "").append(
          '<td><button id="btn' +
            data[$i].id +
            '" class="delete btn btn-danger" qid="' +
            data[$i].id +
            '">Delete</button></td>'
        );
      }
    });

    $("body").delegate(".update", "click", function() {
      $url = $(this).attr("qid");

      $.get("http://localhost:4000/" + $url, function(data, status) {
        $("#question").val($data[$url].Question);
        $("#option1").val($data[$url].Option[0]);
        $("#option2").val($data[$url].Option[1]);
        $("#option3").val($data[$url].Option[2]);
        $("#option4").val($data[$url].Option[3]);

        $("#correctans").val($data[$url].Correctans);
        $("#weightage").val($data[$url].Weightage);
      });

      $.ajax({
        url: "http://localhost:4000/" + $cat + "/" + $url,
        type: "PUT",
        data: {
          Question: "Updated question is done"
        },
        success: function(data) {
          alert("Data: " + data + "\nStatus: " + status);
        }
      });
    });
  });

  $("body").delegate(".delete", "click", function() {
    $url = $(this).attr("qid");
    $.ajax({
      url: "http://localhost:4000/" + $cat + "/" + $url,
      type: "DELETE",
      data: {},
      success: function(data) {
        alert("Data: " + data + "\nStatus: " + status);
      }
    });
  });

  $("#add").click(() => {
    document.getElementById("myForm").style.display = "block";
  });

  $("#close").click(() => {
    document.getElementById("myForm").style.display = "none";
  });

  $("#add_que").click(() => {
    console.log("hello");
    $cname = $("#category").val();
    $question = $("#question").val();
    $option1 = $("#option1").val();
    $option2 = $("#option2").val();
    $option3 = $("#option3").val();
    $option4 = $("#option4").val();

    $correctans = $("#correctans").val();
    $weightage = $("#weightage").val();

    // for uploading question image

    $("#urlText").keyup(function() {
      $("#img").attr("src", $("#urlText").val());
    });

    $.ajax(
      {
        url: "http://localhost:4000/" + $cname,
        type: "POST",
        data: {
          Question: $question,
          Option: [$option1, $option2, $option3, $option4],
          Correctans: $correctans,
          Weightage: $weightage
        }
      },
      function(data, status) {
        alert("Data: " + data + "\nStatus: " + status);
        console;
      }
    );
  });
});
