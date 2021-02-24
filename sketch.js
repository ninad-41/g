//MY DREAM GAME @NINADMANOJGUGALE#41
// declaring the variables
var database;
var Drawing = [];
var currentPath = [];
var isDrawing = false;
var weight,  color;
var b, c, d, e, f, g, h, i, j;
var circle, square, triangle, rectangle, trapeqium, star, cloud;
var watermelon, lemon, apple, banana, strawberry, mango, grapes, guava, wa, le , ap, ba, st1, ma, gr, gu;
var aImg,bImg,gImg,guImg,wImg,sImg,lImg,mImg;
var n1, n2;
var a1, a2, a3, a4, a4, a5, a6, a7, a8;
var Animals, ti, co, bu, el, fi, ho, ra, sn;


// loading all the images in the preload function
function preload(){
    b = loadImage("images/abcd.jpg");
    d = loadImage("images/ci.png");
    e = loadImage("images/cl.png");
    f = loadImage("images/tra.png");
    g = loadImage("images/tr.png");
    h = loadImage("images/st.png");
    i = loadImage("images/sq.png");
    j = loadImage("images/rect.png");
    sImg = loadImage("fruits/strawberry.png");
    guImg = loadImage("fruits/guava.png");
    gImg = loadImage("fruits/gra.png");
    wImg = loadImage("fruits/watermelon.png");
    lImg = loadImage("fruits/lemon.png");
    aImg = loadImage("fruits/apple.png");
    bImg = loadImage("fruits/banana.png");
    mImg = loadImage("fruits/m.png");
    a1 = loadImage("animals/butterfly.png");
    a2 = loadImage("animals/cow.png");
    a3 = loadImage("animals/elephant.png");
    a4 = loadImage("animals/fish.png");
    a5 = loadImage("animals/horse.png");
    a6 = loadImage("animals/rabbit.png");
    a7 = loadImage("animals/tiger.png");
    a8 = loadImage("animals/snake.png");
}
    

function setup() {
    // initialising the database
    database = firebase.database();
    // creating the canvas and to draw and stop drawing
    canvas = createCanvas(displayWidth-30, displayHeight-130);
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);
    // colourful column
    c = createSprite(displayWidth-50,displayHeight-500);
    c.addImage(b);
    c.scale = 2.5;
    //creating title
    var title3 = createButton('your drawing name:');
    title3.position(displayWidth/40,displayHeight/50);
    title3.style('background', 'LIGHTRED');
    var title4 = createInput("");
    title4.position(displayWidth/40, displayHeight/20);

    title4.mousePressed(function(){
        button.show();
    });

        var button = createButton('OK');
        button.position(displayWidth/10,displayHeight/12)
        button.style('background', 'LIGHTGREEN');
        button.hide();

        button.mousePressed(function(){
         button.hide();
        });

    // the clearButton
    var clearButton = createButton('CLEAR MY PAINTING');
    clearButton.position(displayWidth-190, displayHeight/3-30);
    clearButton.mousePressed(clearDrawing);
    // shape Button
    var Shape = createButton('SHAPE');
    Shape.position(1400, 140);
    // fruit
    var Fruit = createButton('FRUITS');
    Fruit.position(1400, 180);
    // animals
    Animals = createButton('ANIMALS');
    Animals.position(1400, 220);
    // button 
    var title = createButton(' #NINAD CREATION');
    title.position(displayWidth-200, displayHeight-150);
    // input (broderness) box
    var input = createInput("");
    input.hide();
    var button1  = createButton("BROADERNESS");
    var button2  = createButton("APPLY");
    button2.hide();
    // positions
    input.position(displayWidth-200,displayHeight-730);
    button1.position(displayWidth-160, displayHeight/3-190);
    button2.position(displayWidth-160, displayHeight/3-120);

    // creating shapes
    triangle = createSprite(displayWidth/3+50, displayHeight/3);
    triangle.addImage(g);
    triangle.scale = 0.4;
    circle = createSprite(displayWidth/3+50, displayHeight/3);
    circle.addImage(d);
    circle.scale = 0.4;
    trapeqium = createSprite(displayWidth/3+50, displayHeight/3);
    trapeqium.addImage(f);
    trapeqium.scale = 0.7;
    square = createSprite(displayWidth/3+50, displayHeight/3);
    square.addImage(i);
    square.scale = 0.4;
    cloud = createSprite(displayWidth/3+50, displayHeight/3);
    cloud.addImage(e);
    cloud.scale = 0.4;
    star = createSprite(displayWidth/3+50, displayHeight/3);
    star.addImage(h);
    star.scale = 0.6;
    rectangle = createSprite(displayWidth/3+50, displayHeight/3);
    rectangle.addImage(j);
    rectangle.scale = 0.9;
    // making them invisible
    triangle.visible = false;
    circle.visible = false;
    square.visible = false;
    trapeqium.visible = false;
    rectangle.visible = false;
    cloud.visible = false;
    star.visible = false;

    // making fruit sprites
    watermelon = createSprite(displayWidth/3+50, displayHeight/3+50);
    watermelon.addImage(wImg);
    watermelon.scale = 0.4;
    lemon = createSprite(displayWidth/3+50, displayHeight/3);
    lemon.addImage(lImg);
    lemon.scale = 0.4;
    mango = createSprite(displayWidth/3+50, displayHeight/3);
    mango.addImage(mImg);
    mango.scale = 0.9;
    apple = createSprite(displayWidth/3+50, displayHeight/3);
    apple.addImage(aImg);
    apple.scale = 0.4;
    banana = createSprite(displayWidth/3+50, displayHeight/3);
    banana.addImage(bImg);
    banana.scale = 0.6;
    strawberry = createSprite(displayWidth/3+50, displayHeight/3);
    strawberry.addImage(sImg);
    strawberry.scale = 0.5;
    grapes = createSprite(displayWidth/3+50, displayHeight/3);
    grapes.addImage(gImg);
    grapes.scale = 0.8;
    guava = createSprite(displayWidth/3+50, displayHeight/3);
    guava.addImage(guImg);
    guava.scale = 0.7;
    // making them invisible
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;

    // making animal sprites
    tiger = createSprite(displayWidth/3+50, displayHeight/3);
    tiger.addImage(a7);
    tiger.scale = 1;
    fish = createSprite(displayWidth/3+50, displayHeight/3);
    fish.addImage(a4);
    fish.scale = 0.4;
    snake = createSprite(displayWidth/3+50, displayHeight/3);
    snake.addImage(a8);
    snake.scale = 0.8;
    butterfly = createSprite(displayWidth/3+50, displayHeight/3);
    butterfly.addImage(a1);
    butterfly.scale = 0.2;
    rabbit = createSprite(displayWidth/3+50, displayHeight/3);
    rabbit.addImage(a6);
    rabbit.scale = 0.2;
    horse = createSprite(displayWidth/3+50, displayHeight/3);
    horse.addImage(a5);
    horse.scale = 0.3;
    cow = createSprite(displayWidth/3+50, displayHeight/3);
    cow.addImage(a2);
    cow.scale = 0.4;
    elephant = createSprite(displayWidth/3+50, displayHeight/2-50);
    elephant.addImage(a3);
    elephant.scale = 0.2;
    // hiding them
    tiger.visible = false;
    fish.visible = false;
    snake.visible = false;
    butterfly.visible = false;
    rabbit.visible = false;
    cow.visible = false;
    horse.visible = false;
    elephant.visible = false;

    //creating shapeButtons
    var tri = createButton('TRIANGLE');
    tri.position(displayWidth-250, displayHeight/4);
    tri.style('background', 'LIGHTGREEN');
    var sq = createButton('SQUARE');
    sq.position(displayWidth-250, displayHeight/4+20);
    sq.style('background', 'LIGHTGREEN');
    var tra = createButton('TRAPEQIUM');
    tra.position(displayWidth-250, displayHeight/4+40);
    tra.style('background', 'LIGHTGREEN');
    var ci = createButton('CIRCLE');
    ci.position(displayWidth-250, displayHeight/4+60);
    ci.style('background', 'LIGHTGREEN');
    var cl = createButton('CLOUD');
    cl.position(displayWidth-250, displayHeight/4+80);
    cl.style('background', 'LIGHTGREEN');
    var st = createButton('STAR');
    st.position(displayWidth-250, displayHeight/4+100);
    st.style('background', 'LIGHTGREEN');
    var rect = createButton('RECTANGLE');
    rect.position(displayWidth-250, displayHeight/4+120);
    rect.style('background', 'LIGHTGREEN');
    n1 = createButton('NONE');
    n1.position(displayWidth-250, displayHeight/4+140);
    n1.style('background', 'LIGHTGREEN');
    // hiding them
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    st.hide();
    rect.hide();
    n1.hide();
    // fruit buttons
    n2 = createButton('NONE');
    n2.position(displayWidth-250, displayHeight/4+180);
    n2.style('background', 'SKYBLUE');
    wa = createButton('WATERMELON🍉');
    wa.position(displayWidth-250, displayHeight/4+20);
    wa.style('background', 'SKYBLUE');
    le = createButton('LEMON🍋');
    le.position(displayWidth-250, displayHeight/4+40);
    le.style('background', 'SKYBLUE');
    gr = createButton('GRAPES🍇');
    gr.position(displayWidth-250, displayHeight/4+60);
    gr.style('background', 'SKYBLUE');
    gu = createButton('GUAVA🍐');
    gu.position(displayWidth-250, displayHeight/4+80);
    gu.style('background', 'SKYBLUE');
    st1 = createButton('STRAWBERRY🍓');
    st1.position(displayWidth-250, displayHeight/4+100);
    st1.style('background', 'SKYBLUE');
    ma = createButton('MANGO🥭');
    ma.position(displayWidth-250, displayHeight/4+120);
    ma.style('background', 'SKYBLUE');
    ap = createButton('APPLE🍎');
    ap.position(displayWidth-250, displayHeight/4+140);
    ap.style('background', 'SKYBLUE');
    ba = createButton('BANANA🍌');
    ba.position(displayWidth-250, displayHeight/4+160);
    ba.style('background', 'SKYBLUE');
    // hiding them
    wa.hide();
    le.hide();
    gr.hide();
    gu.hide();
    st1.hide();
    ma.hide();
    ap.hide();
    ba.hide();
    n2.hide();

    // animal buttons
    ti = createButton('TIGER🐯');
    ti.position(displayWidth-250, displayHeight/4+20);
    ti.style('background', 'RED');
    bu = createButton('BUTTERFLY🦋');
    bu.position(displayWidth-250, displayHeight/4+40);
    bu.style('background', 'RED');
    co = createButton('COW🐂');
    co.position(displayWidth-250, displayHeight/4+60);
    co.style('background', 'RED');
    ho = createButton('HORSE🐎');
    ho.position(displayWidth-250, displayHeight/4+80);
    ho.style('background', 'RED');
    fi = createButton('FISH🐟');
    fi.position(displayWidth-250, displayHeight/4+100);
    fi.style('background', 'RED');
    ra = createButton('RABBIT🐰');
    ra.position(displayWidth-250, displayHeight/4+120);
    ra.style('background', 'RED');
    sn = createButton('SNAKE🐍');
    sn.position(displayWidth-250, displayHeight/4+140);
    sn.style('background', 'RED');
    el = createButton('ELEPHANT🐘');
    el.position(displayWidth-250, displayHeight/4+160);
    el.style('background', 'RED');
    none = createButton('NONE');
    none.position(displayWidth-250, displayHeight/4+180);
    none.style('background', 'RED');
    // hiding them
    ti.hide();
    bu.hide();
    co.hide();
    ho.hide();
    fi.hide();
    ra.hide();
    sn.hide();
    el.hide();
    none.hide();

    // if animal is pressed
    Animals.mousePressed(function(){
    button1.hide();
    clearButton.hide();        
    colorButton.hide();
    Fruit.hide();        
    Shape.hide();
    ti.show();
    bu.show();
    co.show();
    ho.show();
    fi.show();
    ra.show();
    sn.show();
    el.show();
    none.show();
    });

    //when shape is mouse pressed
    Shape.mousePressed(function(){
    button1.hide();
    clearButton.hide();
    colorButton.hide();
    Animals.hide();
    Fruit.hide();
    tri.show();
    sq.show();
    tra.show();
    ci.show();
    cl.show();
    st.show();
    rect.show();
    n1.show();

    });
    // when triangle button is mouse pressed
    tri.mousePressed(function(){
    triangle.visible = true;
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    st.hide();
    n1.hide();
    rect.hide();
    button1.show();
    Fruit.show();
    Shape.show();
    Animals.show();
    clearButton.show();  
    colorButton.show();
    tiger.visible = false;
    fish.visible = false;
    snake.visible = false;
    butterfly.visible = false;
    rabbit.visible = false;
    cow.visible = false;
    horse.visible = false;
    elephant.visible = false;
    rectangle.visible = false;
    square.visible = false;
    trapeqium.visible = false;
    star.visible = false;
    cloud.visible = false;
    circle.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    });
   //when star button is mouse pressed
    st.mousePressed(function(){
    star.visible = true;
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    st.hide();
    n1.hide();
    rect.hide();
    Shape.show();
    button1.show();
    Fruit.show();
    colorButton.show();
    clearButton.show(); 
    Animals.show();
    tiger.visible = false;
    fish.visible = false;
    snake.visible = false;
    butterfly.visible = false;
    rabbit.visible = false;
    cow.visible = false;
    horse.visible = false;
    elephant.visible = false;
    rectangle.visible = false;
    trapeqium.visible = false;
    triangle.visible = false;
    cloud.visible = false;
    circle.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    });
    //when rectangle button is mouse pressed
    rect.mousePressed(function(){
    rectangle.visible = true;
    tri.hide();
    sq.hide();
    tra.hide();
    n1.hide();
    ci.hide();
    cl.hide();
    st.hide();
    button1.show();
    Fruit.show();
    Shape.show();
    Animals.show();
    clearButton.show();
    colorButton.show(); 
    rect.hide();
    tiger.visible = false;
    fish.visible = false;
    snake.visible = false;
    butterfly.visible = false;
    rabbit.visible = false;
    cow.visible = false;
    horse.visible = false;
    elephant.visible = false;
    triangle.visible = false;
    square.visible = false;
    trapeqium.visible = false;
    star.visible = false;
    cloud.visible = false;
    circle.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    });
    //when cloud button is mouse pressed
    cl.mousePressed(function(){
    cloud.visible = true;
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    st.hide();
    rect.hide();
    n1.hide();
    button1.show();
    Fruit.show();
    Shape.show();
    Animals.show();
    clearButton.show();
    colorButton.show(); 
    tiger.visible = false;
    fish.visible = false;
    snake.visible = false;
    butterfly.visible = false;
    rabbit.visible = false;
    cow.visible = false;
    horse.visible = false;
    elephant.visible = false;
    rectangle.visible = false;
    square.visible = false;
    trapeqium.visible = false;
    star.visible = false;
    triangle.visible = false;
    circle.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    });
    //when circle button is mouse pressed
    ci.mousePressed(function(){
    circle.visible = true;
    Shape.show();
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    st.hide();
    n1.hide();
    rect.hide();
    button1.show();
    Fruit.show();
    Shape.show();
    Animals.show();
    clearButton.show();
    tiger.visible = false;
    fish.visible = false;
    snake.visible = false;
    butterfly.visible = false;
    rabbit.visible = false;
    cow.visible = false;
    horse.visible = false;
    elephant.visible = false;
    colorButton.show(); 
    cloud.visible = false;
    rectangle.visible = false;
    square.visible = false;
    trapeqium.visible = false;
    star.visible = false;
    triangle.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    });
     //when square button is mouse pressed
    sq.mousePressed(function(){
    square.visible = true;
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    button1.show();
    Fruit.show();
    Shape.show();
    Animals.show();
    clearButton.show();
    colorButton.show(); 
    st.hide();
    n1.hide();
    rect.hide();
    tiger.visible = false;
    fish.visible = false;
    snake.visible = false;
    butterfly.visible = false;
    rabbit.visible = false;
    cow.visible = false;
    horse.visible = false;
    elephant.visible = false;
    cloud.visible = false;
    rectangle.visible = false;
    trapeqium.visible = false;
    star.visible = false;
    triangle.visible = false;
    circle.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    });
     //when trapeqium button is mouse pressed
    tra.mousePressed(function(){
    trapeqium.visible = true;
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    st.hide();
    rect.hide();
    n1.hide();
    Animals.show();
    button1.show();
    Fruit.show();
    Shape.show();
    clearButton.show();
    colorButton.show(); 
    tiger.visible = false;
    fish.visible = false;
    snake.visible = false;
    butterfly.visible = false;
    rabbit.visible = false;
    cow.visible = false;
    horse.visible = false;
    elephant.visible = false;
    cloud.visible = false;
    rectangle.visible = false;
    square.visible = false;
    star.visible = false;
    triangle.visible = false;
    circle.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    });    
    // when none is pressed
    n1.mousePressed(function(){
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = false;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    tri.hide();
    sq.hide();
    tra.hide();
    ci.hide();
    cl.hide();
    st.hide();
    rect.hide();
    button1.show();
    Animals.show();
    Fruit.show();
    Shape.show();
    clearButton.show();
    colorButton.show(); 
    n1.hide();
    });

    //when fruit is mouse pressed
    Fruit.mousePressed(function(){
    wa.show();
    le.show();     
    st1.show();
    ma.show();
    gu.show();
    gr.show();
    ap.show();
    ba.show();
    n2.show();
    button1.hide();
    Animals.hide();
    Shape.hide();
    clearButton.hide();
    colorButton.hide(); 
    });
    //when shape is mouse pressed
    st1.mousePressed(function(){
    wa.hide();
    le.hide();     
    st1.hide();
    ma.hide();
    gu.hide();
    gr.hide();
    ap.hide();
    ba.hide();
    n2.hide();
    button1.show();
    Fruit.show();
    Shape.show();
    Animals.show();
    clearButton.show();
    colorButton.show(); 
    tiger.visible = false;
    fish.visible = false;
    snake.visible = false;
    butterfly.visible = false;
    rabbit.visible = false;
    cow.visible = false;
    horse.visible = false;
    elephant.visible = false;
    apple.visible = false;
    banana.visible = false;
    strawberry.visible = true;
    mango.visible = false;
    grapes.visible = false;
    guava.visible = false;
    lemon.visible = false;
    watermelon.visible = false;
    triangle.visible = false;
    circle.visible = false;
    square.visible = false;
    trapeqium.visible = false;
    rectangle.visible = false;
    cloud.visible = false;
    star.visible = false;
        });
         // when guava is pressed
        gu.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        n2.hide();
        ap.hide();
        ba.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        Animals.show();
        clearButton.show();
        colorButton.show(); 
        tiger.visible = false;
        fish.visible = false;
        snake.visible = false;
        butterfly.visible = false;
        rabbit.visible = false;
        cow.visible = false;
        horse.visible = false;
        elephant.visible = false;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = true;
        lemon.visible = false;
        watermelon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
        });
         // when grapes is pressed
        gr.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        n2.hide();
        ap.hide();
        ba.hide();
        button1.show();
        Animals.show();
        Fruit.show();
        Shape.show();
        clearButton.show();
        colorButton.show(); 
        tiger.visible = false;
        fish.visible = false;
        snake.visible = false;
        butterfly.visible = false;
        rabbit.visible = false;
        cow.visible = false;
        horse.visible = false;
        elephant.visible = false;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = true;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
        });
        // when apple is pressed
        ap.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        n2.hide();
        gr.hide();
        ap.hide();
        ba.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        Animals.show();
        clearButton.show();
        colorButton.show(); 
        tiger.visible = false;
        fish.visible = false;
        snake.visible = false;
        butterfly.visible = false;
        rabbit.visible = false;
        cow.visible = false;
        horse.visible = false;
        elephant.visible = false;
        apple.visible = true;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
         guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
         });
        // when banana is pressed
        ba.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        ap.hide();
        n2.hide();
        ba.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        Animals.show();
        clearButton.show();
        colorButton.show(); 
        tiger.visible = false;
        fish.visible = false;
        snake.visible = false;
        butterfly.visible = false;
        rabbit.visible = false;
        cow.visible = false;
        horse.visible = false;
        elephant.visible = false;
        apple.visible = false;
        banana.visible = true;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
        });
        // when mango is pressed
        ma.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        n2.hide();
        ap.hide();
        ba.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        Animals.show();
        clearButton.show();
        colorButton.show(); 
        tiger.visible = false;
        fish.visible = false;
        snake.visible = false;
        butterfly.visible = false;
        rabbit.visible = false;
        cow.visible = false;
        horse.visible = false;
        elephant.visible = false;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = true;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
        });
        // when lemon is pressed
        le.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        ap.hide();
        ba.hide();
        n2.hide();
        button1.show();
        Fruit.show();
        Animals.show();
        Shape.show();
        clearButton.show();
        colorButton.show(); 
        tiger.visible = false;
        fish.visible = false;
        snake.visible = false;
        butterfly.visible = false;
        rabbit.visible = false;
        cow.visible = false;
        horse.visible = false;
        elephant.visible = false;
        lemon.visible = true;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        watermelon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
        });
        // when watermelon is pressed
        wa.mousePressed(function(){
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        ap.hide();
        n2.hide();
        ba.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        Animals.show();
        clearButton.show();
        colorButton.show(); 
        tiger.visible = false;
        fish.visible = false;
        snake.visible = false;
        butterfly.visible = false;
        rabbit.visible = false;
        cow.visible = false;
        horse.visible = false;
        elephant.visible = false;
        watermelon.visible = true;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
        });
        // when none is pressed
        n2.mousePressed(function(){
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        trapeqium.visible = false;
        wa.hide();
        le.hide();     
        st1.hide();
        ma.hide();
        gu.hide();
        gr.hide();
        ap.hide();
        ba.hide();
        n2.hide();
        button1.show();
        Fruit.show();
        Animals.show();
        Shape.show();
        clearButton.show();
        colorButton.show(); 
        });
        // when tiger is pressed
        ti.mousePressed(function(){
        tiger.visible = true;
        ti.hide();
        bu.hide();
        co.hide();
        ho.hide();
        fi.hide();
        ra.hide();
        sn.hide();
        el.hide();
        none.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        clearButton.show();  
        colorButton.show();
        fish.visible = false;
        snake.visible = false;
        butterfly.visible = false;
        rabbit.visible = false;
        cow.visible = false;
        horse.visible = false;
        elephant.visible = false;
        rectangle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        star.visible = false;
        cloud.visible = false;
        circle.visible = false;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        });
        // when butterfly is pressed
        bu.mousePressed(function(){
        butterfly.visible = true;
        ti.hide();
        bu.hide();
        co.hide();
        ho.hide();
        fi.hide();
        ra.hide();
        sn.hide();
        el.hide();
        none.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        clearButton.show();  
        colorButton.show();
        tiger.visible = false;
        fish.visible = false;
        snake.visible = false;                    
        rabbit.visible = false;
        cow.visible = false;
        horse.visible = false;
        elephant.visible = false;
        rectangle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        star.visible = false;
        cloud.visible = false;
        circle.visible = false;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        });
        // when elephant is pressed
        el.mousePressed(function(){
        elephant.visible = true;
        ti.hide();
        bu.hide();
        co.hide();
        ho.hide();
        fi.hide();
        ra.hide();
        sn.hide();
        el.hide();
        none.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        clearButton.show();  
        colorButton.show();
        tiger.visible = false;
        snake.visible = false;
        butterfly.visible = false;
        rabbit.visible = false;
        cow.visible = false;
        horse.visible = false;
        fish.visible = false;
        rectangle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        star.visible = false;
        cloud.visible = false;
        circle.visible = false;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        });
         // when snake is pressed
        sn.mousePressed(function(){
        snake.visible = true;
        ti.hide();
        bu.hide();
        co.hide();
        ho.hide();
        fi.hide();
        ra.hide();
        sn.hide();
        el.hide();
        none.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        clearButton.show();  
        colorButton.show();
        tiger.visible = false;
        fish.visible = false;
        butterfly.visible = false;
        rabbit.visible = false;
        cow.visible = false;
        horse.visible = false;
        elephant.visible = false;
        tiger.visible = false;
        rectangle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        star.visible = false;
        cloud.visible = false;
        circle.visible = false;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        });
        // when fish is pressed
        fi.mousePressed(function(){
        fish.visible = true;
        ti.hide();
        bu.hide();
        ho.hide();
        co.hide();
        fi.hide();
        ra.hide();
        sn.hide();
        el.hide();
        none.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        clearButton.show();  
        colorButton.show();
        tiger.visible = false;
        snake.visible = false;
        butterfly.visible = false;
        rabbit.visible = false;
        cow.visible = false;
        horse.visible = false;
        elephant.visible = false;
        rectangle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        star.visible = false;
        cloud.visible = false;
        circle.visible = false;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        });
        // when rabbit is pressed
        ra.mousePressed(function(){
        rabbit.visible = true;
        ti.hide();
        bu.hide();
        ho.hide();
        co.hide();
        fi.hide();
        ra.hide();
        sn.hide();
        el.hide();
        none.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        clearButton.show();  
        colorButton.show();
        tiger.visible = false;
        snake.visible = false;
        butterfly.visible = false;
        fish.visible = false;
        cow.visible = false;
        horse.visible = false;
        elephant.visible = false;
        rectangle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        star.visible = false;
        cloud.visible = false;
        circle.visible = false;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        });
        // when horse is pressed
        ho.mousePressed(function(){
        horse.visible = true;
        ti.hide();
        bu.hide();
        co.hide();
        ho.hide();
        fi.hide();
        ra.hide();
        sn.hide();
        el.hide();
        none.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        clearButton.show();  
        colorButton.show();
        tiger.visible = false;
        fish.visible = false;
        snake.visible = false;
        butterfly.visible = false;
        rabbit.visible = false;
        cow.visible = false;
        elephant.visible = false;
        rectangle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        star.visible = false;
        cloud.visible = false;
        circle.visible = false;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        });
        // when none is pressed
        none.mousePressed(function(){
        horse.visible = false;
        ti.hide();
        bu.hide();
        co.hide();
        ho.hide();
        fi.hide();
        ra.hide();
        sn.hide();
        el.hide();
        none.hide();
        button1.show();            
        Fruit.show();
        Shape.show();
        clearButton.show();  
        colorButton.show();
        tiger.visible = false;
        fish.visible = false;
        snake.visible = false;            
        butterfly.visible = false;
        rabbit.visible = false;
        cow.visible = false;
        elephant.visible = false;
       }); 
        // when elephant is pressed
        el.mousePressed(function(){
        elephant.visible = true;
        ti.hide();
        bu.hide();
        co.hide();
        ho.hide();
        fi.hide();
        ra.hide();
        sn.hide();
        el.hide();
        none.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        clearButton.show();  
        colorButton.show();
        tiger.visible = false;
        fish.visible = false;
        snake.visible = false;
        butterfly.visible = false;
        rabbit.visible = false;
        cow.visible = false;
        horse.visible = false;
        rectangle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        star.visible = false;
        cloud.visible = false;
        circle.visible = false;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        }); 
        // when cow is pressed
        co.mousePressed(function(){
        cow.visible = true;
        ti.hide();
        bu.hide();
        co.hide();
        ho.hide();
        fi.hide();
        ra.hide();
        sn.hide();
        el.hide();
        none.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        clearButton.show();  
        colorButton.show();
        tiger.visible = false;
        fish.visible = false;
        snake.visible = false;
        butterfly.visible = false;
        rabbit.visible = false;
        horse.visible = false;
        elephant.visible = false;
        rectangle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        star.visible = false;
        cloud.visible = false;
        circle.visible = false;
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        });

     // when broderness button is mouse pressed   
    button1.mousePressed(function(){
    input.show();
    colorButton.hide();
    Fruit.hide();
    clearButton.hide();
    button2.show();
    Shape.hide();
    Animals.hide();
    });
     //when apply button is mouse pressed
    button2.mousePressed(function(){
    input.hide();
    button2.hide();
    Fruit.show();
    clearButton.show();
    colorButton.show();
    Shape.show();
    Animals.show();
    console.log("broderness been SET");
    weight  = input.value();  
    });

    //creating colour button, different colours and functions when they are mouse pressed
    var colorButton  = createButton("COLOUR");
    colorButton.position(displayWidth-140, displayHeight/10-30);
    colorButton.mousePressed(function(){
    var green = createButton("GREEN");
    green.position(displayWidth-300, displayHeight/8-30);
    green.style('background','green');

    var blue = createButton("BLUE");
    blue.position(displayWidth-300, displayHeight/8-50);
    blue.style('background', 'blue');

    var red = createButton("RED");
    red.position(displayWidth-300, displayHeight/8-70);
    red.style('background', 'red');

    var yellow = createButton("YELLOW");
    yellow.position(displayWidth-300, displayHeight/7+35);
    yellow.style('background', 'yellow');

    var purple = createButton("PURPLE");
    purple.position(displayWidth-300, displayHeight/7+55);
    purple.style('background', 'purple');

    var pink = createButton("PINK");
    pink.position(displayWidth-295, displayHeight/7+75);
    pink.style('background', 'pink');

    var brown = createButton("BROWN");
    brown.position(displayWidth-300, displayHeight/7-25);
    brown.style('background', 'brown');

    var white = createButton("WHITE");
    white.position(displayWidth-300, displayHeight/5-55);
    white.style('background', 'white');

    var orange = createButton("ORANGE");
    orange.position(displayWidth-300, displayHeight/5-35);
    orange.style('background' , 'orange')

    var gold = createButton("GOLD");
    gold.position(displayWidth-300, displayHeight/7+95);
    gold.style('background', 'gold');

    var violet = createButton("VIOLET");
    violet.position(displayWidth-300, displayHeight/4+25);
    violet.style('background', 'purple');

    var ruby = createButton("LAVENDER");
    ruby.position(displayWidth-300, displayHeight/4+45);
    ruby.style('background', 'lavender');

    var tur = createButton("TURQUOISE");
    tur.position(displayWidth-300, displayHeight/4+65);
    tur.style('background', 'skyblue');

    var copper = createButton("COPPER");
    copper.position(displayWidth-300, displayHeight/4+85);
    copper.style('background', 'orange');

    var peach = createButton("PEACH");
    peach.position(displayWidth-300, displayHeight/4+105);
    peach.style('background', 'LIGHTYELLOW');

    green.mousePressed(function(){
        stroke("green");
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        ruby.hide();
        peach.hide();
        brown.hide();
        white.hide();
        gold.hide();
        orange.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        Animals.show();
        clearButton.show();  
    });

    tur.mousePressed(function(){
        stroke("turquoise");
        green.hide();
        blue.hide();
        violet.hide();
        ruby.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        gold.hide();
        orange.hide();
        Shape.show();
        Fruit.show();
        button1.show();
        eraser.show();
        Animals.show();
        clearButton.show();  
    });

    red.mousePressed(function(){
        stroke("red");   
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        ruby.hide();
        tur.hide();
        violet.hide();
        peach.hide();
        copper.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        gold.hide();
        white.hide();
        orange.hide();
        button1.show();
        Shape.show();
        Fruit.show();
        Animals.show();
        clearButton.show();  
     });

    gold.mousePressed(function(){
        stroke("gold");  
        red.hide(); 
        green.hide();
        blue.hide();
        gold.hide();
        yellow.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        purple.hide();
        ruby.hide();
        pink.hide();
        brown.hide();
        white.hide();
        orange.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        Animals.show();
        clearButton.show();  
     });

    yellow.mousePressed(function(){
        stroke("yellow");  
        green.hide();
        blue.hide();
        ruby.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        gold.hide();
        white.hide();
        orange.hide();
        button1.show();
        Shape.show();
        Fruit.show();
        Animals.show();
        clearButton.show();
     });

     blue.mousePressed(function(){
        stroke("blue");  
        white.hide();
        orange.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        ruby.hide();
        button1.show();
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        gold.hide();
        pink.hide();
        brown.hide();
        Fruit.show();
        Shape.show();
        Animals.show();
        clearButton.show(); 
     });

    ruby.mousePressed(function(){
        stroke("lavender");   
        green.hide();
        blue.hide();
        red.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        yellow.hide();
        purple.hide();
        ruby.hide();
        pink.hide();
        brown.hide();
        gold.hide();
        white.hide();
        orange.hide();
        Fruit.show();
        button1.show();
        Shape.show();
        Animals.show();
        clearButton.show();  
     });


    purple.mousePressed(function(){
        stroke("purple");
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        gold.hide();
        violet.hide();
        ruby.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        orange.hide();
        button1.show();
        Shape.show();
        Fruit.show();
        Animals.show();
        clearButton.show();
     });

     violet.mousePressed(function(){
        stroke("purple");   
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        gold.hide();
        violet.hide();
        ruby.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        white.hide();
        orange.hide();
        button1.show();
        Shape.show();
        Fruit.show();
        Animals.show();
        clearButton.show();  
     });

     orange.mousePressed(function(){
        stroke("orange");
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        ruby.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        white.hide();
        gold.hide();
        orange.hide();
        button1.show();
        Shape.show();
        Fruit.show();
        Animals.show();
        clearButton.show();
    });

    pink.mousePressed(function(){
        stroke("pink");
        green.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        ruby.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        gold.hide();
        brown.hide();
        white.hide();
        orange.hide();
        button1.show();
        Shape.show();
        Fruit.show();
        Animals.show();
        clearButton.show();
     });

    brown.mousePressed(function(){
        stroke("brown");
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        gold.hide();
        white.hide();
        violet.hide();
        ruby.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        orange.hide();
        button1.show();
        Fruit.show();
        Shape.show();
        Animals.show();
        clearButton.show();
    });

    white.mousePressed(function(){
        stroke("white");    
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        violet.hide();
        ruby.hide();
        tur.hide();
        copper.hide();
        peach.hide();
        brown.hide();
        gold.hide();
        white.hide();
        orange.hide();
        Shape.show();
        Fruit.show();
        Animals.show();
        button1.show();
        clearButton.show();     
    });
      
    peach.mousePressed(function(){
        stroke("LIGHTYELLOW");
        green.hide();
        blue.hide();
        violet.hide();
        tur.hide();
        copper.hide();
        red.hide();
        peach.hide();
        yellow.hide();
        purple.hide();
        pink.hide();
        brown.hide();
        white.hide();
        ruby.hide();
        gold.hide();
        orange.hide();
        button1.show();
        Shape.show();
        Fruit.show();
        Animals.show();
        clearButton.show();  
    });
      
    copper.mousePressed(function(){
        stroke("orange");
        green.hide();
        blue.hide();
        red.hide();
        yellow.hide();
        peach.hide();
        ruby.hide();
        purple.hide();
        copper.hide();
        pink.hide();
        violet.hide();
        tur.hide();
        brown.hide();
        white.hide();
        gold.hide();
        orange.hide();
        Fruit.show();
        button1.show();
        clearButton.show();  
        Animals.show();
        Shape.show();
    });
       // hiding them
        button1.hide();
        button2.hide();
        clearButton.hide();
        Shape.hide();
        Fruit.hide();
        Animals.hide();
   });

    }

 
function draw() {
    background(255);
    
      if (isDrawing) {
          var Path = {
              x: mouseX,
              y: mouseY
          };
          currentPath.push(Path);
      }
      strokeWeight(weight);
      noFill();

    for (var i = 0; i < Drawing.length; i++) {
      var path = Drawing[i];
      beginShape();
        for (var j = 0; j < path.length; j++) {
            vertex(path[j].x, path[j].y);
       }
          endShape();
      }


      drawSprites();

  }
  
  function clearDrawing() {
      Drawing = [];
        apple.visible = false;
        banana.visible = false;
        strawberry.visible = false;
        mango.visible = false;
        grapes.visible = false;
        guava.visible = false;
        lemon.visible = false;
        watermelon.visible = false;
        triangle.visible = false;
        circle.visible = false;
        square.visible = false;
        trapeqium.visible = false;
        rectangle.visible = false;
        cloud.visible = false;
        star.visible = false;
  }

  function startPath() {
    isDrawing = true;
    currentPath = [];
    Drawing.push(currentPath);
}

function endPath() {
    isDrawing = false;
}