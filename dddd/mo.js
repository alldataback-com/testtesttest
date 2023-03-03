let rHead = '</style>';
let newStyle = '@media (max-width: 860px)
.mobile-warning {
    display: none;
}</style>';
let body = $response.body
    .replace(rHead, newStyle);
$done({ body });
