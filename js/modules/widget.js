var mql = window.matchMedia('(max-width: 400px)')
        , host = document.querySelector('.widget')
        , header = host.querySelector('h1')
        , markupEl = document.querySelector('.markup code')
        , shadowTmpl = document.getElementById('shadowTmpl').innerHTML
        , template = Handlebars.compile(shadowTmpl)
        , form = document.querySelector('form')
        , _initShadowDom
        , _formHandler;

    _initShadowDom = function(obj) {
        var root = host.createShadowRoot()
            markup = template(obj);

        root.innerHTML = markup;

       markupEl.innerHTML = document.querySelector('.widget').innerHTML;

       return root;
    }

    _formHandler = function (evt) {
        evt.preventDefault();

        var root = _initShadowDom({
            newHeaderValue : form.querySelector('[name="headervalue"]').value,
            newDescValue : form.querySelector('[name="descvalue"]').value
        });

        console.log('%cROOT %o', 'color:magenta', root);

        utils.loadScript(document.getElementById('shadowTmpl').getAttribute('data-script'), function() {
            markupEl.innerHTML = document.querySelector('.widget').innerHTML;
        }, root);
    }

    form.addEventListener('submit', _formHandler);

    

    //mql.addListener(_initShadowDom);