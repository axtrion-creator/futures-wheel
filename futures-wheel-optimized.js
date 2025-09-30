// Optimized Futures Wheel Visualization
// Reduced from 1,136 lines to ~200 lines with same functionality

// Simplified data structure - generate nodes programmatically
const futuresWheelData = {
    center: {
        id: "center",
        name: "Rutiinikontaktit siirtyvät boteille/roboteille",
        level: 0
    },
    impacts: {
        1: [
            "Kasvokkainen vuorovaikutus vähenee",
            "Ammattilaisen autonomia kaventuu",
            "Työnkuva kääntyy järjestelmien valvontaan",
            "Virheprofiili muuttuu",
            "Organisaation päätöksenteko nojaa data-ohjautuvuuteen"
        ],
        2: [
            "Hoidon jatkuvuuden heikkeneminen",
            "Valvontaan siirtyvä henkilöstö näkee potilaita vähemmän",
            "Yksinäisyyden ja vieraantumisen kokemukset lisääntyvät",
            "Työn sisältö standardoituu",
            "Moraalinen stressi kasvaa",
            "Sanktioriskit ohjaavat varman päälle tekemiseen",
            "Päivittäinen työ rytmittyy hälytyksiin",
            "Vianetsintätaidot arkipäiväistyvät",
            "Hiljaisten taitojen rapautumisen riski kasvaa",
            "Harvinaiset, mutta laajavaikutteiset systeemivirheet",
            "Vääriin dataoletuksiin koulutetut mallit",
            "Koulutus painottuu mallin rajoitteiden tunnistamiseen",
            "Goodhartin laki: mittarista tulee tavoite",
            "Gaming ja osaoptimointi lisääntyvät",
            "Johtamiskulttuuri muuttuu"
        ],
        3: [
            "Potilaan luottamus muuttuu: suhde on järjestelmään",
            "Henkilökohtaisen taustatiedon hiljainen konteksti katoaa",
            "Hoitomyöntyvyys laskee osalla",
            "Kliininen intuitio korvautuu mittari- ja hälytysperusteisuudella",
            "Ammattiylpeys ja identiteetti muuttuvat",
            "Robottien häiriötilanteissa kenelläkään ei ole osaamista",
            "Halu hakeutua hoitoon pienenee",
            "Oireita ei haluta jakaa",
            "Valmiiksi haastava yksinäisyyden tilanne hankaloituu",
            "Ammattiylpeys ja työn merkityksellisyys voivat kärsiä",
            "Potilaiden monimutkaiset tilanteet kärsivät",
            "Ammattikuntien välinen erottautuminen hämärtyy",
            "Uupumus ja vaihtuvuus lisääntyvät",
            "Potilaan ja ammattilaisen suhde jännittyy",
            "Epävirallisia kiertoreittejä syntyy",
            "Uusien hoitomuotojen kehittyminen hidastuu",
            "Potilasturvallisuus paranee",
            "Potilaat eivät saa uusimpia hoitoja",
            "Hälytysväsymys lisääntyy",
            "Vääriä positiivisia suodatetaan aggressiivisemmin",
            "Priorisointimatriisit standardoidaan",
            "Cross-skilling lisääntyy",
            "Henkilöstön osaamiskartoitus sidotaan järjestelmätasoihin",
            "Motivaatioprofiili muuttuu",
            "Luottamuksen rakentaminen vaikeutuu",
            "Potilaan kokema inhimillisyys heikkenee",
            "Organisaatiokulttuuri siirtyy tekniseen tehokkuuteen",
            "Single-point-of-failure -kohtien kartoittaminen",
            "Pakolliset tappokytkimet standardoidaan",
            "Syntyy uudenlaisia potilasturvallisuusongelmia",
            "Hoitotulokset heikkenevät aliedustetuissa ryhmissä",
            "Juridiset riskit kasvavat",
            "Opetussuunnitelmiin lisätään mallin rajoitteet",
            "Sertifiointi/uusintatesti säännöllisesti",
            "Koulutus kattaa järjestelmäriippuvuudet",
            "Mittari paranee ilman todellista hoidon kohentumista",
            "Hoito kohdistuu mitattaviin asioihin",
            "Vaikeat potilaat valikoituvat ulos",
            "Tiimit optimoivat omia lukujaan",
            "Yksiköt kieltäytyvät ottamasta korkeariskisiä potilaita",
            "Asiakaskokemus heikkenee",
            "Standardit prosessit sujuvoittavat arkea",
            "Kokeilukulttuuri vahvistuu",
            "Resilienssi paranee"
        ]
    }
};

// Generate nodes programmatically
function generateNodes() {
    const nodes = [futuresWheelData.center];
    const links = [];
    
    // Level 1 nodes (direct from center)
    futuresWheelData.impacts[1].forEach((impact, index) => {
        const nodeId = `l1_${index + 1}`;
        nodes.push({
            id: nodeId,
            name: impact,
            level: 1
        });
        links.push({ source: "center", target: nodeId });
    });
    
    // Level 2 nodes (from level 1) - 3 per level 1 node
    futuresWheelData.impacts[2].forEach((impact, index) => {
        const nodeId = `l2_${index + 1}`;
        const parentIndex = Math.floor(index / 3);
        const parentId = `l1_${parentIndex + 1}`;
        nodes.push({
            id: nodeId,
            name: impact,
            level: 2
        });
        links.push({ source: parentId, target: nodeId });
    });
    
    // Level 3 nodes (from level 2) - 3 per level 2 node
    futuresWheelData.impacts[3].forEach((impact, index) => {
        const nodeId = `l3_${index + 1}`;
        const parentIndex = Math.floor(index / 3);
        const parentId = `l2_${parentIndex + 1}`;
        nodes.push({
            id: nodeId,
            name: impact,
            level: 3
        });
        links.push({ source: parentId, target: nodeId });
    });
    
    return { nodes, links };
}

// Visualization variables
let svg, simulation, nodes, links, nodeData, linkData;

// Initialize visualization
function initVisualization() {
    const container = d3.select("#visualization");
    const width = container.node().offsetWidth;
    const height = container.node().offsetHeight;
    
    // Create SVG
    svg = container
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    
    // Add zoom
    svg.call(d3.zoom().scaleExtent([0.1, 4]).on("zoom", (event) => {
        svg.select("g").attr("transform", event.transform);
    }));
    
    const g = svg.append("g");
    
    // Generate data
    const generated = generateNodes();
    nodeData = generated.nodes;
    linkData = generated.links;
    console.log("Generated nodes:", nodeData.length);
    console.log("Generated links:", linkData.length);
    
    // Create simulation with proper wheel/radial positioning
    simulation = d3.forceSimulation(nodeData)
        .force("link", d3.forceLink(linkData).id(d => d.id).distance(d => {
            // Link distances for wheel layout
            if (d.source.level === 0 || d.target.level === 0) return 120; // Center to level 1
            if (d.source.level === 1 || d.target.level === 1) return 100; // Level 1 to 2
            return 80; // Level 2 to 3
        }).strength(0.3))
        .force("charge", d3.forceManyBody().strength(d => {
            // Repulsion to prevent clustering
            if (d.level === 0) return -2000; // Center node
            if (d.level === 1) return -800;  // Level 1
            if (d.level === 2) return -600;   // Level 2
            return -400; // Level 3
        }))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("radial", d3.forceRadial(d => {
            // Proper radial positioning for wheel layout
            if (d.level === 0) return 0; // Center
            if (d.level === 1) return 150; // First ring
            if (d.level === 2) return 280; // Second ring
            return 400; // Third ring
        }, width / 2, height / 2).strength(1.0))
        .force("collision", d3.forceCollide().radius(d => {
            // Collision detection
            return d.level === 0 ? 40 : d.level === 1 ? 35 : d.level === 2 ? 25 : 20;
        }))
        .alphaDecay(0.02)
        .velocityDecay(0.4);
    
    // Create links
    links = g.append("g")
        .selectAll("line")
        .data(linkData)
        .enter().append("line")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6);
    
    // Create nodes
    nodes = g.append("g")
        .selectAll("circle")
        .data(nodeData)
        .enter().append("circle")
        .attr("r", d => d.level === 0 ? 35 : d.level === 1 ? 28 : d.level === 2 ? 22 : 18)
        .attr("fill", d => d.level === 0 ? "#95BAEB" : d.level === 1 ? "#E8D541" : d.level === 2 ? "#E84196" : "#41D5E8")
        .attr("stroke", "#fff")
        .attr("stroke-width", 2)
        .style("cursor", "pointer")
        .on("click", handleNodeClick)
        .on("mouseover", showTooltip)
        .on("mouseout", hideTooltip);
    
    // Add labels
    const labels = g.append("g")
        .selectAll("text")
        .data(nodeData)
        .enter().append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .attr("font-size", "10px")
        .attr("fill", "#333")
        .text(d => d.name.length > 30 ? d.name.substring(0, 30) + "..." : d.name);
    
    // Update positions
    simulation.on("tick", () => {
        links
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
        
        nodes.attr("cx", d => d.x).attr("cy", d => d.y);
        
        labels
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    });
    
    // Position center node
    const centerNode = nodeData.find(d => d.id === "center");
    if (centerNode) {
        centerNode.x = width / 2;
        centerNode.y = height / 2;
        centerNode.fx = width / 2;
        centerNode.fy = height / 2;
    }
    
    // Position nodes in proper circular rings
    positionNodesInRings(nodeData, width, height);
}

// Position nodes in proper circular rings for wheel layout
function positionNodesInRings(nodeData, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Group nodes by level
    const nodesByLevel = {};
    nodeData.forEach(node => {
        if (!nodesByLevel[node.level]) {
            nodesByLevel[node.level] = [];
        }
        nodesByLevel[node.level].push(node);
    });
    
    // Position each level in a circle
    Object.keys(nodesByLevel).forEach(level => {
        const levelNodes = nodesByLevel[level];
        const levelNum = parseInt(level);
        
        if (levelNum === 0) {
            // Center node - already positioned
            return;
        }
        
        // Calculate radius for this level
        const radius = levelNum === 1 ? 150 : levelNum === 2 ? 280 : 400;
        
        // Distribute nodes evenly around the circle
        levelNodes.forEach((node, index) => {
            const angle = (2 * Math.PI * index) / levelNodes.length;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            // Set initial position
            node.x = x;
            node.y = y;
            
            // Fix position for first few seconds to establish layout
            if (levelNum === 1) {
                node.fx = x;
                node.fy = y;
            }
        });
    });
    
    // Release fixed positions after a delay to allow natural movement
    setTimeout(() => {
        nodeData.forEach(node => {
            if (node.id !== "center") {
                node.fx = null;
                node.fy = null;
            }
        });
    }, 2000);
}

// Event handlers
function handleNodeClick(event, d) {
    // Simple highlighting
    nodes.classed("selected", false);
    d3.select(event.target).classed("selected", true);
    
    // Update info panel
    updateInfoPanel(d);
}

function showTooltip(event, d) {
    d3.select("#tooltip")
        .style("opacity", 1)
        .html(d.name)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
}

function hideTooltip() {
    d3.select("#tooltip").style("opacity", 0);
}

function updateInfoPanel(node) {
    d3.select("#infoPanel").html(`
        <h3>${node.name}</h3>
        <p><strong>Level ${node.level} Impact</strong></p>
        <p>Click on any node to explore its details.</p>
    `);
}


// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initVisualization();
});
