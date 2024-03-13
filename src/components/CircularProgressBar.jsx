import * as React from "react"
import imageIcon from "./../images/nav/mailer-3d-icon.png"
function CircularProgressBar(props) {
    return (
        <div className="flex justify-center items-center relative w-35 h-35 m-10">
            <img src={imageIcon} alt="imageIcon" className="absolute w-[75px] h-[55px] " />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute animate-spin w-full h-full"
                viewBox="9.2998 9.213 481.3985 481.4854"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                {...props}
            >
                <defs>
                    <mask id="b">
                        <linearGradient
                            id="a"
                            gradientUnits="userSpaceOnUse"
                            x1={79.79}
                            y1={128.31}
                            x2={146.43}
                            y2={131.43}
                            gradientTransform="translate(-1.516 -1.516) scale(1.02039)"
                        >
                            <stop offset={0} stopColor="#fff" />
                            <stop offset={0.349} stopOpacity={0.501961} stopColor="#fff" />
                            <stop offset={1} stopOpacity={0} stopColor="#fff" />
                        </linearGradient>
                        <path fill="url(#a)" d="M-1.516 -1.516H159.757V159.757H-1.516z" />
                    </mask>
                </defs>
                <path
                    className="fil0"
                    style={{
                        transformOrigin: "79.106px 79.115px"
                    }}
                    d="M82.718 5.086c0 1.206-.215 1.749-1.056 2.546-.797.841-1.34 1.056-2.546 1.056-19.237 0-37.161 8.129-49.808 20.627-12.51 12.647-20.62 30.563-20.62 49.8 0 19.238 8.129 37.161 20.628 49.808 12.647 12.51 30.563 20.62 49.8 20.62s37.161-8.129 49.808-20.628c12.51-12.647 20.619-30.562 20.619-49.8 0-1.219.223-1.81 1.073-2.563.751-.849 1.309-1.039 2.529-1.039s1.812.223 2.563 1.073c.849.751 1.039 1.31 1.039 2.529 0 21.654-8.466 40.761-22.746 54.902-14.141 14.281-33.241 22.74-54.895 22.74-21.653 0-40.685-8.529-54.899-22.743C9.993 119.8 1.464 100.768 1.464 79.115c0-21.654 8.466-40.761 22.746-54.901C38.087 10.203 56.728 1.674 77.877 1.479l.039.038.42-.011.875-.024c1.11-.155 1.609.189 2.451 1.058.841.797 1.056 1.34 1.056 2.546z"
                    transform="matrix(3.10014 0 0 3.10014 170.895 170.883)"
                    mask="url(#b)"
                    fill="#2382d8"
                    paintOrder="fill"
                />
            </svg>
        </div>
    )
}

export default CircularProgressBar
