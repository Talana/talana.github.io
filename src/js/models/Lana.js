const lanaCount = {
    count: 0
};

var Lana = (type) => {
    var schema = {
        type: '',
        title: '',
        size: (type === 'row') ? 12 : 2,
    };

    schema.type = type;
    schema.title = type;
    schema.id = lanaCount.count++;

    if(type === 'row') {
        schema.children = [];
        schema.addChild = function(lana) {
            console.log(`adding Child ${lana}`);
            this.children.push(lana);
        };
    }
    return schema;
};

export default Lana;
