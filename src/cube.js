(function (window) {
    "use strict";
    const ANIMATION_DURATION = 400;
    const DEFAULT_ROT_X = -37;
    const DEFAULT_ROT_Y = -47;
    const SCALE = 160;
    const FACES = {
        'u': {
            fields: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            color: 1,
            rX: 90,
            rY: 0,
            t: [
                [0, 1, 2],
                [1, 1, 2],
                [2, 1, 2],
                [0, 0, 2],
                [1, 0, 2],
                [2, 0, 2],
                [0, -1, 2],
                [1, -1, 2],
                [2, -1, 2],
            ],
            r: {
                fields: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 19, 20, 21, 30, 29, 28, 43, 44, 45],
                swaps: [3, 6, 9, 2, 5, 8, 1, 4, 7, 19, 20, 21, 30, 29, 28, 43, 44, 45, 10, 11, 12],
                cover: {
                    idx: 1,
                    rX: -90,
                    rY: 0,
                    t: [0, 0, -2],
                },
                axis: 'Y',
                to: -90,
            },
        },
        'l': {
            fields: [10, 11, 12, 13, 14, 15, 16, 17, 18],
            color: 2,
            rX: 0,
            rY: -90,
            t: [
                [-1, -1.5, 0.5],
                [0, -1.5, 0.5],
                [1, -1.5, 0.5],
                [-1, -0.5, 0.5],
                [0, -0.5, 0.5],
                [1, -0.5, 0.5],
                [-1, 0.5, 0.5],
                [0, 0.5, 0.5],
                [1, 0.5, 0.5],
            ],
            r: {
                fields: [10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 4, 7, 19, 22, 25, 46, 49, 52, 39, 42, 45],
                swaps: [16, 13, 10, 17, 14, 11, 18, 15, 12, 45, 42, 39, 7, 4, 1, 19, 22, 25, 46, 49, 52],
                cover: {
                    idx: 2,
                    rX: 0,
                    rY: 90,
                    t: [0, -1.5, -0.5],
                },
                axis: 'X',
                to: -90
            },
        },
        'f': {
            fields: [19, 20, 21, 22, 23, 24, 25, 26, 27],
            color: 3,
            rX: 0,
            rY: 0,
            t: [
                [0, -1.5, 1.5],
                [1, -1.5, 1.5],
                [2, -1.5, 1.5],
                [0, -0.5, 1.5],
                [1, -0.5, 1.5],
                [2, -0.5, 1.5],
                [0, 0.5, 1.5],
                [1, 0.5, 1.5],
                [2, 0.5, 1.5],
            ],
            r: {
                fields: [19, 20, 21, 22, 23, 24, 25, 26, 27, 1, 2, 3, 30, 33, 36, 46, 47, 48, 12, 15, 18],
                swaps: [25, 22, 19, 26, 23, 20, 27, 24, 21, 18, 15, 12, 1, 2, 3, 36, 33, 30, 46, 47, 48],
                cover: {
                    idx: 3,
                    rX: 0,
                    rY: 0,
                    t: [0, -1.5, 0.5],
                },
                axis: 'Z',
                to: 90
            },
        },
        'r': {
            fields: [28, 29, 30, 31, 32, 33, 34, 35, 36],
            color: 4,
            rX: 0,
            rY: 90,
            t: [
                [1, -1.5, 2.5],
                [0, -1.5, 2.5],
                [-1, -1.5, 2.5],
                [1, -0.5, 2.5],
                [0, -0.5, 2.5],
                [-1, -0.5, 2.5],
                [1, 0.5, 2.5],
                [0, 0.5, 2.5],
                [-1, 0.5, 2.5],
            ],
            r: {
                fields: [28, 29, 30, 31, 32, 33, 34, 35, 36, 3, 6, 9, 21, 24, 27, 48, 51, 54, 37, 40, 43],
                swaps: [30, 33, 36, 29, 32, 35, 28, 31, 34, 27, 24, 21, 48, 51, 54, 37, 40, 43, 9, 6, 3],
                cover: {
                    idx: 4,
                    rX: 0,
                    rY: 90,
                    t: [0, -1.5, 0.5]
                },
                axis: 'X',
                to: 90
            },
        },
        'b': {
            fields: [37, 38, 39, 40, 41, 42, 43, 44, 45],
            rX: 180,
            rY: 0,
            t: [
                [2, -0.5, 1.5],
                [1, -0.5, 1.5],
                [0, -0.5, 1.5],
                [2, 0.5, 1.5],
                [1, 0.5, 1.5],
                [0, 0.5, 1.5],
                [2, 1.5, 1.5],
                [1, 1.5, 1.5],
                [0, 1.5, 1.5],
            ],
            color: 5,
            r: {
                fields: [37, 38, 39, 40, 41, 42, 43, 44, 45, 10, 13, 16, 52, 53, 54, 34, 31, 28, 9, 8, 7],
                swaps: [39, 42, 45, 38, 41, 44, 37, 40, 43, 9, 8, 7, 10, 13, 16, 52, 53, 54, 34, 31, 28],
                cover: {
                    idx: 5,
                    rX: 0,
                    rY: 0,
                    t: [0, -1.5, -0.5],
                },
                axis: 'Z',
                to: -90
            },
        },
        'd': {
            fields: [46, 47, 48, 49, 50, 51, 52, 53, 54],
            color: 6,
            rX: -90,
            rY: 0,
            t: [
                [0, -1, 1],
                [1, -1, 1],
                [2, -1, 1],
                [0, 0, 1],
                [1, 0, 1],
                [2, 0, 1],
                [0, 1, 1],
                [1, 1, 1],
                [2, 1, 1],
            ],
            r: {
                fields: [46, 47, 48, 49, 50, 51, 52, 53, 54, 25, 26, 27, 16, 17, 18, 37, 38, 39, 36, 35, 34],
                swaps: [52, 49, 46, 53, 50, 47, 54, 51, 48, 16, 17, 18, 37, 38, 39, 36, 35, 34, 25, 26, 27],
                cover: {
                    idx: 6,
                    rX: -90,
                    rY: 0,
                    t: [0, 0, -1]
                },
                axis: 'Y',
                to: 90
            },
        },
    };
    let el = {};
    let t0 = window.performance.now();
    let rot1, rotAxis, ccw;
    let currentFace;
    let mouseDown = false;
    let mouseX0, mouseY0;
    let rotX = DEFAULT_ROT_X;
    let rotY = DEFAULT_ROT_Y;
    let fields = [];
    let playing = false;
    let seqIdx = 0;
    let sequence = [];
    let animationRunning = false;
    function easeInOutQuad(t, b, c, d) {
        return (t /= d / 2) < 1
            ? c / 2 * t * t + b
            : -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
    function addCover(face) {
        const div = document.createElement('div');
        div.className = `cover cover${FACES[face].r.cover.idx}`;
        el.fields.appendChild(div);
        el.rotLayer.appendChild(div.cloneNode());
    }
    function toggle(face) {
        for (const idx of FACES[face].r.fields) {
            fields[idx].classList.toggle('hidden');
        }
    }
    function addRotatingFaces(face) {
        let faces = [];
        for (const idx of FACES[face].r.fields) {
            faces.push(fields[idx].cloneNode(true));
        }
        el.rotLayer.replaceChildren(...faces)
    }
    function turn(face, counterclockwise) {
        ccw = counterclockwise;
        currentFace = face;
        rot1 = ccw
            ? -FACES[face].r.to
            : FACES[face].r.to;
        rotAxis = FACES[face].r.axis;
        el.rotLayer.style.transform = `rotate${rotAxis}(0deg)`;
        addRotatingFaces(face);
        toggle(face);
        addCover(face);
        animationRunning = true;
        t0 = window.performance.now();
        window.requestAnimationFrame(animate);
    }
    function transferFields(face) {
        const r = FACES[face].r;
        let src = { colors: {}, labels: {} };
        // backup values so we can copy them in one go
        for (let i = 0; i < r.fields.length; ++i) {
            src.colors[r.fields[i]] = fields[r.fields[i]].getAttribute('data-color');
            src.labels[r.fields[i]] = fields[r.fields[i]].firstChild.textContent;
        }
        for (let i = 0; i < r.fields.length; ++i) {
            if (ccw) {
                fields[r.swaps[i]].setAttribute('data-color', src.colors[r.fields[i]]);
                fields[r.swaps[i]].firstChild.textContent = src.labels[r.fields[i]];
            }
            else {
                fields[r.fields[i]].setAttribute('data-color', src.colors[r.swaps[i]]);
                fields[r.fields[i]].firstChild.textContent = src.labels[r.swaps[i]];
            }
        }
    }
    function animate() {
        const dt = window.performance.now() - t0;
        if (dt > ANIMATION_DURATION) {
            el.rotLayer.replaceChildren();
            el.fields.querySelector('.cover').remove();
            toggle(currentFace);
            transferFields(currentFace);
            animationRunning = false;
            if (playing) {
                playNextTurn();
            }
        }
        else {
            const degrees = easeInOutQuad(dt, 0, rot1, ANIMATION_DURATION);
            el.rotLayer.style.transform = `rotate${rotAxis}(${degrees}deg)`;
            window.requestAnimationFrame(animate);
        }
    }
    function setRotation(y, x) {
        el.cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
    }
    function onMouseUp(e) {
        if (!mouseDown)
            return;
        mouseDown = false;
        rotX -= mouseX0 - e.clientX;
        rotY += mouseY0 - e.clientY;
    }
    function onMouseDown(e) {
        if (mouseDown)
            return;
        mouseDown = true;
        mouseX0 = e.clientX;
        mouseY0 = e.clientY;
    }
    function onMouseMove(e) {
        if (!mouseDown)
            return;
        const dx = mouseX0 - e.clientX;
        const dy = mouseY0 - e.clientY;
        const ROT_FACTOR = 1;
        setRotation(ROT_FACTOR * (rotX - dx), ROT_FACTOR * (rotY + dy));
    }
    function onKeyPress(e) {
        if (animationRunning)
            return;
        if (e.target === el.sequence) {
            return;
        }
        const key = e.key.toLowerCase();
        if (Object.keys(FACES).includes(key)) {
            turn(key, e.shiftKey);
        }
    }
    function playNextTurn() {
        if (!playing)
            return;
        if (seqIdx >= sequence.length) {
            pauseSequence();
            return;
        }
        nextStep();
    }
    function nextStep() {
        const key = sequence[seqIdx++];
        turn(key.toLowerCase(), (key === key.toUpperCase()));
    }
    function resumeSequence() {
        playing = true;
        el.playButton.textContent = '⏸️';
        playNextTurn();
    }
    function startSequence() {
        buildSequence();
        seqIdx = 0;
        resumeSequence();
    }
    function pauseSequence() {
        playing = false;
        el.playButton.textContent = '▶️';
    }
    function buildSequence() {
        sequence = [];
        let i = 0;
        while (i < el.sequence.value.length) {
            const key = el.sequence.value[i].toLowerCase();
            if (!Object.keys(FACES).includes(key)) {
                ++i;
                continue;
            }
            if (el.sequence.value[i + 1] === "'") {
                sequence.push(key.toUpperCase());
                i += 2;
            }
            else if (el.sequence.value[i + 1] === "2") {
                sequence.push(key);
                sequence.push(key);
                i += 2;
            }
            else {
                sequence.push(key);
                ++i
            }
        }
    }
    function playPause() {
        if (playing) {
            pauseSequence();
        }
        else {
            if (sequence.length > 0 && seqIdx >= sequence.length) {
                generateFields();
                startSequence();
            }
            else if (seqIdx > 0) {
                resumeSequence();
            }
            else {
                startSequence();
            }
        }
    }
    function generateStyles() {
        const style = document.createElement('style');
        let styles = `
#cube-container {
    margin: ${3 * SCALE}px auto 0;
    perspective: ${9 * SCALE}px;
    width: ${3 * SCALE}px;
    height: ${3 * SCALE}px;
}
#cube {
    position: relative;
    width: ${3 * SCALE}px;
    transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    background-color: #999;
}
.field {
    width: ${SCALE}px;
    height: ${SCALE}px;
    border: ${SCALE / 25}px solid #000;
}
.field > span {
    font-size: ${SCALE / 3}px;
}
.cover {
    position: absolute;
    width: ${3 * SCALE}px;
    height: ${3 * SCALE}px;
    background-color: #080808;
}`;
        for (const [face, d] of Object.entries(FACES)) {
            const cover = d.r.cover;
            const tX = SCALE * cover.t[0];
            const tY = SCALE * cover.t[1];
            const tZ = SCALE * cover.t[2];
            styles += `
.cover${cover.idx} {
    transform: rotateX(${cover.rX}deg) rotateY(${cover.rY}deg) translateX(${tX}px) translateY(${tY}px) translateZ(${tZ}px); 
    -moz-transform: rotateX(${cover.rX}deg) rotateY(${cover.rY}deg) translateX(${tX}px) translateY(${tY}px) translateZ(${tZ}px); 
    -webkit-transform: rotateX(${cover.rX}deg) rotateY(${cover.rY}deg) translateX(${tX}px) translateY(${tY}px) translateZ(${tZ}px); 
}
`;
            for (let i = 0; i < d.fields.length; ++i) {
                const tX = SCALE * d.t[i][0];
                const tY = SCALE * d.t[i][1];
                const tZ = SCALE * d.t[i][2];
                styles += `
.field${d.fields[i]} {
    transform: rotateX(${d.rX}deg) rotateY(${d.rY}deg) translateX(${tX}px) translateY(${tY}px) translateZ(${tZ}px);
    -moz-transform: rotateX(${d.rX}deg) rotateY(${d.rY}deg) translateX(${tX}px) translateY(${tY}px) translateZ(${tZ}px);
    -webkit-transform: rotateX(${d.rX}deg) rotateY(${d.rY}deg) translateX(${tX}px) translateY(${tY}px) translateZ(${tZ}px);
}`;
            }
        }
        style.textContent = styles;
        document.querySelector('head').appendChild(style);
    }
    function generateFields() {
        fields = [null];
        for (const [face, d] of Object.entries(FACES)) {
            for (const num of d.fields) {
                const field = document.createElement('div');
                field.setAttribute('data-color', d.color);
                field.className = `field field${num}`;
                const label = document.createElement('span');
                label.textContent = num;
                field.appendChild(label);
                fields.push(field);
            }
        }
        el.fields.replaceChildren(...fields.slice(1));
    }
    function main() {
        console.info('Live long and prosper!');
        el.fields = document.querySelector('#fields');
        el.rotLayer = document.querySelector('#rot-layer');
        el.cube = document.querySelector('#cube');
        el.cubeContainer = document.querySelector('#cube');
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
        setRotation(DEFAULT_ROT_X, DEFAULT_ROT_Y);
        generateStyles();
        generateFields();
        el.sequence = document.querySelector('#sequence');
        el.playButton = document.querySelector('#play-button');
        el.playButton.addEventListener('click', playPause);
        el.stepButton = document.querySelector('#step-button');
        el.stepButton.addEventListener('click', nextStep);
        window.addEventListener('keypress', onKeyPress);
        buildSequence();
    }
    window.addEventListener('load', main);
})(window);

