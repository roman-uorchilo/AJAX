  for(i=0;i<data.length;i++){
        $("table tbody").append(`
          <tr>
            <td>`+data[i].id+`</td>
            <td>`+data[i].NameInput+`</td>
            <td>`+data[i].LocationInput+`</td>
            <td>`+data[i].DateInput+`</td>
            <td>`+data[i].StatutoryfundInput+`</td>
            <td>`+data[i].HeadInput+`</td>
            <td>`+data[i].ActivityInput+`</td>
            <td>`+data[i].NomberofjobsInput+`</td>
            <td>`+data[i].ComissioningYear+`</td>
            <td><a class="delete" href="#" data-id="`+data[i].id+`">Delete</a>
          </tr>
          `);
      }
    });
  });

$(document).ready (function (){
  $("#inputBtn").bind("click", function(){
      $.ajax({
          metdod: "POST",
          url: "table.php",
          data: {
              RegionName: $("#NameInput").val(), 
              UkraineRegionName: $("#LocationInput").val(), 
              Name: $("#DateInput").val(), 
              Location: $("#LocationInput").val(), 
              Type: $("#StatutoryfundInput").val(), 
              OilSize: $("#HeadInput").val(), 
              GasSize: $("#ActivityInput").val(),
              OpeningYear :$("#OpeningYearInput").val(),
              ComissioningYear: $("#NomberofjobsInput").val(),
          },
          dataType: "html",
          beforeSend: funcBefore,
          success: funcSuccess
      });
  });
});

    $(document).on("click",".delete",function(e){
      e.preventDefault();
