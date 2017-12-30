   var finish1=0, finish2=0, finish3=0, finish4=0, finish5=0, finish6=0, actmul=.85, agemul=3, bbmul=1, wght=1, showmode=0, week=0, tooltipcreated=0, acttext="Wenig", agetext="im 1-2 Monat seines Lebens", sldr_act_desc=["Wenig", "Normalo", "Aktiv"], sldr_age_desc=["Welpe", "Junior", "Junghund", "Erwachsener", "Senior"];
        function calculate() {
          $.ajax({
            url: "/barf-calculator/calc.php",
            type: "POST",
            data: $("#mydog").serialize(),
            dataType: "json"
          }).done(function(data) {
            console.info(data);
            $.each(data, function(key, value) {
              if($("#" + key)) {
                if(key=="oel" || key=="mv") {
                  $("#" + key).text(value + " TL");
                  $("#" + key + "we").text(value*7 + " TL");
                } else if(key=="calc") {
                  $("#" + key).text(value + " mg");
                  $("#" + key + "we").text(value*7 + " mg");                  
                } else {
                  $("#" + key).text((value).toFixed(0) + " g");
                  $("#" + key + "we").text((value*7).toFixed(0) + " g");
                }
              }
            });
            if(data["oel"]==2) $("#oel").text("1-2 TL");
            if(data["oel"]==3) $("#oel").text("2-3 TL");
          })
          .fail(function(data) {
            console.info(data.responseText);
            alert( "error" );
            
          })
          .always(function(data) {
            //console.info (data);
            
          });
          
        }
        
        $(function() {
                  
          var select_a = $( "#aktivitaet" );
          var slider_a = $( "<div id='slider'></div>" ).insertAfter( select_a ).slider({
            min: 1,
            max: 5,
            range: "min",
            value: select_a[ 0 ].selectedIndex + 1,
            slide: function( event, ui ) {
              select_a[ 0 ].selectedIndex = ui.value - 1;
            }
          });
          $( "#aktivitaet" ).change(function() {
            slider_a.slider( "value", this.selectedIndex + 1 );
          });
		  
          var select = {"gewicht":"","werdegewicht":""};
          var slider = {"gewicht":"","werdegewicht":""};

          $.each(select, function(key,value) { 
          
            select[key] = $( "#" + key );
            slider[key] = $( "<div id='slider'></div>" ).insertAfter( select[key] ).slider({
              min: 1,
              max: 100,
              range: "min",
              value: select[key].val(),
              slide: function( event, ui ) {
                select[key].val(ui.value);
              }
            });   
            $( "#" + key ).keyup(function() {
              val = $(this).val();
              val = val.replace(/[^0-9\.]/g,'');
              if($(this).val() == val) {
                slider[key].slider( "value", val );
                return;
              }
              if(val<1) val=1;
              if(val>100) val=100;
              slider[key].slider( "value", val );
              $(this).val(val);
            });                         
          });
          
          var select1 = {"gf":"","kf":""};
          var slider1 = {"gf":"","kf":""};

          $.each(select1, function(key,value) { 
          
            select1[key] = $( "#" + key );
            slider1[key] = $( "<div id='slider'></div>" ).insertAfter( select1[key] ).slider({
              min: 1,
              max: 2,
              range: "min",
              value: select1[key][0].selectedIndex + 1,
              slide: function( event, ui ) {
                select1[key][0].selectedIndex = ui.value - 1;
              }
            });   
            $( "#" + key).change(function() {
              slider1[key].slider( "value", this.selectedIndex + 1 );
            });                        
          });

		  var select2 = {"kg":""};
          var slider2 = {"kg":""};

          $.each(select2, function(key,value) { 
          
            select2[key] = $( "#" + key );
            slider2[key] = $( "<div id='slider'></div>" ).insertAfter( select2[key] ).slider({
              min: 1,
              max: 7,
              range: "min",
              value: select2[key][0].selectedIndex + 1,
              slide: function( event, ui ) {
                select2[key][0].selectedIndex = ui.value - 1;
              }
            });   
            $( "#" + key).change(function() {
              slider2[key].slider( "value", this.selectedIndex + 1 );
            });                        
          });
		  
		  var select3 = {"fa":""};
          var slider3 = {"fa":""};

          $.each(select3, function(key,value) { 
          
            select3[key] = $( "#" + key );
            slider3[key] = $( "<div id='slider'></div>" ).insertAfter( select3[key] ).slider({
              min: 1,
              max: 3,
              range: "min",
              value: select3[key][0].selectedIndex + 1,
              slide: function( event, ui ) {
                select3[key][0].selectedIndex = ui.value - 1;
              }
            });   
            $( "#" + key).change(function() {
              slider3[key].slider( "value", this.selectedIndex + 1 );
            });                        
          });		  
          
        }); 
        
        function changePup(el) {
          if($(el).val()==1) $('.welpe').show();
          else   $('.welpe').hide();
        } 