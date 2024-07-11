function counter(){
    const text = document.getElementById('myText').value;

    //count only digits
    let digitsCount = text.replace(/\D/g, '').length;
    
    // count only letters.
    let letterCount = text.replace(/\W/g, '').length;


    // Count symbols (excluding spaces)
    let symbolCount = text.replace(/\s/g, '').length;

    // Count words
    const words = text.trim().split(/\s+|\/ /);
    var wordCount = words.length;

    //sentence count  - if end with . or with new paragraph, and contains letters
    let sentences = text.trim().split(/\w+\n|\w+$|\w+\.\W|\w+\.$/);
    let sentenceCount= sentences.length-1;
    if(letterCount==0) {wordCount=0; sentenceCount=0};
    // Update the display
    document.getElementById('letterCount').textContent = "Letters count (including digits): " + letterCount + ", and " + digitsCount +" of them are digits";
    document.getElementById('symbolCount').textContent = "Symbols count: " + letterCount;
    document.getElementById('wordCount').textContent = "Words count: "+ wordCount;
    document.getElementById('sentenceCount').textContent = "Sentence count: " + sentenceCount;
    
}

setInterval(() => {
    counter();
}, 100);

function bgChanger(){
    imgsrc=Math.floor(16777215*Math.random());
    lnk="url('https://picsum.photos/1000?" +imgsrc +"')"
    document.body.style.backgroundImage=lnk;
    document.body.style.backgroundColor=imgsrc.toString(16);
}



