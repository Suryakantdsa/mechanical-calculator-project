import React, { useState } from "react";
import "./SpeedFeedCalculator.css"
const SpeedCalculator = () => {
    const [csWp, setWp] = useState([25, 80])
    const [z, setZ] = useState(4)
    const [toolType, updateTooltype] = useState(0)
    const [diameter, setDia] = useState(0)
    const [speed, setSpeed] = useState("")
    const [feed, setFeed] = useState("")

    const handleSubmit = () => {
        console.log(`cs=${csWp} z=${z}  ttype=${toolType} Dia=${diameter}`)
        let cs = toolType == 0 ? parseInt(csWp[0]) : parseInt(csWp[1]);
        let d = +diameter
        let sp = ((cs * 1000) / (3.14 * d))
        setSpeed(sp.toFixed(3))
        console.log(sp)
        let cf = sp * 0.2 * z
        setFeed(cf.toFixed(2))

    }
    return (
        <>
            <main className="box">

                <h1>Mechanical Calculator</h1>
                <p className="title">Hi everyone...!!!This Calculator help to Calculate the Speed and Cutting Feed , need to Calculated while machining in CNC milling.</p>
                <section className="workpiece center">
                    <label for="toolname">material to be Machined <span><sup>*</sup></span></label>
                    <select onChange={(e) => {
                        const cs = (e.target.value.split(","))
                        setWp(cs);
                        console.log(csWp[1])
                    }}
                        name="wp" id="">

                        <option value={[25, 80]}>Mild steel</option>
                        <option value={[80, 350]}>Alluminium</option>
                        <option value={[45, 120]}>Copper</option>
                        <option value={[90, 200]}>Brass</option>
                        <option value={[28, 90]}>Cast iron</option>
                    </select>

                </section>


                <section className="tool-name center">
                    <label for="toolname">Tool Name <span><sup>*</sup></span></label>
                    <select onChange={(e) => setZ(e.target.value)} name="toolname" id="">
                        <option value="4">Endmill cutter</option>
                        <option value="4">Facemill</option>
                        <option value="2">Slotdrill</option>
                        <option value="1">Drillbit</option>
                    </select>
                </section>
                <section className="tool-material center">
                    <label for="toolmat">Tool material <span><sup>*</sup></span></label>
                    <select onChange={(e) => updateTooltype(e.target.value)} name="toolmat" id="">
                        <option value="0">High speed steel(HSS)</option>
                        <option value="1">Carbide</option>
                    </select>
                </section>
                <section className="tool-dia center">
                    <label for="tooldia">Tool Diameter <span><sup>*</sup></span></label>
                    <input onChange={(e) => setDia(e.target.value)} type="number" name="tooldia" placeholder="Enter the diameter ?" />

                </section>
                <p className="alert"><span><sup>*</sup></span> indicate required field</p>
                <button onClick={handleSubmit}>Calculate Speed and Feed</button>
                {speed && <div className="result">
                    <p> Speed={speed} RPM     </p>
                    <p>Cutting Feed={feed} mm/min</p>
                </div>}
            </main>

        </>
    )
}
export default SpeedCalculator;