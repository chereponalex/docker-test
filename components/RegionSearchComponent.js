import MapPopup from "./MapPopup"
//import { ReactSearchAutocomplete } from "react-search-autocomplete"
import Fuse from "fuse.js"
import { regionsMapData } from "../data/regionsMapData"
import React, { useState } from "react"

export default function RegionSearchComponent() {
  const [showPopup, setShowPopup] = useState(false)
  const [regionID, setRegionID] = useState(undefined)
  const [regionName, setRegionName] = useState(undefined)
  const [regionTotal, setRegionTotal] = useState(undefined)
  const [regionPos, setRegionPos] = useState(undefined)
  const [regionNeg, setRegionNeg] = useState(undefined)
  const [regionPower, setRegionPower] = useState(undefined)
  const [regionEffect, setRegionEffect] = useState(undefined)
  const [regionTourism, setRegionTourism] = useState(undefined)

  const [inputValue, setInputValue] = useState("")
  const [results, setResults] = useState(regionsMapData)

  const showTooltip = (item) => {
    document.querySelector("html").classList.add("block-scroll")
    let eid = item.id - 1
    let name = regionsMapData[eid].name
    let total = regionsMapData[eid].total
    let pos = regionsMapData[eid].pos
    let neg = regionsMapData[eid].neg
    let power = regionsMapData[eid].power
    let effect = regionsMapData[eid].effect
    let tourism = regionsMapData[eid].tourism
    /*код для отслеживания нажатия на регион*/
    ym(72433924, "reachGoal", "regionClick", { regionName: name })
    setShowPopup(true)
    setRegionID(item.id)
    setRegionName(name)
    setRegionTotal(total)
    setRegionPos(pos)
    setRegionNeg(neg)
    setRegionPower(power)
    setRegionEffect(effect)
    setRegionTourism(tourism)
  }

  const brandPowerList = [
    { name: "Особый", color: "blue" },
    { name: "Известный", color: "orange" },
    { name: "Скромный", color: "green" },
    { name: "Малозаметный", color: "red" },
  ]

  const handleClosePopup = () => {
    document.querySelector("html").classList.remove("block-scroll")
    setShowPopup(false)
  }

  const handleInputChange = (evt) => {
    if (showPopup) {
      handleClosePopup()
    }
    setInputValue(evt.target.value)
    const result = fuse.search(inputValue)
    if (result.length > 0) {
      setResults(result)
    } else {
      setResults(regionsMapData)
    }
  }

  const fuseOptions = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["name"],
  }

  const fuse = new Fuse(regionsMapData, fuseOptions)

  const SearchElement = ({ region }) => {
    const handleElementClick = () => {
      showTooltip(region)
    }
    return (
      <li className="regions__element" onClick={handleElementClick}>
        <img
          className={"regions__element-color"}
          alt={region.name}
          src={`./images/chosen-tab__images/${
            brandPowerList[region.power - 1].color
          }-circle.svg`}
        />
        <p className={"regions__element-name"}>{region.name}</p>
      </li>
    )
  }

  return (
    <section className={"regions"}>
      <input
        className={"regions__input"}
        placeholder="Начните вводить название..."
        onChange={handleInputChange}
        value={inputValue || ""}
      />
      {showPopup ? (
        <MapPopup
          show={showPopup}
          close={handleClosePopup}
          parent={this}
          id={regionID}
          name={regionName}
          total={regionTotal}
          pos={regionPos}
          neg={regionNeg}
          power={regionPower}
          effect={regionEffect}
          tourism={regionTourism}
        />
      ) : (
        <></>
      )}
      <ul className={`regions__list`}>
        {results.map((el, i) => {
          if (el.item) {
            return <SearchElement region={el.item} key={i} />
          } else {
            return <SearchElement region={el} key={i} />
          }
        })}
      </ul>
      <ul className={"regions__legend"}>
        <li className={"regions__legend-item"}>
          <img
            className={"regions__legend-color"}
            alt={"Особые"}
            src={"./images/chosen-tab__images/blue-circle.svg"}
          />
          <p className={"regions__legend-text"}>Особые</p>
        </li>
        <li className={"regions__legend-item"}>
          <img
            className={"regions__legend-color"}
            alt={"Известные"}
            src={"./images/chosen-tab__images/orange-circle.svg"}
          />
          <p className={"regions__legend-text"}>Известные</p>
        </li>
        <li className={"regions__legend-item"}>
          <img
            className={"regions__legend-color"}
            alt={"Скромные"}
            src={"./images/chosen-tab__images/green-circle.svg"}
          />
          <p className={"regions__legend-text"}>Скромные</p>
        </li>
        <li className={"regions__legend-item"}>
          <img
            className={"regions__legend-color"}
            alt={"Малозаметные"}
            src={"./images/chosen-tab__images/red-circle.svg"}
          />
          <p className={"regions__legend-text"}>Малозаметные</p>
        </li>
      </ul>
    </section>
  )
}
