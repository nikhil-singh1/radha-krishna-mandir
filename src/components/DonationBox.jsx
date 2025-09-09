import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function DonationBox3D() {
  const mountRef = useRef(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene / Camera / Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfef3e0); // warm background

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2.5, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 1);
    dir.position.set(5, 10, 7);
    dir.castShadow = true;
    scene.add(dir);

    // Ground plane (hidden but for shadows)
    const groundGeo = new THREE.PlaneGeometry(20, 20);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.25;
    ground.receiveShadow = true;
    scene.add(ground);

    // Donation box
    const boxGroup = new THREE.Group();

    // Body (Golden look)
    const bodyGeo = new THREE.BoxGeometry(3.2, 2, 2.2);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,      // gold color
      metalness: 0.6,
      roughness: 0.4,
      emissive: 0xffd700,
      emissiveIntensity: 0.1
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0;
    body.castShadow = true;
    boxGroup.add(body);

    // Slot
    const slotGeo = new THREE.BoxGeometry(1.6, 0.06, 0.4);
    const slotMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      metalness: 0.8,
      roughness: 0.2
    });
    const slot = new THREE.Mesh(slotGeo, slotMat);
    slot.position.set(0, 1.02, 0.15);
    boxGroup.add(slot);

    // Trim
    const trimGeo = new THREE.BoxGeometry(3.4, 0.12, 2.4);
    const trimMat = new THREE.MeshStandardMaterial({
      color: 0xffc300,
      metalness: 0.5,
      roughness: 0.3,
      emissive: 0xffd700,
      emissiveIntensity: 0.08
    });
    const trim = new THREE.Mesh(trimGeo, trimMat);
    trim.position.set(0, 1.08, 0);
    boxGroup.add(trim);

    // Front label background
    const labelGeo = new THREE.BoxGeometry(2.0, 0.9, 0.02);
    const labelMat = new THREE.MeshStandardMaterial({
      color: 0xffedd5,
      metalness: 0.1,
      roughness: 0.6
    });
    const label = new THREE.Mesh(labelGeo, labelMat);
    label.position.set(0, -0.2, 1.12);
    boxGroup.add(label);

    // Hindi text on front
    const textCanvas = document.createElement("canvas");
    textCanvas.width = 512;
    textCanvas.height = 256;
    const ctx = textCanvas.getContext("2d");
    ctx.fillStyle = "#ff0000"; // Red text
     ctx.font = "30px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("दान पेटी - नव युवक समिति द्वारा प्रबंधित", 256, 128);
    const tex = new THREE.CanvasTexture(textCanvas);
    const textMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true });
    const textPlane = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 0.9), textMat);
    textPlane.position.set(0, -0.22, 1.14 + 0.011);
    boxGroup.add(textPlane);

    scene.add(boxGroup);

    // Coin template (bright gold)
    const coinGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.06, 32);
    const coinMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0xffd700,
      emissiveIntensity: 0.2
    });

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 3.5;
    controls.maxDistance = 12;
    controls.target.set(0, 0, 0);

    // Coin state
    let coins = [];

    function spawnCoin() {
      const coin = new THREE.Mesh(coinGeo, coinMat.clone());
      coin.rotation.x = Math.PI / 2;
      coin.position.set((Math.random() - 0.5) * 1.2, 2.2, 0.15);
      coin.userData.speed = 0;
      coin.userData.falling = true;
      coins.push(coin);
      scene.add(coin);
    }

    function updateCoins(delta) {
      for (let i = coins.length - 1; i >= 0; i--) {
        const c = coins[i];
        if (!c.userData.falling) continue;
        c.userData.speed += 9.8 * delta;
        c.position.y -= c.userData.speed * delta;
        c.rotation.z += 6 * delta;

        if (c.position.y <= 1.05) {
          const xOK = Math.abs(c.position.x) < 0.8;
          const zOK = Math.abs(c.position.z - 0.15) < 0.6;
          if (xOK && zOK) {
            c.userData.falling = false;
            const sinkTarget = { y: 0.35 };
            c.userData.sinkStart = c.position.y;
            c.userData.sinkDelta = c.position.y - sinkTarget.y;
            c.userData.sinkTime = 0;
            c.userData.sinkDuration = 0.25;
          } else {
            c.userData.speed *= 0.4;
            c.position.y = 1.06;
            c.position.x += (Math.random() - 0.5) * 0.15;
            c.position.z += (Math.random() - 0.5) * 0.15;
          }
        }

        if (!c.userData.falling && c.userData.sinkTime !== undefined) {
          c.userData.sinkTime += delta;
          const s = Math.min(1, c.userData.sinkTime / c.userData.sinkDuration);
          c.position.y = c.userData.sinkStart - c.userData.sinkDelta * s;
          if (s >= 1) {
            setTimeout(() => {
              scene.remove(c);
            }, 400);
            coins.splice(i, 1);
          }
        }
      }
    }

    function onWindowResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    window.addEventListener("resize", onWindowResize);

    const clock = new THREE.Clock();
    function animate() {
      const delta = clock.getDelta();
      controls.update();
      updateCoins(delta);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // Attach spawnCoin to mount element
    mount.__three_spawn = spawnCoin;

    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [t]);

  const handleDonateClick = () => {
    const node = mountRef.current;
    if (!node) return;

    const fn = node.__three_spawn;
    if (typeof fn === "function") {
      for (let i = 0; i < 3; i++) fn();
    }

    setTimeout(() => {
      navigate("/coming_soon"); // Redirect after coins
    }, 1200);
  };

  return (
    <section className="py-12 bg-orange-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="bg-white rounded-lg shadow-xl p-6 flex-1">
          <h2 className="text-2xl font-bold text-orange-900 mb-3">दान पेटी</h2>
          <p className="text-gray-700 mb-2">{t("donationDesc")}</p>
          <p className="text-gray-600 italic mb-4">
            This amount is for temple development.
          </p>
          <button
            onClick={handleDonateClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            {t("donateNow")}
          </button>
        </div>

        <div
          className="w-full md:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg bg-white"
          ref={mountRef}
        ></div>
      </div>
    </section>
  );
}
