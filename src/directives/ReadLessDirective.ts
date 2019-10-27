import Vue from 'vue';

Vue.directive('read-less', {
    bind: function (el, binding) {

        var className = binding.value.class == undefined ? 'btn btn-light border rounded' : binding.value.class
        var btnLess = document.createElement("BUTTON");
        btnLess.innerHTML = "Read Less";
        btnLess.className = className;
        var btnMore = document.createElement("BUTTON");   // Create a <button> element
        btnMore.innerHTML = "Read More";
        btnMore.className = className;

        el.dataset.readLessInnerHtml = el.innerHTML;
        el.dataset.readMoreInnerHtml = el.innerHTML.substr(0, parseInt(binding.value.nbCharacters)) + '...';

        el.innerHTML = el.dataset.readMoreInnerHtml;
        el.appendChild(btnMore);

        btnMore.addEventListener("click", function _onMore() {
            el.innerHTML = el.dataset.readLessInnerHtml == undefined ? 'No content' : el.dataset.readLessInnerHtml;
            el.appendChild(btnLess);
        }, false);

        btnLess.addEventListener("click", function _onLess() {
            el.innerHTML = el.dataset.readMoreInnerHtml == undefined ? 'No content' : el.dataset.readMoreInnerHtml;
            el.appendChild(btnMore);
        }, false);

        // do preparation work
        // e.g. add event listeners or expensive stuff
        // that needs to be run only once
    },
    update: function (newValue, oldValue) {
        // do something based on the updated value
        // this will also be called for the initial value
    },
    unbind: function (el) {
        delete el.dataset.readLessInnerHtml;
        delete el.dataset.readMoreInnerHtml;

        // do clean up work
        // e.g. remove event listeners added in bind()
    }
})