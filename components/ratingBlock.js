import Dropdown from "react-bootstrap/Dropdown"

import { ratingEventProgramData } from "../data/ratingEventProgramData"
import { ratingIntangibleData } from "../data/ratingIntangibleData"
import { ratingNaturalData } from "../data/ratingNaturalData"
import { ratingTangibleData } from "../data/ratingTangibleData"
import { ratingTechProductionData } from "../data/ratingTechProductionData"
import { ratingInfrastructureData } from "../data/ratingInfrastructureData"

import Rating from "./ratingComponent"
import React from "react"

class RatingBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: props.category,
      show: props.show,
      bartype: "grouped",
    }
  }

  render() {
    const ratingInfrastructureDataSort = ratingInfrastructureData.sort(
      (a, b) => {
        return b.total - a.total
      }
    )

    let categoryList = {
      tangible: {
        nameDropdown: "по привлекательности материального наследия",
        data: ratingTangibleData,
        constant: 60,
      },
      intangible: {
        nameDropdown: "по привлекательности нематериального наследия",
        data: ratingIntangibleData,
        constant: 120,
      },
      natural: {
        nameDropdown: "по привлекательности природных достопримечательностей",
        data: ratingNaturalData,
        constant: 10,
      },
      eventprogram: {
        nameDropdown: "по привлекательности событийной программы",
        data: ratingEventProgramData,
        constant: 50,
      },
      techproduction: {
        nameDropdown: "по привлекательности технологий и производства",
        data: ratingTechProductionData,
        constant: 60,
      },
      infrastructure: {
        nameDropdown: "по оценкам качества туристической инфраструктуры",
        data: ratingInfrastructureDataSort,
        constant: 60,
      },
    }

    let category = this.state.category

    let items = [
      "tangible",
      "intangible",
      "natural",
      "eventprogram",
      "techproduction",
      "infrastructure",
    ]

    return (
      <div
        style={{
          width: "100%",
          background: "#00121D",
          paddingTop: 70,
          paddingBottom: 70,
          marginBottom: 70,
        }}
        className="rating"
      >
        <div style={{ /*width: 1250,*/ textAlign: "center" }}>
          <h2
            style={{
              fontSize: 40,
              color: "white",
              marginBottom: 25,
              fontFamily: "Atlas Grotesk",
              fontWeight: 700,
            }}
          >
            Рейтинг регионов
          </h2>
          <div>
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  width: 597,
                  height: 60,
                  textAlign: "center",
                  fontSize: 20,
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
                variant="secondary"
                id="dropdown-basic"
              >
                <div className="dropdown-custom-toggle">
                  <p className="dropdown-custom-toggle-text">
                    {categoryList[category].nameDropdown}
                  </p>
                  <img
                    src="./images/dropdown-icon.svg"
                    alt="Выбрать"
                    className="dropdown-icon"
                  />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  width: 597,
                  textAlign: "left",
                  fontSize: 20,
                }}
              >
                {items.map((key) => {
                  if (key !== category) {
                    return (
                      <Dropdown.Item
                        style={{
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                        onClick={() => {
                          this.setState({ category: key })
                          ym(72433924, "reachGoal", "regionRating", {
                            ratingName: categoryList[key].nameDropdown,
                          })
                        }}
                        key={key}
                      >
                        {" "}
                        {categoryList[key].nameDropdown}{" "}
                      </Dropdown.Item>
                    )
                  } else {
                    return (
                      <Dropdown.ItemText key={key}>
                        {" "}
                        {categoryList[key].nameDropdown}{" "}
                      </Dropdown.ItemText>
                    )
                  }
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className="rating__scroll-warning">
          <img
            className="rating__scroll-image"
            alt="Перемещайте схему горизонтально"
            src="./images/scroll-img.svg"
          />
          <p className="rating__scroll-text">Перемещайте схему горизонтально</p>
        </div>

        <div
          style={{
            width: 1250,
            overflowX: "auto",
            overflowY: "hidden",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div style={{ width: 10200, height: 550 }}>
            <Rating
              data={categoryList[category].data}
              constant={categoryList[category].constant}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default RatingBlock
