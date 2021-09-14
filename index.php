<?php
$api_url = 'https://www.mmobomb.com/api1/games?platform=pc';

$games = json_decode(file_get_contents($api_url), true);

$finalResponse = '<style>table thead th{ background-color: #a7d6fc; color: #020801 }</style>
                     <table>
                      <thead>
                        <th>Thumbnail</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Game URL</th>
                        <th>Platform</th>
                        <th>Publish</th>
                        <th>Release Date</th>
                      </thead>
                    <tbody>';

foreach ($games as $game) {
  $finalResponse .= '<tr>
                        <td> <img src="'.$game['thumbnail'].'" style="width:200px;" /> </td>
                        <td> "'.$game['title'].'" </td>
                        <td> "'.$game['short_description'].'"</td>
                        <td> <a target="_blank" href="'.$game['game_url'].'">Game URL</a></td>
                        <td> "'.$game['platform'].'" </td>
                        <td> "'.$game['publisher'].'" </td>
                        <td> "'.$game['release_date'].'" </td>
                      </tr>';
}

$finalResponse .= '</tbody></table></body></html>';

echo $finalResponse;