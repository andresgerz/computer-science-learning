function ConstructorWebsites() {
  this.createElement = function(text, type) {
    let html;

    if(type === 'input') {
      html = new InputHTML(text);
    } else if(type === 'img') {
      html = new ImagenHTML(text);
    } else if(type === 'h1') {
      html = new HeadingHTML(text);
    } else if(type === 'p') {
      html = new ParagraphHTML(text);
    }
  }
}


const HeadingHTML = function(text) {
  this.text = text;
}

const ImagenHTML = function (text) {
  this.text = text;
}

const HeadingHTML = function(text) {
  this.text = text;
}

const ParagraphHTML = function (text) {
  this.text = text;
}

const website = new ConstructorWebsites();

const webElements = [];

webElements.push(website.createElement('Welcome', 'h1'));
webElements.push(website.createElement('Welcome to my website', 'p'));
webElements.push(website.createElement('logo.svg', 'img'));
webElements.push(website.createElement('Complete the form', 'h1'));
webElements.push(website.createElement('Contact', 'input'));
webElements.push(website.createElement('Know about us', 'h1'));

webElements.forEach(elem => {
  elem.show();
})