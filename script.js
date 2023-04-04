console.log('Linked List Toy');

class LinkedList {
    constructor(head,tail){
        this.head = head;
        this.tail = tail;
        this.length = 0;
    }

    append = (value) => {
        const node = new Node(value);
        if(this.length == 0){
            this.head = node;
            this.tail = node;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
        }
        
    }

    prepend = (value) => {
        const node = new Node(value);
        if(this.length == 0){
            this.head = node;
            this.tail = node;
            this.length++;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }

    at = (n) => {
        if(!this.length){
            return false;
        }
        let i=0;
        let current = this.head;
        while(i < n){
            current = current.next;
            i++;
        }
        return current;
    }

    pop = () => {
        if(!this.length){
            return false;
        }
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
        this.length--;
    }

    contains = (n) => {
        if(!this.length){
            return false;
        }
        let i=0;
        let current = this.head;
        while(i<this.length){
            if(current.data === n){
                return true;
            }
            current = current.next
            i++;
        }
        return false;
    }

    find = (n) => {
        if(!this.length){
            return false;
        }
        let i=0;
        let current = this.head;
        while(i<this.length){
            if(current.data === n){
                return i;
            }
            current = current.next
            i++;
        }
        return false;
    }

    toString = () => {
        if(!this.length){
            return null;
        }
        let i=0;
        let current = this.head;
        let string = '';
        while(i<this.length){
            string = string + `(${current.data}) -> `;
            current = current.next;
            i++;
        }
        if(!current){
            string = string + null;
        }
        return string;
    }
}

class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

let x = new LinkedList;
x.append('21');
x.append('22');
x.append('2');
x.append('25');
x.append('28');
x.append('5');
x.prepend('16');

displayList();
testFunction(x.tail.data,'5','Tail Test');
testFunction(x.head.data,'16','Head Test');
x.prepend('20');
displayList();
testFunction(x.head.data,'20','Prepend Test');
testFunction(x.contains('23'),false,`contains('23') Test`);
x.pop();
displayList();
testFunction(x.tail.data,'28','pop() Test');
testFunction(x.at(2).data,'21',`at(2) Test`);
x.append('99');
displayList();
testFunction(x.tail.data,'99','Append Test');
testFunction(x.length,8,'length test');
testFunction(x.find('2'),4,`find('2') Test (returns index)`);


function testFunction(fxn,expected,description){
    const txt = document.createElement('div');
    let string = `Test: ${description} `;
    const result = (fxn === expected) ? `Passed, received ${expected}` : `Received ${fxn}, expected ${expected}`;
    string = string + result;
    txt.textContent = string;
    document.body.append(txt);
}

function displayList(){
    const txt = document.createElement('div');
    txt.textContent = x.toString();
    document.body.append(txt);
}