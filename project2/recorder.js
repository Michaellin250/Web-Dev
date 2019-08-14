// place your javascript code here

'use strict';

let sideLength = 5;

function comparator(a,b){
  return a - b;
}

function Node (value) {
  this.value = value;
  this.next = undefined; 
}

function SLinkedList(comparator){
  this.comparator = comparator;
  this.head = null;
  this.tail = null; 
  this.length = 0;
}

SLinkedList.prototype = {
  addFront: function (value) { 
    
    // checks to make sure item to insert is valid
    if(!value) return;
   
    // create a new Node to insert
    const node = new Node(value);
    
    // checks if it is not the first element in list 
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  },

  addEnd: function (value) {
    
    const node = new Node(value);

    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  },

  findElement: function (toFind) {
    let current = head;
    let found = undefined;
    
    while(current) {
      if (this.comparator(current.value, toFind) == 0) {
        found = current;
        break;
      }

      current = current.next;
    }

    return found;
  },

  size: function () {
    return this.length;
  }
};

function Recorder() {
  this.recording = false;
  this.currList = new SLinkedList(comparator);
}

Recorder.prototype = {
  constructor: Recorder,

  handleEvent : function(evt) {
    switch (evt.type) {
      case "mousemove":
        this.processMousePosition(evt);
        break;
    }
  },
 
  clearCanvas: function() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  },
  
  playRecording: function() {
    this.recording = false;
    this.clearCanvas();
    let curr = this.currList.head;
    let interval = setInterval(()=> {

	if(curr !== null && curr !== undefined) {
      		this.draw(curr.value[0], curr.value[1]);
      		curr = curr.next;
    	} else {
      		clearInterval(interval);
    	}
    }, 50);
  },

  saveStorage: function () {
    localStorage.setItem("currentList", JSON.stringify(this.currList));
  },

  retrieveStorage: function() {
    this.currList = JSON.parse(localStorage.getItem("currentList"));
  },

  setRecording: function() {
    this.recording = true;
    this.currList = new SLinkedList(comparator);
  },

  endRecording: function(){
    this.recording = false;
  },

  processMousePosition: function (evt){
    this.draw(evt.pageX, evt.pageY);
  },

  draw : function (xPos, yPos) {
    if(this.recording) {
      this.currList.addEnd([xPos,yPos]);
    }

    let context = document.getElementById("canvas").getContext("2d");
    let getColorPickerByID = document.getElementById("colors");
    let getValueOfColorPicker = getColorPickerByID.options[getColorPickerByID.selectedIndex].text;
    context.fillStyle = getValueOfColorPicker;
    context.fillRect(xPos,yPos,sideLength,sideLength); 
  }
};


let myRecord = new Recorder();

main();

window.onload = function () {

  document.getElementById("clear").addEventListener("click", myRecord.clearCanvas.bind(myRecord));  
  document.getElementById("start").addEventListener("click", myRecord.setRecording.bind(myRecord));
  document.getElementById("stop").addEventListener("click", myRecord.endRecording.bind(myRecord));
  document.getElementById("play").addEventListener("click", myRecord.playRecording.bind(myRecord));
  document.getElementById("save").addEventListener("click", myRecord.saveStorage.bind(myRecord));
  document.getElementById("retrieve").addEventListener("click", myRecord.retrieveStorage.bind(myRecord));
}

function main() {
  document.addEventListener("mousemove", myRecord); 
}
