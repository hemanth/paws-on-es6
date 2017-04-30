function abc(name) {
    return 'hllo ' + name
}

function abc(name) { return 'hllo ' + name }

var abc = function() {
    return 'hllo ' + name
}

const abc = () => {
    return 'hllo ' + name
}

const abc = () => 'hllo ' + name

// ==================

var lai = {
    name: 'Lai',
    getName: function() {
        return this.name
    }
}

lai.getName()

var getName = lai.getName

getName()

var name = 'quan'

var lai = {
    name: 'Lai',
    getName: () => {
        return this.name
    }
}

lai.getName()

function Person() {
    this.name = 'Nhan'

    return function() {
        
    }
}
