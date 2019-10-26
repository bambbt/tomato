import Vue  from 'vue';

Vue.directive('readless',{
    
    inserted: function(el,binding){
            el.innerHTML = el.innerHTML.substr(0, parseInt(binding.value)) 
                + '...<br/>'
                + '<button type="button" class="btn btn-light border rounded">Read More</button>'
                var btn = document.createElement("BUTTON");   // Create a <button> element
                btn.innerHTML = "CLICK ME";                   // Insert text
                el.insertAdjacentElement(binding.value + 3,btn);
    }
})