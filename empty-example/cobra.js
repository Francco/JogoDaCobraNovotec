function cobra(){
    this.x = 0;
    this.y = 0;
    this.xvelocidade = 1;
    this.yvelocidade = 0;

    this.update = function(){
        this.x += this.xvelocidade*tamanho;
        this.y += this.yvelocidade*tamanho;
    }

    this.show = function(){
        fill(255);
        rect(this.x,this.y,tamanho,tamanho);
    }

    this.dir = function(x,y){
        this.xvelocidade = x;
        this.yvelocidade = y;
    }

}