import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const margin = ({top: 20, right: 30, bottom: 30, left: 40});
const height = 400 - margin.top - margin.bottom;
const width = 1080 - margin.left - margin.right;

function LineChart({ data }) {
  if (!data) return null;
  if (Object.keys(data).length === 0) return null;

  const ref = useRef();

  useEffect(() => {
    const svgNode = document.getElementById('line-chart');
    if (svgNode.firstChild) svgNode.removeChild(svgNode.firstChild);

    data = data.map(el => {
      return {
        date : d3.timeParse('%Y-%m-%d')(el.date), 
        value : el.value
      };
    });

    const svg = d3.select(ref.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    
    // Add X axis & append
    const x = d3.scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([ 0, width ]);
  
    svg.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    // Add Y axis & append
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.value; })])
      .range([ height, 0 ]);

    svg.append('g')
      .call(d3.axisLeft(y));
    
    // Add the line
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', d3.line()
        .x(d => x(d.date))
        .y(d => y(d.value))
      );
  }, [data]);

  return (
    <svg id="line-chart" ref={ref} />
  );
}

export default LineChart;