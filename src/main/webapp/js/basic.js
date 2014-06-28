window.onload = function(){

    // Holds information about skybox color and ground textere
    var initArray = {};
    initArray.groundTexture = 'img/gras.png';
    initArray.skyboxColor = 'aabbcc';
    console.log(initArray);
    init(initArray);
    ////////////
    	// CUSTOM //
    	////////////
    animate();
    	var geometry = new THREE.SphereGeometry( 10, 3, 3 );
    	var material = new THREE.MeshLambertMaterial( { color: 0x000088 } );
    	mesh = new THREE.Mesh( geometry, material );
    	mesh.position.set(0,40,0);
    	scene.add(mesh);


    	var geometry = new THREE.BoxGeometry ( 30, 32, 16, 15, 12,6 );
        	var material = new THREE.MeshLambertMaterial( { color: 0x000088 } );
        	mesh = new THREE.Mesh( geometry, material );
        	mesh.position.set(50,40,0);
        	scene.add(mesh);



}
