var utils = {}

utils.loadScript = function (src, callback, shadowDom) {
    var script = document.createElement('script')
        , domEl = shadowDom || document.body;

    script.src = src;
    script.async = false;
    script.type = 'text/javascript';

    console.log('%cDOM %o', 'color:magenta', domEl);


    script.onload = function () {
        console.log("dependency: @", src)
        callback();
    }
    
    domEl.appendChild(script);
}