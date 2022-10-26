export default () => {
    return `<!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

                <title>E-commerce app</title>
            </head>
            <body>
                <div id="root"></div>
                <script type="text/javascript" src="/dist/bundle.js"></script><!-- the /dist is the src folder because webpack has been configured to output the bundled code to the /dist folder -->
            </body>
        </html>`;
}