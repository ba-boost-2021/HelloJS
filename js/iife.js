(function() {
    var ec = {};
    ec.value = 30;
    ec.createContainer = function (id) {
        const d = document.createElement("div");
        d.id = id;
        d.style.display = "flex";
        d.style.justifyContent = "space-between"
        document.body.appendChild(d);
    }

    ec.createChild = function(parentId, content){
        const d = document.createElement("div");
        d.innerHTML = content;
        const p = document.getElementById(parentId);
        p.appendChild(d);
    }

    window.elementCreator = window.elementCreator || ec;
})();

