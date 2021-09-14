var express = require("express");
var app = new express();
var server_port = 3000;
var request = require("request");
var api_url = "https://www.mmobomb.com/api1/games?platform=pc";

app.listen(server_port, function(){
	console.log("Server up & running on port " + server_port);
})

app.get('/',function(expressReq, expressRes){

	request({
		uri: api_url,
		method: 'GET'
	}, function(err,res,body){
		console.log(body);
		var data = JSON.parse(body);

		var finalResponse = 
		`<style>
			table thead th{
				background-color: #a7d6fc;
				color: #020801
			}
		</style>
		<table>
		<thead>
			<th>Thumbnail</th>
			<th>Title</th>
			<th>Description</th>
			<th>Game URL</th>
			<th>Platform</th>
			<th>Publisher</th>
			<th>Release Date</th>
		</thead>
		`;

		for(var rec in data){

			finalResponse += `
						<tr>
							<td>
							<img src="${data[rec].thumbnail}" style="width:200px;" />
							</td>
							<td>${data[rec].title}</td>
							<td>${data[rec].short_description}</td>
							<td><a href="${data[rec].game_url}" target="_blank">Game URL</a></td>
							<td>${data[rec].platform}</td>
							<td>${data[rec].publisher}</td>
							<td>${data[rec].release_date}</td>
						</tr>`;
		}

		finalResponse += `</tbody></table></body></html>`;
		expressRes.send(finalResponse);
	});
});