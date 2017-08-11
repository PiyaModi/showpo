jQuery(function($){
   
   /* $.ajax({
	   url:"banner.json",
	   success:
   }); */

	$.getJSON( "banner.json", {
		tagmode: "any",
		format: "json"
	})
    .done(function( data ) {
		$.each( data, function( d, data ) {
			console.log('d');
			console.log(d);
			console.log(data);
			
			console.log(data.Start);
			console.log(data.End);
			/* var ndt = new Date($.now());
			console.log(ndt);
			
			var dt = new Date();
			console.log(dt);
			var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();	
			console.log(dt.getDa);
			
			console.log(time); */
			
			var dt	= new Date();
			console.log(dt);
			var time = dt.getFullYear() + '-' + (dt.getMonth()+1) + '-' + dt.getDate() + ' ' + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds();
			console.log(time);
			console.log(Date.parse(data.Start));
			console.log(Date.parse(data.End));
			console.log(Date.parse(dt));
			
			if(Date.parse(data.Start) <= Date.parse(dt) && Date.parse(dt) >= Date.parse(dt)){
				console.log('if');
				
				$( "#banner" ).prepend( "<a href='"+data.URL+"' target='blank'>\
				<img src='"+data.Image+"'>\
				<h2><span>"+data.Title+"</span></h2>\
				</a>" );
				
			}
        });
    });
   
});