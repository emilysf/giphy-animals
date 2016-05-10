var shows = ["Friends", "Full House", "Seinfeld", "Game of Thrones", "Breaking Bad", "Grey's Anatomy", "South Park", "How I Met Your Mother", "Modern Family", "24", "SNL"];

function displayInfo(){

	var show = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=dc6zaTOxFJmzC";

	$.ajax({url: queryURL, method: 'GET'}).done(function(response){

	})
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