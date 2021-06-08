/*双哈希表 */
/*js构造简易hashmap*/
/*node*/
var Node = function(key, value) {
    this.key = key;
    this.value = value;
    this.freq = 1; //当前使用频率
    this.prev = null; //前一个节点的指针
    this.next = null; //后一个节点的指针
}

/*构造双向链表doubleLinkedList*/
var DoubleLinkedList = function(){
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

DoubleLinkedList.prototype.removeNode = function(node){
    node.prev.next = node.next;
    node.next.prev = node.prev;
}

DoubleLinkedList.prototype.addNode = function(node){
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
}

//构造LFU缓存
var LFUCache = function(capacity){
    this.capacity = capacity;
    this.size = 0;
    this.freq_table = new Map();
    this.key_table = new Map();
    this.minFreq = 0;
}

LFUCache.prototype.increFreq = function(node){
    let freq = node.freq;
    let dll = this.freq_table.get(freq);
    dll.removeNode(node);
    let dll_new = this.freq_table.get(freq + 1) || new DoubleLinkedList();
    //更新频率
    node.freq++;
    if(this.minFreq == freq && dll.tail.prev == dll.head){
        //此时最小频率就是当前频率，去检查当前链表是否为空
        this.minFreq = node.freq;
    }
    //插入新链表
    dll_new.addNode(node);
    this.freq_table.set(node.freq, dll_new); 
}

LFUCache.prototype.get = function(key){
    if(!this.key_table.has(key)){
        return -1;
    }
    let node = this.key_table.get(key);
    this.increFreq(node);
    return node.value;
}

LFUCache.prototype.put = function(key, val){
    //已经缓存
    let freq = 1;
    if(!this.capacity){
        return -1
    }
    if(this.key_table.has(key)){
        let node = this.key_table.get(key);
        node.value = val;
        this.increFreq(node);
    } else{
        //未缓存，且没满
        if(this.size < this.capacity){
            let node = new Node(key, val);
            this.key_table.set(key, node);
            //拿freq = 1 的链表
            let dll = this.freq_table.get(freq) || new DoubleLinkedList();
            dll.addNode(node);
            this.freq_table.set(freq, dll);
            this.minFreq = 1;
            this.size++;
        } else{
            //缓存已满,找到最小频率，删除
            console.log(this.minFreq,'minFreq')
            let node = new Node(key, val);
            let min_dll = this.freq_table.get(this.minFreq);
            let old_node = min_dll.tail.prev;
            console.log(old_node,'old_node');
            this.key_table.delete(old_node.key);
            min_dll.removeNode(old_node);
            let dll = this.freq_table.get(freq) || new DoubleLinkedList();
            dll.addNode(node);
            this.freq_table.set(freq, dll);
            this.key_table.set(key, node);
            this.minFreq = this.minFreq > freq ? freq : this.minFreq;
        }
    }
}

