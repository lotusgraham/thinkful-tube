var thinktube = {
    url: 'https://api.github.com/users/lotusgraham/repos',
    // url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    success: function(data) {
        var items = data.map(function(repo){
            return '<li>' + repo.name + '</li>';
        });
        $('#searchresults').append(items);
        console.log(data);
    }
};

$.ajax(thinktube);

// $(function(data){
//     $.getJSON('https://www.omdbapi.com/?s=Star%20Wars&r=json', function(){
//     console.log(data);
//   });
// });

//AIzaSyDtULH2PxGsNF3BAQnF8HfFqGQGsl7qv0Y
