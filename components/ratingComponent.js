import { ResponsiveBar } from "@nivo/bar"
import { useTheme } from "@nivo/core"

import { regionsShortNames } from "../data/regionsShortNames"

const Ratings = ({ data, constant }) => {
  /* function for drawing Labels on Bottom Axis */
  const customTick = (tick) => {
    const theme = useTheme()

    return (
      <>
        <g transform={`translate(${tick.x},${tick.y + 22})`}>
          <text
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              ...theme.axis.ticks.text,
              fill: "white",
              fontSize: 10,
              width: 50,
            }}
          >
            {regionsShortNames[tick.value]}
          </text>
        </g>
        <g transform={`translate(${tick.x},${tick.y + 42})`}>
          <text
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              ...theme.axis.ticks.text,
              fill: "white",
              fontSize: 10,
              width: 50,
            }}
          >
            {tick.tickIndex + 1}
          </text>
        </g>
      </>
    )
  }

  /* styles for labels on Axis */

  const theme = {
    textColor: "#ffffff",
    tickColor: "#ffffff",
  }

  return (
    <ResponsiveBar
      tooltip={({ id, value, color, indexValue, data }) => {
        /* My setup for tooltip */
        const labelId = {
          negative: "Доля негативных текстов",
          neitral: "Доля нейтральных текстов",
          positive: "Доля позитивных текстов",
        }

        data["negative"] = data["negative"] ? data["negative"] : 0
        data["neitral"] = data["neitral"] ? data["neitral"] : 0
        data["positive"] = data["positive"] ? data["positive"] : 0

        let partInPercents = Math.round(
          (value / (data["negative"] + data["neitral"] + data["positive"])) *
            100
        )

        return (
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: 30,
                height: 30,
                background: color,
                marginRight: 30,
                marginTop: 3,
              }}
            />
            <div>
              <strong>{indexValue}: </strong>
              <br />
              <span style={{ paddingTop: 10 }}>
                {labelId[id]} — {partInPercents}%{" "}
              </span>
            </div>
          </div>
        )
      }}
      data={data}
      groupMode="grouped"
      theme={theme}
      keys={["negative", "neitral", "positive"]}
      indexBy="regions"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "symlog", constant: constant }}
      indexScale={{ type: "band", round: true }}
      colors={({ id, data }) => {
        let colorMatch = {
          negative: "#F47461",
          neitral: "#D1D2D4",
          positive: "#5E88C1",
        }

        return colorMatch[id]
      }}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        renderTick: customTick,
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        textStyle: { fill: "#ffffff" },
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Количество текстов",
        legendPosition: "middle",
        legendOffset: -45,
        format: (value) => {
          let caseOfYNumbers = {
            90000: true,
            70000: true,
            110000: true,
            14000: true,
            18000: true,
            22000: true,
            26000: true,
            45000: true,
            35000: true,
          }

          if (!caseOfYNumbers[value]) {
            return value
          }
        },
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  )
}

export default Ratings
