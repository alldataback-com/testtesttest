let rHead = '</style>';
let newStyle = '.mobile-warning{display:none!important}</style>';
let body = $response.body
    .replace(rHead, newStyle);
$done({ body });
