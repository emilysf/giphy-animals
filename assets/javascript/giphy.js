var shows = ["Friends", "Full House", "Seinfeld", "Breaking Bad", "Grey's Anatomy", "South Park", "How I Met Your Mother", "Modern Family"];

function displayInfo(){

	var show = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=dc6zaTOxFJmzC";

	$.ajax({url: queryURL, method: 'GET'}).done(function(response){

		console.log(response)
		var results = response.data;

		for(var i = 0; i < 10; i++){

			if (results[i].rating == "r" || results[i].rating == "pg-13"){

			}
			else {
				var showDiv = $('<div>');
				var p = $('<p>').text('Rating: ' + results[i].rating);

				var showImage = $('<img>');
				showImage.attr('src', results[i].images.fixed_height.url);

				showDiv.append(p)
				showDiv.append(showImage)

				$('#gifs').prepend(showDiv);
			}
		}
	});
}


function renderButtons(){

	$('#viewButtons').empty();

	for(var i = 0; i < shows.length; i++){

		var s = $('<button>')
		s.addClass('show');
		s.attr('data-name', shows[i]);
		s.text(shows[i]);
		$('#viewButtons').append(s);

	}
}

$('#add').on('click', function(){

	var show = $('#input-show').val().trim();
	shows.push(show);
	renderButtons();
	return false;

})

$(document).on('click', '.show', displayInfo);

renderButtons();