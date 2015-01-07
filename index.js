var scrollStager = function(){
    this.step = 0;
    this.steps = [];
};

scrollStager.prototype.setProgress = function(val){

    if(this.tl && this.tlLength !== 0 && (val <= this.tlLength || val >= 0)) {
        this.step = val;
    }

    return this;
};

scrollStager.prototype.updateScene = function(){
    this.tl.tweenTo(this.steps[this.step]);

    return this;
};

scrollStager.prototype.addTween = function(tl){
    var _this = this,
        children = tl.getChildren();

    this.tl = tl.pause();
    this.tlLength = children.length;

    children.map(function(t){
        _this.steps.push(t._startTime);
    });

    return this;
};