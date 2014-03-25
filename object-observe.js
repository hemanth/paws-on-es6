var obj = {};

Object.observe( obj,function(changes) {console.log(changes);} );

obj.name = "hemanth";

// Would log -> [ { type: 'new', object: { name: 'hemanth' }, name: 'name' } ]
