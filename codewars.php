<?php
$joe = ['1', '2', '3', '4', '5', '6'];
$dead = [];
$k = 2;
$n = count($joe);
$index = 0;
$soldiers = [];

for ($i = 0; $i < $n; $i++) {
    $soldiers[] = $i;
}

while (count($soldiers) > 1) {
    $index =   ($index + $k - 1) % count($soldiers);
    $dead[] = $joe[$soldiers[$index]];
    unset($soldiers[$index]);
    $soldiers = explode(',', implode(',', $soldiers));
}
$dead[] = $joe[$soldiers[0]];
// $result = [];
// $keyPos = 0;
// while (count($joe)) {
//     $keyPos = ($keyPos + $k - 1) % count($joe);
//     $dead[] = array_splice($joe, $keyPos, 1)[0];
// }
// $test = array_splice($joe, 3, 2);
// var_dump($test);
print_r($dead);
