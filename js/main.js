//Classe criar a árvore
class Tree{
    //Função para crias as arvores
    tree(){
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(11, -10, 15, 12), new THREE.MeshLambertMaterial({color: "#795539"}));
        trunk.position.set(0, 5, 0);
        trunk.scale.set(0.1, 0.7, 0.1);
        
        const leaveGeometry = new THREE.SphereGeometry(4, 50, 50);
        const leaveMaterial = new THREE.MeshStandardMaterial({color: "#025500"});

        const leave0 = new THREE.Mesh(leaveGeometry, leaveMaterial);
        leave0.position.set(0, 11 , 0);
        leave0.scale.set(0.5, 0.5, 0.5);

        const leave1 = new THREE.Mesh(leaveGeometry, leaveMaterial);
        leave1 .position.set(0.9, 10, 0.9);
        leave1 .scale.set(0.5, 0.5, 0.5);

        const leave2 = new THREE.Mesh(leaveGeometry, leaveMaterial);
        leave2.position.set(0.9, 10, -0.9);
        leave2.scale.set(0.5, 0.5, 0.5);

        const leave3 = new THREE.Mesh(leaveGeometry, leaveMaterial);
        leave3.position.set(-0.9, 10, -0.9);
        leave3.scale.set(0.5, 0.5, 0.5);

        const leave4 = new THREE.Mesh(leaveGeometry, leaveMaterial);
        leave4.position.set(-0.9, 10, 0.9);
        leave4.scale.set(0.5, 0.5, 0.5);

        const leave5 = new THREE.Mesh(leaveGeometry, leaveMaterial);
        leave5.position.set(0, 10, 0);
        leave5.scale.set(0.5, 0.5, 0.5);

        const tree = new THREE.Object3D();
        tree.add(trunk, leave0, leave1 , leave2, leave3, leave4, leave5);
        return tree;
    }
}

//Classe para criar os alvos
class Targets{
    //Função para criar os alvos circulares
    circle(){
        const circle1 = new THREE.Mesh(new THREE.CircleGeometry(2, 32), new THREE.MeshBasicMaterial({color: '#6E0202'}));
        circle1.position.set(0, 7, -20);

        const circle2 = new THREE.Mesh(new THREE.CircleGeometry(1.5, 32), new THREE.MeshBasicMaterial({color: '#FFFFFF'}));
        circle1.add(circle2);

        const circle3 = new THREE.Mesh(new THREE.CircleGeometry(1, 32), new THREE.MeshBasicMaterial({color: '#6E0202'}));
        circle1.add(circle3);

        const circle4 = new THREE.Mesh(new THREE.CircleGeometry(0.5, 32), new THREE.MeshBasicMaterial({color: '#FFFFFF'}));
        circle1.add(circle4);

        const lathe1 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.1), new THREE.MeshBasicMaterial({color: '#FFF5F5'}));
        lathe1.position.set(0, 5, -20.2);
        lathe1.rotation.set(0, 0, 0.7);

        const post1 = new THREE.Mesh(new THREE.BoxGeometry(0.23, 5.3, 0.2), new THREE.MeshBasicMaterial({color: '#6E0202'}));
        post1.position.set(0, 2.2, -20.2);

        const lathe2 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), new THREE.MeshBasicMaterial({color: '#FFF5F5'}));
        lathe2.position.set(-0.06, 0.5, -20.3);

        const circle = new THREE.Object3D();
        circle.add(circle1, lathe1, post1, lathe2);
        circle.castShadow = true;
        circle.receiveShadow = true;
        return circle;
    }

    //Função para criar os alvos humanos
    human(){
        const head = new THREE.Mesh(new THREE.CapsuleGeometry(0.7, 0.7, 4, 8), new THREE.MeshBasicMaterial({color: '#FFFFFF'}));
        head.position.set(0.1, 9.9, 0);

        const targetHuman1 = new THREE.Mesh(new THREE.CircleGeometry(0.38, 32), new THREE.MeshBasicMaterial({color: '#6E0202'}));
        targetHuman1.position.set(0.1, 0, 0.75);
        head.add(targetHuman1);

        const neck = new THREE.Mesh(new THREE.CapsuleGeometry(0.35, 0.3, 4, 8), new THREE.MeshBasicMaterial({color: '#FFFFFF'}));
        neck.position.set(0.13, 9, 0.2);

        const body = new THREE.Mesh(new THREE.CircleGeometry(3, 5), new THREE.MeshBasicMaterial({color: '#FFFFFF'}));
        body.rotation.z= -1;
        body.position.set(0, 5.9, 0);

        const targetHuman2 = new THREE.Mesh(new THREE.CircleGeometry(1.5, 32), new THREE.MeshBasicMaterial({color: '#6E0202'}));
        body.add(targetHuman2);

        const targetHuman3 = new THREE.Mesh(new THREE.CircleGeometry(1, 32), new THREE.MeshBasicMaterial({color: '#FFFFFF'}));
        body.add(targetHuman3);

        const targetHuman4 = new THREE.Mesh(new THREE.CircleGeometry(0.5, 32), new THREE.MeshBasicMaterial({color: '#6E0202'}));
        body.add(targetHuman4);

        const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.6, 3, 0.1), new THREE.MeshBasicMaterial({color: '76411E'}));
        leftLeg.position.set(-1.4, 2.1, 0);

        const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.6, 3, 0.1), new THREE.MeshBasicMaterial({color: '76411E'}));
        rightLeg.position.set(1.15, 2, 0);

        const legs = new THREE.Object3D();
        legs.add(leftLeg, rightLeg);

        const human = new THREE.Object3D();
        human.add(head, neck, body, legs);
        human.castShadow = true;
        human.receiveShadow = true;
        return human;
    }
}

//Classe para criar a besta
class Beast{
    //Função para criar dos carris
    carris(){
        const barra1 = new THREE.Mesh(new THREE.BoxGeometry(50, 1, 1), new THREE.MeshBasicMaterial({color: '#3C3939'}));
        barra1.position.set(0, 0.15, 26.5);
        
        const barra2 = new THREE.Mesh(new THREE.BoxGeometry(50, 1, 1), new THREE.MeshBasicMaterial({color: '#3C3939'}));
        barra2.position.set(0, 0.15, 23);
        
        const travessa1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 3.5), new THREE.MeshBasicMaterial({color: '#3C3939'}));
        travessa1.position.set(-24.5, 0.15, 24.7);
        
        const travessa2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 3.5), new THREE.MeshBasicMaterial({color: '#3C3939'}));
        travessa2.position.set(-14.5, 0.15, 24.7);
        
        const travessa3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 3.5), new THREE.MeshBasicMaterial({color: '#3C3939'}));
        travessa3.position.set(-4.5, 0.15, 24.7);

        const travessa4 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 3.5), new THREE.MeshBasicMaterial({color: '#3C3939'}));
        travessa4.position.set(4.5, 0.15, 24.7);

        const travessa5 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 3.5), new THREE.MeshBasicMaterial({color: '#3C3939'}));
        travessa5.position.set(14.5, 0.15, 24.7);

        const travessa6 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 3.5), new THREE.MeshBasicMaterial({color: '#3C3939'}));
        travessa6.position.set(24.5, 0.15, 24.7);

        const carris = new THREE.Object3D();
        carris.add(barra1, barra2, travessa1, travessa2, travessa3, travessa4, travessa5, travessa6);
        return carris;
    }

    //Função para a criar a rampa
    rampa(){
        const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 50, 50), new THREE.MeshBasicMaterial({color: '#000000'}));
        sphere1.position.set(-1.8, 1.1, 26.5);

        const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 50, 50), new THREE.MeshBasicMaterial({color: '#000000'}));
        sphere2.position.set(-1.8, 1.1, 23);

        const sphere3 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 50, 50), new THREE.MeshBasicMaterial({color: '#000000'}));
        sphere3.position.set(1.8, 1.1, 23);

        const sphere4 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 50, 50), new THREE.MeshBasicMaterial({color: '#000000'}));
        sphere4.position.set(1.8, 1.1, 26.5);

        const plane = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 0.1), new THREE.MeshBasicMaterial({color: '#686664'}));
        plane.position.set(0.05, 1.6, 24.6);
        plane.rotation.set(7.85, 0, 0);
        
        const rampa = new THREE.Object3D();
        rampa.add(sphere1, sphere2, sphere3, sphere4, plane);
        rampa.castShadow = true;
        rampa.receiveShadow = true;
        return rampa;
    }

    ////Função para a criar a besta
    beast(){
        const base1 = new THREE.Mesh(new THREE.BoxGeometry(2, 0.340, 0.6), new THREE.MeshBasicMaterial({color: '#76411E'}));
        base1.position.set(0, 1.8, 24.6);

        const base2 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.340, 2), new THREE.MeshBasicMaterial({color: '#76411E'}));
        base2.position.set(0, 1.8, 24.6);

        const base0 = new THREE.Mesh(new THREE.BoxGeometry(0.340, 4, 0.6), new THREE.MeshBasicMaterial({color: '#76411E'}));
        base0.position.set(0, 3.9, 24.6);

        const base3 = new THREE.Mesh(new THREE.BoxGeometry(4, 0.340, 0.6), new THREE.MeshBasicMaterial({color: '#76411E'}));
        base3.position.set(0, 6, 24.6);

        const base4 = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.340, 0.5), new THREE.MeshBasicMaterial({color: '#76411E'}));
        base4.position.set(0, 4, 24.6);

        const base5 = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 0.2), new THREE.MeshBasicMaterial({color: '#76411E'}));
        base5.position.set(0.8, 4.6, 26);
        base5.rotation.set(1.1, 0, 0);

        const base6 = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 0.2), new THREE.MeshBasicMaterial({color: '#76411E'}));
        base6.position.set(0.8, 5.6, 26);
        base6.rotation.set(1.83, 0, 0);

        const base7 = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 0.2), new THREE.MeshBasicMaterial({color: '#76411E'}));
        base7.position.set(-0.8, 4.6, 26);
        base7.rotation.set(1.1, 0, 0);

        const base8 = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 0.2), new THREE.MeshBasicMaterial({color: '#76411E'}));
        base8.position.set(-0.8, 5.6, 26);
        base8.rotation.set(1.83, 0, 0);

        const cylinder1 = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 3.4), new THREE.MeshBasicMaterial({color: '#76411E'}));
        cylinder1.position.set(2, 6, 24.6);

        const cylinder2 = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 3.4), new THREE.MeshBasicMaterial({color: '#76411E'}));
        cylinder2.position.set(-2, 6, 24.6);

        const b = new THREE.Object3D();
        b.add(base1, base2, base0, base3, base4, base5, base6, base7, base8, cylinder1, cylinder2);

        const rampa1 = this.rampa();
        const beast = new THREE.Object3D();
        beast.add(rampa1, b);
        return beast;
    }

    //Função para criar as flechas
    arrow(){
        const flecha = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 2.6), new THREE.MeshStandardMaterial({color: '#000000'}));
        flecha.position.set(0.9, 5.95, 26);
        flecha.rotation.set(3.45, 0, 0);

        const ponta = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.2, 32), new THREE.MeshStandardMaterial({color: '#FFFFFF'}));
        ponta.position.set(0.9, 6.35, 24.7);
        ponta.rotation.set(4.9, 0, 0);

        
        const arrow = new THREE.Object3D();
        arrow.add(flecha, ponta);
        return arrow;
    }
}

//criação do renderizador
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Camera
const sizes={
    width: 1300,
    height: 600
} 

const scene = new THREE.Scene(); //Cria a cena
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
const camera1 = new THREE.OrthographicCamera(
    window.innerWidth / -2,
    window.innerWidth / 2,
    window.innerHeight / 1,
    window.innerHeight / -3,
    0, 2000);
camera.position.set(0, 30, 35.5); //Define a posição da camera
camera.rotation.set(Math.PI/2, 0, 0);
camera.lookAt(0, 0, 0);

//Criação do ambientLight
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

//Criação de SpotLight
const spotLight = new THREE.SpotLight(0xFFFFFF);
spotLight.position.set(-100, 100, 150);
spotLight.castShadow = true;
spotLight.angle = 0.2;
scene.add(spotLight);

//Criaão do Sistema de Coordenadas
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

//Criação da Grelha
const gridHelper = new THREE.GridHelper(65, 50);
scene.add(gridHelper);

//Criação da Caixa
const box = new THREE.Mesh(new THREE.BoxGeometry(50, 60, 1), new THREE.MeshStandardMaterial({color: '#057A07'}));
box.rotation.x = -0.5 * Math.PI;
box.receiveShadow = true;
scene.add(box);

const target = new Targets(); //Instância da Classe Targets

//Criação dos alvos circulares
const circle1 = target.circle();
circle1.position.set(-17, 0, 1);
const circle1BB= new THREE.Sphere(circle1.position, 1);

const circle2 = target.circle();
circle2.position.set(-6, 0, 1);
const circle2BB= new THREE.Sphere(circle2.position, 1);

const circle3 = target.circle();
circle3.position.set(5.5, 0, 1);
const circle3BB= new THREE.Sphere(circle3.position, 1);

const circle4 = target.circle();
circle4.position.set(17, 0, 1);
const circle4BB= new THREE.Sphere(circle4.position, 1);

//Criação dos alvos Humanos
const human1 = target.human();
human1.position.set(-12, 0, -20);

const human2 = target.human();
human2.position.set(0, 0, -20);

const human3 = target.human();
human3.position.set(11, 0, -20);

const b = new Beast(); //Instância da Classe Beast

//Função para a criação os carris
const carris = b.carris();
scene.add(carris);

//Função para a criação da besta
const beast = b.beast();
scene.add(beast);

//Criar flechas
const arrow1 = b.arrow();
arrow1.position.set(-1.8, 0, 0);
const arrow1BB= new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
arrow1BB.setFromObject(arrow1);

const arrow2 = b.arrow();
const arrow2BB= new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
arrow2BB.setFromObject(arrow2);

scene.add(arrow1, arrow2);

//Criar árvores
const tree = new Tree(); //Instância da Classe Tree
const tree1 = tree.tree();
tree1.position.set(-20, 0, -27);

const tree2 = tree.tree();
tree2.position.set(20, 0, -27);

const tree3 = tree.tree();
tree3.position.set(0, 0, -27);

scene.add(tree1, tree2, tree3);

//Criar paredes
const wall1 = new THREE.Mesh(new THREE.BoxGeometry(51, 13.2, 1), new THREE.MeshStandardMaterial({color: '#99460F'}));
wall1.position.set(0, 6.1, -30.4);
const wall1BB= new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
wall1BB.setFromObject(wall1);
scene.add(wall1);

const wall2 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 13.2, 61), new THREE.MeshStandardMaterial({color: '#99460F'}));
wall2.position.set(-25.2, 6.1, 0);
const wall2BB= new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
wall2BB.setFromObject(wall2);
scene.add(wall2);

const wall3 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 13.2, 61), new THREE.MeshStandardMaterial({color: '#99460F'}));
wall3.position.set(25.2, 6.1, 0);
scene.add(wall3);

const wall4 = new THREE.Mesh(new THREE.BoxGeometry(51, 13.2, 1), new THREE.MeshStandardMaterial({color: '#99460F'}));
wall4.position.set(0, 6.1, 30.4);
scene.add(wall4);

var value = 1;
var verifArrow = 1;
let arrayArrow = [];
//Evento para fazer aparecer e desaparecer os alvos, mover a besta e escolher as câmaras
window.addEventListener('keydown', function(e){
    if(e.key == "ArrowRight"){ //Para o movimento da besta
        if(beast.position.x < 20){
            beast.position.x += 1;
            arrow1.position.x += 1;
            arrow2.position.x += 1;
        }
    }

    if(e.key == "ArrowLeft"){ //Para o movimento da besta
        if(beast.position.x > -20){
            beast.position.x -= 1;
            arrow1.position.x -= 1;
            arrow2.position.x -= 1;
        }
    }

    if((e.key == "m") || (e.key == "M")){//Para mudar os alvos
        changeTargets();
    }

    if((e.key == "q") || (e.key == "Q")){
        verifArrow = 1;
    }

    if((e.key == "w") || (e.key == "W")){
        verifArrow = 2;
    }

    if((e.keyCode == 0) || (e.keyCode == 32)){//Para disparar as flechas
        chooseArrow();
    }  

    if(e.key == 1){
        camera.position.set(0, 50, 5);
        camera.rotation.set(Math.PI/2, 0, 0);
        camera.lookAt(0, 0, 0);
        //scene.add(camera1);
    }

    if(e.key == 2){
        camera.position.set(0, 30, 35.5);
        camera.rotation.set(Math.PI/2, 0, 0);
        camera.lookAt(0, 0, 0);
    }

    if(e.key == 3){
        camera.position.set(20.4, 40, 0);
        camera.rotation.set(0, -Math.PI/2, 0);
        camera.lookAt(0, 0, 0);
    }
});

function checkAgainstWalls(object) {

    const restitution = .5; // Restituição da velocidade
    let canvasSize = Constants.WALL_WIDTH / 2;

    for(var j = 0; j < object.length; j++){
        let posObj = object[j].design.position;
        let yBoundaries = posObj.y >= -Constants.WALL_HEIGHT / 2 && posObj.y <= Constants.WALL_HEIGHT / 2; 

        let xBoundaries = posObj.x >= (-canvasSize - Constants.WALL_THICKNESS)
        && posObj.x <= (canvasSize + Constants.WALL_THICKNESS);

        let zBoundaries = posObj.z >= (-canvasSize - Constants.WALL_THICKNESS)
        && posObj.z <= (canvasSize + Constants.WALL_THICKNESS);

        let checkBoundaries = xBoundaries || yBoundaries || zBoundaries;

        if (checkBoundaries) {

            canvasSize -= Constants.WALL_THICKNESS / 2;
            let bounced = false;
            const obj = object[j];
            let boxSize = new THREE.Vector3();
            boxSize = object[j].boundingBox.getSize(boxSize);
            const xBoxRadius = boxSize.x / 2;
            const zBoxRadius = boxSize.z / 2;

            // Check for left and right
            if (posObj.x < -canvasSize + xBoxRadius) {
                obj.speed.x = Math.abs(obj.speed.x) * restitution


            }

        } 
        
    } 
    
}



function chooseArrow(){
    var arrowClone;
    if(verifArrow == 1){
        arrowClone = arrow1.clone();
    }
    
    else if(verifArrow == 2){
        arrowClone = arrow2.clone();
    }

    scene.add(arrowClone);
    arrayArrow.push(arrowClone);
    aux = 0;
    if(verifArrow == 1){
        scene.remove(arrow1);
    }
    
    else if(verifArrow == 2){
        scene.remove(arrow2);
    }

    setTimeout(function(){
        aux = 1;
        if(verifArrow == 1){
            scene.add(arrow1);
        }
        
        else if(verifArrow == 2){
            scene.add(arrow2);
        }
    }, 300);
}

function changeTargets(){
    if(value == 1){
        scene.add(circle1, circle2, circle3, circle4);
        scene.remove(human1, human2, human3);
        value = 2;
    }

    else if(value == 2){
        scene.remove(circle1, circle2, circle3, circle4);
        scene.add(human1, human2, human3);
        value = 0;
    }

    else if(value == 0){
        scene.remove(circle1, circle2, circle3, circle4, human1, human2, human3);
        value = 1;
    }
}

renderer.setClearColor(0x3D9948);//Define a cor do background

/*
function checkCollisions(){
    if(arrow1BB.intersectsBox(wall1BB)){
        animate1();
    }else{

    }

    if(arrow2BB.intersectsBox(wall1BB)){
        animate1();
    }else{

    }


}

function animate1(){
    console.log("colidiu");
}

*/

//arrow2BB.copy(arrow2.geometry.boundingBox).applyMatrix4(arrow2.matrixWorld);
function animate(){
    function updateShoots(){
        arrayArrow.forEach((shoot, index) => {
            shoot.position.y += 0.2;
            shoot.position.z -= 0.7;
            //shoot.rotation.y -= 0.01;
            //shoot.rotation.x -= 0.01
            arrow1BB.position.set(0, +0.2, -0.7);
           
            checkCollisions();
            
            if(shoot.position.z < -55){
                scene.remove(shoot);
                arrayArrow.splice(index, 1);
            }

            setInterval(function(){
                shoot.position.y -= 0.08
                shoot.position.z += 0.04
            }, 200);
        });
    }
    updateShoots();
    
    
    renderer.render(scene, camera, camera1);
    requestAnimationFrame(animate);
    
}
animate();