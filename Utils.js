function Utils () {
    this.uniqueId = function(size) {
        var rad, id = "";
        size = (size !== undefined) ? size : 10;
        while(id.length < size){
            rad = Math.floor((Math.random()*25)+65);
            id += String.fromCharCode(rad);
        }
        return id;
    };
}