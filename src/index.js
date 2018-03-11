// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => { 
    return propertyName 
};

const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: false,
        value: 'value'
    })
    return propertyName;
};

const createProtoMagicObject = () => {
    function protoMagicObject(){};
    protoMagicObject.prototype = protoMagicObject.__proto__;

    return protoMagicObject;
};

xmen = ['lol', 'kek', 'ded'];

const incrementor = () => {
    let it = function iter(){
        let id = 1;

        return {
            next(){
                let value = id > 1000 ? undefined : id++;
                let done = !value;
                return { value, done };
            }
        };
    
    }

    return this.it;
    
};

const asyncIncrementor = () => {};

const createIncrementer = () => {
    function* incrementor (){
        for (let number = 1; number <= 10; number++) {
            yield number;
        }       
    }

    return incrementor();
    
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((rezolve, reject) => {
        setTimeout(() => rezolve(param), 1300);
    });
};


const getDeepPropertiesCount = (object) => {

    let DPC = obj => {

        var counter = 0;
        for (var key in obj) {
            if(typeof(obj[key]) == typeof({})) counter += DPC(obj[key]);
            counter++;
        }
        return counter;
    }

    return DPC(object);
};

const createSerializedObject = () => {
    let object = null;
    return object;
      
};

const toBuffer = () => {};

const sortByProto = (arr) => { 

    arr = arr.map(function (object){
        return object.__proto__;
    });

    arr.sort( function(a, b){
        return a- b;
    });

    return arr; 

};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;


/*used links
https://developer.mozilla.org/ru/docs/Web/JavaScript/Enumerability_and_ownership_of_properties
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
http://interosite.ru/articles/chto-takoe-prototipnoe-nasledovanie-prototipy-obektov-v-javascript


https://www.youtube.com/watch?v=SjNmkeUpQAU&index=18&list=PLqHlAwsJRxAOpWPtj2T6HhSzX-lKmKV2q



createIncrementer
https://www.youtube.com/watch?v=Wg-HT25TY_E
*/