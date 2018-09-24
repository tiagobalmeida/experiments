class MinHeap { 
    
    constructor() { 
        this.items = new Array(1);
    }

    insert(n) { 
        this.items.push(n);
        this.heapifyUp(this.items.length - 1);
    }

    removeSmallest() { 
        var items = this.items;
        var smallest = items[1];
        // move the last to the top and heapifyDown
        items[1] = items[items.length - 1];
        this.items.length = this.items.length - 1;
        this.heapifyDown(1);
        return smallest;
    }

    /**
     * Move element at index towards the root
     * while it is smaller than it's parent(s).
     * @param {Number} index 
     */
    heapifyUp(index) { 
        if(index <= 0){ 
            return;
        }
        var parentIndex = Math.floor(index/2);
        if (this.items[index] < this.items[parentIndex]) {
            // swap item with parent
            var oldParent = this.items[parentIndex];
            this.items[parentIndex] = this.items[index];
            this.items[index] = oldParent;
            this.heapifyUp(parentIndex);
        }
    }

    /**
     * Move the element down while it is larger than 
     * the smallest of its direct children
     * @param {Number} index 
     */
    heapifyDown(index) { 
        var items = this.items;
        var leftChildIndex = index * 2;
        var rightChildIndex = leftChildIndex + 1;
        var smallestIdx = -1;
        // check if these children exist
        if (this.items.length < leftChildIndex) {
            return; // no children exist
        }
        if (this.items.length == leftChildIndex + 1)  {
            // only left child
            smallestIdx = leftChildIndex;
        }else {
            // we have two children
            smallestIdx = (items[leftChildIndex] < items[rightChildIndex]) ?
                            leftChildIndex :
                            rightChildIndex;
        } 
        // compare current with index of smallest.
        if (items[index] > items[smallestIdx]) {
            this.swap(items, index, smallestIdx);
            this.heapifyDown(smallestIdx);
        }
    }

    swap (arr, a, b) { 
        var va = arr[a];
        arr[a] = arr[b];
        arr[b] = va;
    }
}

module.exports = MinHeap;