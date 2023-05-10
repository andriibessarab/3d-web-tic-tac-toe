import mesh_Text from "../meshes/mesh_Text";


import * as THREE from "three";
import mesh_DecorCross from "../meshes/mesh_DecorCross";
import mesh_DecorCircle from "../meshes/mesh_DecorCircle";
import mesh_hiddenButtonTile from "../meshes/mesh_hiddenButtonTile";

function screen_Form(formType) {
    const screenComponents = new THREE.Group();

    const buttonTiles = new THREE.Group();

    screenComponents.add(buttonTiles);

    screenComponents.name = "screenComponents";
    buttonTiles.name = "buttonTiles";


    // eslint-disable-next-line default-case
    switch (formType) {
        case "log-in":
            mesh_Text("Log In", 10, 2, 2, -18.7, 39, -2, false)
                .then((textMesh) => {
                    screenComponents.add(textMesh);
                })
                .catch((error) => {
                    console.error(error);
                });

            buttonTiles.add(mesh_hiddenButtonTile(15, 10, 1, 0, -40.5, "log-in"));

            mesh_Text("Log In", 4, 1, 2, -7.5, -42, -1, false)
                .then((textMesh) => {
                    screenComponents.add(textMesh);
                })
                .catch((error) => {
                    console.error(error);
                });
            break;

        case "register":
            mesh_Text("Register", 10, 2, 2, -18.7, 39, -2, false)
                .then((textMesh) => {
                    screenComponents.add(textMesh);
                })
                .catch((error) => {
                    console.error(error);
                });

            buttonTiles.add(mesh_hiddenButtonTile(15, 10, 1, 0, -40.5, "register"));

            mesh_Text("Register", 4, 1, 2, -7.5, -42, -1, false)
                .then((textMesh) => {
                    screenComponents.add(textMesh);
                })
                .catch((error) => {
                    console.error(error);
                });
            break;

        case "join-game":
            mesh_Text("Join Game", 10, 2, 2, -33.3, 39, -2, true)
                .then((textMesh) => {
                    screenComponents.add(textMesh);
                })
                .catch((error) => {
                    console.error(error);
                });

            buttonTiles.add(mesh_hiddenButtonTile(15, 10, 1, 0, -40.5, "join-game"));

            mesh_Text("Join", 4, 1, 2, -5.3, -42, -1, false)
                .then((textMesh) => {
                    screenComponents.add(textMesh);
                })
                .catch((error) => {
                    console.error(error);
                });
            break;
    }
                buttonTiles.add(mesh_hiddenButtonTile(10, 4, 1, 0, -50, "back"));

        mesh_Text("Back", 3, 1, 1.5, -5, -51, -1, true)
        .then((textMesh) => {
            screenComponents.add(textMesh);
        })
        .catch((error) => {
            console.error(error);
        });



    const decorMarkers = new THREE.Group();
    screenComponents.add(decorMarkers);
    decorMarkers.name = "decorMarkers";

    generateRandomCrosses(25);
    generateRandomCircles(25);

    return screenComponents;

    function generateRandomCrosses(n) {
        for (let i = 0; i < n; i++) {
            let x, y, z;
            do {
                x = (Math.random() - 0.5) * 300;
                y = (Math.random() - 0.5) * 200;
                z = (Math.random() - 0.5) * 300;
            } while (
                (x > -50 && x < 50 && z > -80 && z < 80) ||
                (x > -40 && x < 40 && z > -120 && z < 150)
                );
            const xOffset = x;
            const yOffset = y;
            const zOffset = z;
            const xRot = (Math.random() - 0.5) * Math.PI * 2;
            const yRot = (Math.random() - 0.5) * Math.PI * 2;
            const zRot = (Math.random() - 0.5) * Math.PI * 2;
            const opacity = Math.random() * 0.5 + 0.5;
            const scale = Math.random() * 1 + 1;

            const circle = mesh_DecorCross(xOffset, yOffset, zOffset, xRot, yRot, zRot, opacity, false);
            circle.scale.set(scale, scale, scale);
            decorMarkers.add(circle);
        }
    }

    function generateRandomCircles(n) {
        for (let i = 0; i < n; i++) {
            let x, y, z;
            do {
                x = (Math.random() - 0.5) * 300;
                y = (Math.random() - 0.5) * 200;
                z = (Math.random() - 0.5) * 300;
            } while (
                (x > -50 && x < 50 && z > -80 && z < 80) ||
                (x > -40 && x < 40 && z > -120 && z < 150)
                );
            const xOffset = x;
            const yOffset = y;
            const zOffset = z;
            const xRot = (Math.random() - 0.5) * Math.PI * 2;
            const yRot = (Math.random() - 0.5) * Math.PI * 2;
            const zRot = (Math.random() - 0.5) * Math.PI * 2;
            const opacity = Math.random() * 0.5 + 0.5;
            const scale = Math.random() * 1 + 1;

            const circle = mesh_DecorCircle(xOffset, yOffset, zOffset, xRot, yRot, zRot, opacity, false);
            circle.scale.set(scale, scale, scale);
            decorMarkers.add(circle);
        }
    }


}

export default screen_Form;



