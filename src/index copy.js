import * as d3 from "d3"
import { sankey } from 'd3-sankey';

console.log(sankey);

function randomLetters() {
    return d3.shuffle("abcdefghijklmnopqrstuvwxyz".split(""))
        .slice(0, Math.floor(6 + Math.random() * 20))
        .sort();
}

const svg = d3.select('body').append('svg');

const width = 1000;

svg.attr("width", width)
    .attr("height", 33)
// .attr("viewBox", `0 -20 ${width} 33`);

while (true) {
    const letters = randomLetters();

    svg.selectAll("text")
        .data(letters, d => d)
        .join(
            enter => enter.append('text')
                .attr("x", (d, i) => i * 16)
                .attr("y", 30)
                .text(d => d),
            update => update.attr("x", (d, i) => i * 16)
                .attr("fill", "green")
        )

    await new Promise((r, e) => setTimeout(r, 1000));
}


