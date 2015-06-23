function Utils () {
    this.uniqueId = function(size) {
        var id = "";

        if(!size) {
            size = 10;
        }
        
        while(id.length < size){
            var rad = Math.floor((Math.random()*25)+65);
            id += String.fromCharCode(rad);
        }
        return id;
    };
}