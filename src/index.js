// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => { return propertyName };

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

const incrementor = () => {};
const asyncIncrementor = () => {};


const createIncrementer = () => {

};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};

const createSerializedObject = () => {
    object = null;
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

*/