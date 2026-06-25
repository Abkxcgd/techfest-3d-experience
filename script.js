// GSAP Animation
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.from(".hero h1", {
    y: -100,
    opacity: 0,
    duration: 1.2
});

gsap.from(".hero p", {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: .4
});

gsap.from(".hero button", {
    scale: 0,
    duration: .8,
    delay: .8
});

// Cards Animation
gsap.from(".card", {
    scrollTrigger: ".cards",
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: .3
});

// Events Animation
gsap.from(".event", {
    scrollTrigger: ".events",
    x: -200,
    opacity: 0,
    duration: .8,
    stagger: .2
});

// Contact Animation
gsap.from(".contact", {
    scrollTrigger: ".contact",
    y: 120,
    opacity: 0,
    duration: 1
});

// ===== THREE.JS 3D BACKGROUND =====

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(window.innerWidth,window.innerHeight);

document.getElementById("bg").appendChild(renderer.domElement);

// Geometry

const geometry = new THREE.TorusKnotGeometry(2,0.6,120,16);

const material = new THREE.MeshStandardMaterial({
color:0x00ffff,
wireframe:true
});

const knot = new THREE.Mesh(geometry,material);

scene.add(knot);

// Lights

const light = new THREE.PointLight(0xffffff,2);

light.position.set(10,10,10);

scene.add(light);

camera.position.z=8;

// Mouse Interaction

document.addEventListener("mousemove",(e)=>{

knot.rotation.x=e.clientY*0.001;

knot.rotation.y=e.clientX*0.001;

});

// Animation Loop

function animate(){

requestAnimationFrame(animate);

knot.rotation.z+=0.003;

renderer.render(scene,camera);

}

animate();

// Responsive

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});
