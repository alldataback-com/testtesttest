let rHead = '</style>';
let newStyle = '@media all and (max-width:860px){display:none!important}</style>';
let body = $response.body
    .replace(rHead, newStyle);
$done({ body });
