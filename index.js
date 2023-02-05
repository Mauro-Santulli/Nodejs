class Text {
    constructor(text) {
      this.string = text;
    }
  
    toString() {
      return this.string;
    }
  }
  
  class Shout {
    constructor(text) {
      this.text = text;
    }
  
    toUppercase() {
      const string = this.text.toString();
      return string.toUpperCase();
    }
  }
  
  console.log(new Text("Hello, I'm talking").toString());
  
  console.log(new Shout(new Text("Hello, I'm shouting!")).toUppercase());