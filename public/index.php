<?php

// include '../templates/main.html';
?>

<html>
<head>
    <style type="text/css">
        html {
            background: #073642;
            font-size: 18px;
            color: #93a1a1;
        }

        a {
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        pre {
            display: inline;
        }

        .comment {
            display: inline;
            color: #93a1a1;
            color: #586e75;
        }

        .symbol-red {
            color: #dc322f;
        }

        .symbol-gray {
            color: #93a1a1;
        }

        .keyword {
            color: #268bd2;
        }

        .key {
            color: #b58900;
        }

        .value {
            color: #2aa198;
        }

        .typed-cursor{
            color: white;
            opacity: 1;
            display: inline-block;
            font-weight: 100;
            -webkit-animation: blink 0.7s infinite;
            -moz-animation: blink 0.7s infinite;
            -ms-animation: blink 0.7s infinite;
            -o-animation: blink 0.7s infinite;
            animation: blink 0.7s infinite;
        }
        @-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
        @-webkit-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
        @-moz-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
        @-ms-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
        @-o-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }

    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="/js/typed.js"></script>
    <script src="/js/main.js"></script>
</head>

<body>
<pre id="text-wrapper"></pre>
<br/>
<a id="skip" href="javascript:void" style="color: white">Skip Animation</a>
<br/>
<a id="pause" href="javascript:void" style="color:white">Pause</a>
</body>
</html>
