let rHead = '</style>';
let newStyle = '@media (max-width: 860px)
.mobile-warning {
    display: block;
}</style>';
let body = $response.body
    .replace(rHead, newStyle);
$done({ body });
