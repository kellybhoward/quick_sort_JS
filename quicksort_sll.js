//starting with just flushing out the partition function used the quicksort for singly linked lists

function Sll(){
    this.head = null;
    this.addNode = function(val){
        nNode = new SllNode(val);
        if(this.head == null){this.head = nNode; return this;}
        var r = this.head;
        while(r){
            if(r.next === null){
                r.next = nNode;
                return this;
            }
            r = r.next;
        }
    }
    this.contains = function(val){
        var r = this.head;
        while(r){
            if(r.val == val){
                return true;
            }
            r = r.next;
        }
        return false;
    }
    this.partition = function(val){
        if(!this.contains(val)){
            return false;
        }
        var r = this.head;
        var pivot = null;
        while(r){
            if(r.next && r.next.val == val){
                pivot = r.next;
                if(r.next.next){
                    r.next = r.next.next;
                } else{
                    r.next = null;
                }
                pivot.next = this.head;
                this.head = pivot;
                break;
            }
            r = r.next;
        }
        var r2 = this.head;
        while(r2){
            if(r2.next && r2.next.val < pivot.val){
                var temp = r2.next;
                if(r2.next.next){
                    r2.next = r2.next.next;
                } else{
                    r2.next = null;
                }
                temp.next = this.head;
                this.head = temp;
            }
            r2 = r2.next;
        }
        return this;
    }
}
function SllNode(value){
    this.val = value;
    this.next = null;
}
var list = new Sll();
console.log(list);
console.log(list.addNode(4).addNode(7).addNode(3).addNode(5));
var list2 = new Sll();
console.log(list2.addNode(4).addNode(7).addNode(2).addNode(3).addNode(5).partition(3));
