import React, { useState } from "react/cjs/react.development";

const SearchInMap = () => {
    const [boundary, setBoundary] = useState("");
    const [isMouseDown, setMouseDown] = useState(false);

    var tempCan = document.getElementById("tempCanvas");

    const sX, sY;
    const canvasX = tempCan.offsetHeight().left;
    const canvasY = tempCan.offsetHeight().top;


    const mouseMove = (event) => {
        //console.log(event.nativeEvent.offsetX);
        if (isMouseDown) {
            const ctx = tempCan.getContext("2d");
            ctx.fillStyle = '#b8b8b8';
            ctx.globalAlpha = 0.5;
            if (boundary === 'square') {
                ctx.clearRect(0, 0, tempCan.width, tempCan.height);
                ctx.fillRect(0, 0, event.nativeEvent.offsetX, event.nativeEvent.offsetY);
                //return 0, 0, event.nativeEvent.offsetX, event.nativeEvent.offsetY
            }
            else if (boundary === 'circle') {
                ctx.clearRect(0, 0, tempCan.width, tempCan.height);
                ctx.beginPath();
                //ctx.arc(center, center, radius, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();

                //return center좌표, 지름
            }
        }
    };

    const onmousedown = (event) => {
        if (boundary !== "") {
            setMouseDown(true);
            tempCan.style.cursor = 'crosshair';

            sX = event.nativeEvent.offsetX -
                sY =

        }
    };
    const onmouseup = (event) => {
        if (boundary !== "") {
            setMouseDown(false);
            tempCan.style.cursor = 'auto';
            const ctx = tempCan.getContext("2d");
            ctx.clearRect(0, 0, tempCan.width, tempCan.height);
        }
    };

    const changeBoundary = (str) => {
        setBoundary(str);
    };

    return (
        <div>
            <div>
                <label>
                    <input
                        type="radio"
                        name="LonLat_Type"
                        value="DMS"
                        onChange={() => { changeBoundary('square') }}
                    />
                    사각영역
                </label>
                <label>
                    <input
                        type="radio"
                        name="LonLat_Type"
                        value="DMS"
                        onChange={() => { changeBoundary('circle') }}
                    />
                    원 영역
                </label>
            </div>
            <div>
                <canvas
                    id="tempCanvas"
                    width="400"
                    height="400"
                    style={{
                        border: '1px solid #000000'
                    }}
                    onMouseMove={mouseMove}
                    onMouseDown={onmousedown}
                    onMouseUp={onmouseup}
                ></canvas>
            </div>
        </div>
    );

};

export default SearchInMap;