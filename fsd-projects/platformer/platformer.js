$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300,650,200,20);
    createPlatform(500,550,200,20);
    createPlatform(800,600,200,20);
    createPlatform(650,430,200,20);
    createPlatform(1100,500,200,20);
    createPlatform(1000,390,200,20);
    createPlatform(700,250,200,20);
    createPlatform(1100,150,200,20);


    // TODO 3 - Create Collectables
    createCollectable("diamond",400,640,0.5,0.7);
    createCollectable("diamond",600,500,0.5,0.7);
    createCollectable("diamond",800,400,0.5,0.7);
    createCollectable("diamond",800,230,0.5,0.7);
    createCollectable("diamond",1100,380,0.5,0.7);
    
    // TODO 4 - Create Cannons
     createCannon("right",300,1000);
     createCannon("left",500,2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
