(function () {
    // ┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴
    fetch("https://www.nikouusitalo.com/assets/other/ConsoleMessage.svg")
    .then(response => response.text())
    .then(svgXml => {
        const svgDataUrl = `data:image/svg+xml;base64,${btoa(svgXml)}`;
        console.log('%c ', `
            background-image: url(${ svgDataUrl });
            padding-top: 200px;
            padding-left: 750px;
            background-size: contain;
            background-position: center center;
            background-repeat: no-repeat;
        `);
        console.log("How did I do this? Check out www.nikouusitalo.com/how-i-added-an-animation-to-the-browser-devtools-console/")
    });

    Array.from(document.querySelectorAll("a")).filter(a => {
        return a.hostname && a.hostname !== location.hostname
    }).forEach(a => a.setAttribute('target', '_blank'))
})();
