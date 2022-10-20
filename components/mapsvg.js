import React, { Component } from "react"

import { regionsMapData } from "../data/regionsMapData"
import { regionsShapesData } from "../data/regionsShapesData"
import MapPopup from "./MapPopup"

class Mapsvg extends Component {
  constructor(props) {
    super(props)
    this.showTooltip = this.showTooltip.bind(this)
    this.hoverPopupOpen = this.hoverPopupOpen.bind(this)
    this.hoverPopupClose = this.hoverPopupClose.bind(this)
    this.state = {
      showHoverPopup: false,
      show: false,
      name: "",
      total: "",
      pos: "",
      neg: "",
      power: null,
      effect: null,
      tourism: null,
      shapes: regionsShapesData,
      prevId: false,
      currentRegionCentre: {
        x: 0,
        y: 0,
      },
      currentPopupWidth: "200",
      currentPopupCentre: 0,
    }
  }

  showTooltip(e) {
    document.querySelector("html").classList.add("block-scroll")
    let eid = e.target.id - 1
    let name = regionsMapData[eid].name
    let total = regionsMapData[eid].total
    let pos = regionsMapData[eid].pos
    let neg = regionsMapData[eid].neg
    let power = regionsMapData[eid].power
    let effect = regionsMapData[eid].effect
    let tourism = regionsMapData[eid].tourism

    /*код для отслеживания нажатия на регион*/
    ym(72433924, "reachGoal", "regionClick", { regionName: name })
    this.setState({
      show: true,
      id: e.target.id,
      name: name,
      total: total,
      pos: pos,
      neg: neg,
      power: power,
      effect: effect,
      tourism: tourism,
    })
  }

  findCenter(e) {
    const bbox = e.target.getBBox()
    const centre = {
      x: Math.round(bbox.x + bbox.width / 2),
      y: Math.round(bbox.y + bbox.height / 2),
    }
    this.setState({
      currentRegionCentre: centre,
    })
  }

  hoverPopupOpen(e) {
    this.findCenter(e)
    let eid = e.target.id - 1
    let name = regionsMapData[eid].name
    const expectedPopupWidth = name.length * 10 + 10
    const halfW = expectedPopupWidth / 2
    if (this.state.currentRegionCentre.x - halfW < 0) {
      this.setState({
        currentPopupCentre: this.state.currentRegionCentre.x + halfW + 5,
      })
    } else if (this.state.currentRegionCentre.x + halfW > 1250) {
      this.setState({
        currentPopupCentre: this.state.currentRegionCentre.x - halfW - 5,
      })
    } else {
      this.setState({
        currentPopupCentre: this.state.currentRegionCentre.x,
      })
    }
    if (this.state.currentRegionCentre.x !== 0) {
      this.setState({
        showHoverPopup: true,
        name: name,
        currentPopupWidth: expectedPopupWidth,
      })
    }
  }

  hoverPopupClose(e) {
    this.setState({
      showHoverPopup: false,
    })
  }

  closeWindow(parent) {
    parent.setState({ show: false })
    document.querySelector("html").classList.remove("block-scroll")
  }

  makeShapeFirst(e, eid) {
    let _shapes = this.state.shapes

    /* Hover effect */
    _shapes[_shapes.length - 1].className = "whiteStroke"

    /* move selected region to the end of shape list */
    _shapes.push(_shapes.splice(eid, 1)[0])
    _shapes[_shapes.length - 1].className = "blackStroke"

    this.setState({ shapes: _shapes })
  }

  leaveShape() {
    let _shapes = this.state.shapes
    _shapes[_shapes.length - 1].className = "whiteStroke"

    this.setState({ shapes: _shapes })
  }

  render() {
    let regionsShapes = this.state.shapes.map((key, eid) => {
      return (
        <path
          onMouseOver={(e) => {
            if(key["fill"] != "#DEDEDE") {
              this.hoverPopupOpen(e)
            }
            this.makeShapeFirst(e, eid)
          }}
          onMouseLeave={(e) => {
            this.leaveShape()
            this.hoverPopupClose(e)
          }}
          onClick={
            (e) => {
              if(key["fill"] != "#DEDEDE") {
                this.showTooltip(e)
              }
            }
          }
          id={key.id}
          fillRule={key["fill-rule"]}
          clipRule={key["clip-rule"]}
          d={key.d}
          stroke={key.stroke}
          fill={key.fill}
          strokeMiterlimit={key["stroke-miterlimit"]}
          className={key["className"]}
          key={eid}
        />
      )
    })

    return (
      <div
        className={"mapsvg"}
        style={
          {
            //maxWidth: 1340,
            //height: 720,
            //width: "98vw",
            //overflow: "hidden",
            //pointerEvents: this.state.show ? "none" : "auto",
          }
        }
      >
        <svg
          style={{ position: "absolute", maxWidth: 1343 }}
          width="98vw"
          viewBox="0 0 1343 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="MapArea"
            style={{ pointerEvents: this.state.show ? "none" : "auto" }}
          >
            {regionsShapes}
          </g>
          <g id="popup">
            <>
              <rect
                width={this.state.currentPopupWidth}
                height="40"
                fill={this.state.showHoverPopup ? "white" : ""}
                x={this.state.currentPopupCentre - 100}
                y={this.state.currentRegionCentre.y - 55}
                rx="5"
              />
              <text
                x={this.state.currentPopupCentre - 90}
                y={this.state.currentRegionCentre.y - 30}
                fill={this.state.showHoverPopup ? "black" : ""}
                fontFamily={"Atlas Grotesk"}
                fontWeight={"Bold"}
              >
                {this.state.name}
              </text>
            </>
            )
          </g>
        </svg>
        <MapPopup
          show={this.state.show}
          close={this.closeWindow}
          parent={this}
          id={this.state.id}
          name={this.state.name}
          total={this.state.total}
          pos={this.state.pos}
          neg={this.state.neg}
          power={this.state.power}
          effect={this.state.effect}
          tourism={this.state.tourism}
        />
      </div>
    )
  }
}

export default Mapsvg
