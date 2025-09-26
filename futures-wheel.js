// Futures Wheel Visualization
// Data structure for the automation impact analysis

const futuresWheelData = {
    nodes: [
        // Central phenomenon
        {
            id: "center",
            name: "Rutiinikontaktit siirtyvät boteille/roboteille",
            fullName: "Rutiinikontaktit siirtyvät boteille/roboteille → kasvokkainen vuorovaikutus vähenee",
            level: 0,
            x: 0,
            y: 0
        },
        
        // First order impacts
        {
            id: "1",
            name: "Kasvokkainen vuorovaikutus vähenee",
            fullName: "Kasvokkainen vuorovaikutus vähenee",
            level: 1,
            parent: "center"
        },
        {
            id: "2", 
            name: "Ammattilaisen autonomia kaventuu",
            fullName: "Ammattilaisen autonomia kaventuu, kun järjestelmät ohjaavat oikeaa toimintaa",
            level: 1,
            parent: "center"
        },
        {
            id: "3",
            name: "Työnkuva kääntyy järjestelmien valvontaan",
            fullName: "Työnkuva kääntyy järjestelmien valvontaan, poikkeamien käsittelyyn ja laiteympäristön ylläpitoon",
            level: 1,
            parent: "center"
        },
        {
            id: "4",
            name: "Virheprofiili muuttuu",
            fullName: "Virheprofiili muuttuu: inhimilliset virheet vähenevät, mallivirheiden ja integraatiovirheiden riski kasvaa",
            level: 1,
            parent: "center"
        },
        {
            id: "5",
            name: "Organisaation päätöksenteko nojaa data-ohjautuvuuteen",
            fullName: "Organisaation päätöksenteko nojaa entistä enemmän data-ohjautuvuuteen ja mittareihin",
            level: 1,
            parent: "center"
        },

        // Second order impacts
        {
            id: "1.1",
            name: "Hoidon jatkuvuuden heikkeneminen",
            level: 2,
            parent: "1"
        },
        {
            id: "1.2",
            name: "Valvontaan siirtyvä henkilöstö näkee potilaita vähemmän",
            level: 2,
            parent: "1"
        },
        {
            id: "1.3",
            name: "Yksinäisyyden ja vieraantumisen kokemukset lisääntyvät",
            level: 2,
            parent: "1"
        },

        {
            id: "2.1",
            name: "Työn sisältö standardoituu",
            level: 2,
            parent: "2"
        },
        {
            id: "2.2",
            name: "Moraalinen stressi kasvaa",
            level: 2,
            parent: "2"
        },
        {
            id: "2.3",
            name: "Sanktioriskit ohjaavat varman päälle tekemiseen",
            level: 2,
            parent: "2"
        },

        {
            id: "3.1",
            name: "Päivittäinen työ rytmittyy hälytyksiin",
            level: 2,
            parent: "3"
        },
        {
            id: "3.2",
            name: "Vianetsintätaidot arkipäiväistyvät",
            level: 2,
            parent: "3"
        },
        {
            id: "3.3",
            name: "Hiljaisten taitojen rapautumisen riski kasvaa",
            level: 2,
            parent: "3"
        },

        {
            id: "4.1",
            name: "Harvinaiset, mutta laajavaikutteiset systeemivirheet",
            level: 2,
            parent: "4"
        },
        {
            id: "4.2",
            name: "Vääriin dataoletuksiin koulutetut mallit",
            level: 2,
            parent: "4"
        },
        {
            id: "4.3",
            name: "Koulutus painottuu mallin rajoitteiden tunnistamiseen",
            level: 2,
            parent: "4"
        },

        {
            id: "5.1",
            name: "Goodhartin laki: mittarista tulee tavoite",
            level: 2,
            parent: "5"
        },
        {
            id: "5.2",
            name: "Gaming ja osaoptimointi lisääntyvät",
            level: 2,
            parent: "5"
        },
        {
            id: "5.3",
            name: "Johtamiskulttuuri muuttuu",
            level: 2,
            parent: "5"
        },

        // Third order impacts
        {
            id: "1.1.1",
            name: "Potilaan luottamus muuttuu: suhde on järjestelmään",
            level: 3,
            parent: "1.1"
        },
        {
            id: "1.1.2",
            name: "Henkilökohtaisen taustatiedon hiljainen konteksti katoaa",
            level: 3,
            parent: "1.1"
        },
        {
            id: "1.1.3",
            name: "Hoitomyöntyvyys laskee osalla",
            level: 3,
            parent: "1.1"
        },

        {
            id: "1.2.1",
            name: "Kliininen intuitio korvautuu mittari- ja hälytysperusteisuudella",
            level: 3,
            parent: "1.2"
        },
        {
            id: "1.2.2",
            name: "Ammattiylpeys ja identiteetti muuttuvat",
            level: 3,
            parent: "1.2"
        },
        {
            id: "1.2.3",
            name: "Robottien häiriötilanteissa kenelläkään ei ole osaamista",
            level: 3,
            parent: "1.2"
        },

        {
            id: "1.3.1",
            name: "Halu hakeutua hoitoon pienenee",
            level: 3,
            parent: "1.3"
        },
        {
            id: "1.3.2",
            name: "Oireita ei haluta jakaa",
            level: 3,
            parent: "1.3"
        },
        {
            id: "1.3.3",
            name: "Valmiiksi haastava yksinäisyyden tilanne hankaloituu",
            level: 3,
            parent: "1.3"
        },

        {
            id: "2.1.1",
            name: "Ammattiylpeys ja työn merkityksellisyys voivat kärsiä",
            level: 3,
            parent: "2.1"
        },
        {
            id: "2.1.2",
            name: "Potilaiden monimutkaiset tilanteet kärsivät",
            level: 3,
            parent: "2.1"
        },
        {
            id: "2.1.3",
            name: "Ammattikuntien välinen erottautuminen hämärtyy",
            level: 3,
            parent: "2.1"
        },

        {
            id: "2.2.1",
            name: "Uupumus ja vaihtuvuus lisääntyvät",
            level: 3,
            parent: "2.2"
        },
        {
            id: "2.2.2",
            name: "Potilaan ja ammattilaisen suhde jännittyy",
            level: 3,
            parent: "2.2"
        },
        {
            id: "2.2.3",
            name: "Epävirallisia kiertoreittejä syntyy",
            level: 3,
            parent: "2.2"
        },

        {
            id: "2.3.1",
            name: "Uusien hoitomuotojen kehittyminen hidastuu",
            level: 3,
            parent: "2.3"
        },
        {
            id: "2.3.2",
            name: "Potilasturvallisuus paranee",
            level: 3,
            parent: "2.3"
        },
        {
            id: "2.3.3",
            name: "Potilaat eivät saa uusimpia hoitoja",
            level: 3,
            parent: "2.3"
        },

        {
            id: "3.1.1",
            name: "Hälytysväsymys lisääntyy",
            level: 3,
            parent: "3.1"
        },
        {
            id: "3.1.2",
            name: "Vääriä positiivisia suodatetaan aggressiivisemmin",
            level: 3,
            parent: "3.1"
        },
        {
            id: "3.1.3",
            name: "Priorisointimatriisit standardoidaan",
            level: 3,
            parent: "3.1"
        },

        {
            id: "3.2.1",
            name: "Cross-skilling lisääntyy",
            level: 3,
            parent: "3.2"
        },
        {
            id: "3.2.2",
            name: "Henkilöstön osaamiskartoitus sidotaan järjestelmätasoihin",
            level: 3,
            parent: "3.2"
        },
        {
            id: "3.2.3",
            name: "Motivaatioprofiili muuttuu",
            level: 3,
            parent: "3.2"
        },

        {
            id: "3.3.1",
            name: "Luottamuksen rakentaminen vaikeutuu",
            level: 3,
            parent: "3.3"
        },
        {
            id: "3.3.2",
            name: "Potilaan kokema inhimillisyys heikkenee",
            level: 3,
            parent: "3.3"
        },
        {
            id: "3.3.3",
            name: "Organisaatiokulttuuri siirtyy tekniseen tehokkuuteen",
            level: 3,
            parent: "3.3"
        },

        {
            id: "4.1.1",
            name: "Single-point-of-failure -kohtien kartoittaminen",
            level: 3,
            parent: "4.1"
        },
        {
            id: "4.1.2",
            name: "Pakolliset tappokytkimet standardoidaan",
            level: 3,
            parent: "4.1"
        },
        {
            id: "4.1.3",
            name: "Syntyy uudenlaisia potilasturvallisuusongelmia",
            level: 3,
            parent: "4.1"
        },

        {
            id: "4.2.1",
            name: "Hoitotulokset heikkenevät aliedustetuissa ryhmissä",
            level: 3,
            parent: "4.2"
        },
        {
            id: "4.2.2",
            name: "Juridiset riskit kasvavat",
            level: 3,
            parent: "4.2"
        },

        {
            id: "4.3.1",
            name: "Opetussuunnitelmiin lisätään mallin rajoitteet",
            level: 3,
            parent: "4.3"
        },
        {
            id: "4.3.2",
            name: "Sertifiointi/uusintatesti säännöllisesti",
            level: 3,
            parent: "4.3"
        },
        {
            id: "4.3.3",
            name: "Koulutus kattaa järjestelmäriippuvuudet",
            level: 3,
            parent: "4.3"
        },

        {
            id: "5.1.1",
            name: "Mittari paranee ilman todellista hoidon kohentumista",
            level: 3,
            parent: "5.1"
        },
        {
            id: "5.1.2",
            name: "Hoito kohdistuu mitattaviin asioihin",
            level: 3,
            parent: "5.1"
        },
        {
            id: "5.1.3",
            name: "Vaikeat potilaat valikoituvat ulos",
            level: 3,
            parent: "5.1"
        },

        {
            id: "5.2.1",
            name: "Tiimit optimoivat omia lukujaan",
            level: 3,
            parent: "5.2"
        },
        {
            id: "5.2.2",
            name: "Yksiköt kieltäytyvät ottamasta korkeariskisiä potilaita",
            level: 3,
            parent: "5.2"
        },
        {
            id: "5.2.3",
            name: "Asiakaskokemus heikkenee",
            level: 3,
            parent: "5.2"
        },

        {
            id: "5.3.1",
            name: "Standardit prosessit sujuvoittavat arkea",
            level: 3,
            parent: "5.3"
        },
        {
            id: "5.3.2",
            name: "Kokeilukulttuuri vahvistuu",
            level: 3,
            parent: "5.3"
        },
        {
            id: "5.3.3",
            name: "Resilienssi paranee",
            level: 3,
            parent: "5.3"
        }
    ]
};

// Create links based on parent-child relationships
const links = [];
futuresWheelData.nodes.forEach(node => {
    if (node.parent) {
        links.push({
            source: node.parent,
            target: node.id
        });
    }
});

// Visualization variables
let svg, g, simulation;
let nodes, links_g;
let selectedNode = null;
let showLabels = true;
let tooltip;
let originalNodePositions = new Map();

// Initialize the visualization
function initVisualization() {
    try {
        const container = d3.select("#visualization");
        if (container.empty()) {
            throw new Error("Visualization container not found");
        }
        
        const width = container.node().offsetWidth;
        const height = container.node().offsetHeight;
        
        if (width === 0 || height === 0) {
            throw new Error("Container has no dimensions");
        }

    // Create SVG
    svg = container
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Create main group
    g = svg.append("g");

    // Add zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([0.1, 4])
        .on("zoom", (event) => {
            g.attr("transform", event.transform);
        });

    svg.call(zoom);

    // Create tooltip
    tooltip = d3.select("#tooltip");

    // Create force simulation with improved parameters
    simulation = d3.forceSimulation(futuresWheelData.nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(d => {
            // Optimized distances for better layout
            if (d.source.id === "center" || d.target.id === "center") {
                return 120; // Distance to first ring
            }
            return 100; // Distance between other levels
        }).strength(0.3))
        .force("charge", d3.forceManyBody().strength(d => {
            // Balanced repulsion to prevent overlap while allowing natural movement
            if (d.level === 0) return -1500; // Center node
            return -300; // All other nodes
        }))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(d => {
            // Dynamic collision radius based on node level
            return getNodeRadius(d.level) + 10;
        }))
        .force("radial", d3.forceRadial(d => {
            // Fixed radial distances for each level
            if (d.level === 0) return 0;
            if (d.level === 1) return 150;
            if (d.level === 2) return 280;
            return 400;
        }, width / 2, height / 2).strength(0.6))
        .force("angular", d3.forceRadial(0, width / 2, height / 2).strength(0.05))
        .alphaDecay(0.02)
        .velocityDecay(0.4);

    // Create links
    links_g = g.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter().append("line")
        .attr("class", "link");

    // Create nodes
    nodes = g.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(futuresWheelData.nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", d => getNodeRadius(d.level))
        .attr("fill", d => getNodeColor(d.level))
        .attr("stroke", "#fff")
        .attr("stroke-width", 2)
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended))
        .on("click", handleNodeClick)
        .on("mouseover", showTooltip)
        .on("mouseout", hideTooltip)
        .on("mousemove", moveTooltip);

    // Add labels
    const labels = g.append("g")
        .attr("class", "labels")
        .selectAll("g")
        .data(futuresWheelData.nodes)
        .enter().append("g")
        .attr("class", "node-label-group")
        .style("display", showLabels ? "block" : "none");

    // Add text elements for each label
    labels.each(function(d) {
        const labelGroup = d3.select(this);
        const words = d.name.split(' ');
        const midPoint = Math.ceil(words.length / 2);
        const firstLine = words.slice(0, midPoint).join(' ');
        const secondLine = words.slice(midPoint).join(' ');
        
        labelGroup.append("text")
            .attr("class", "node-label")
            .attr("dy", "-0.3em")
            .text(firstLine);
            
        if (secondLine) {
            labelGroup.append("text")
                .attr("class", "node-label")
                .attr("dy", "0.7em")
                .text(secondLine);
        }
    });

    // Update positions on simulation tick
    simulation.on("tick", () => {
        links_g
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        nodes
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        labels
            .attr("transform", d => `translate(${d.x}, ${d.y + 5})`);
    });

    // Position center node
    const centerNode = futuresWheelData.nodes.find(d => d.id === "center");
    if (centerNode) {
        centerNode.x = width / 2;
        centerNode.y = height / 2;
        centerNode.fx = width / 2;
        centerNode.fy = height / 2;
    }

    // Position nodes in structured radial layout
    positionNodesRadially();
    
    // Store original positions for reset functionality
    storeOriginalPositions();
    
    // Set initial zoom to center the visualization
    setTimeout(() => {
        const centerX = width / 2;
        const centerY = height / 2;
        const scale = 0.8;
        const translateX = centerX - 400;
        const translateY = centerY - 300;
        
        svg.call(
            d3.zoom().transform,
            d3.zoomIdentity.translate(translateX, translateY).scale(scale)
        );
    }, 100);
    
    } catch (error) {
        console.error("Error initializing visualization:", error);
        // Show user-friendly error message
        const container = d3.select("#visualization");
        container.html(`
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666; font-size: 18px;">
                <div style="text-align: center;">
                    <h3>Visualization Error</h3>
                    <p>Unable to load the futures wheel visualization.</p>
                    <p>Please refresh the page to try again.</p>
                </div>
            </div>
        `);
    }
}

// Position nodes in structured radial layout
function positionNodesRadially() {
    const container = d3.select("#visualization");
    const width = container.node().offsetWidth;
    const height = container.node().offsetHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Group nodes by level
    const nodesByLevel = {};
    futuresWheelData.nodes.forEach(node => {
        if (!nodesByLevel[node.level]) {
            nodesByLevel[node.level] = [];
        }
        nodesByLevel[node.level].push(node);
    });
    
    // Position nodes in each level
    Object.keys(nodesByLevel).forEach(level => {
        const levelNodes = nodesByLevel[level];
        const levelNum = parseInt(level);
        
        if (levelNum === 0) {
            // Center node - position at center
            const centerNode = levelNodes[0];
            centerNode.x = centerX;
            centerNode.y = centerY;
            centerNode.fx = centerX;
            centerNode.fy = centerY;
            return;
        }
        
        // Calculate radius for this level (matching simulation parameters)
        const radius = levelNum === 1 ? 150 : levelNum === 2 ? 280 : 400;
        
        // Distribute nodes evenly around the circle
        levelNodes.forEach((node, index) => {
            const angle = (2 * Math.PI * index) / levelNodes.length;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            // Set initial position
            node.x = x;
            node.y = y;
            
            // For first order nodes, fix position to establish proper layout
            if (levelNum === 1) {
                node.fx = x;
                node.fy = y;
            }
        });
    });
    
    // After a delay, release the fixed positions to allow natural movement
    setTimeout(() => {
        futuresWheelData.nodes.forEach(node => {
            if (node.id !== "center") {
                node.fx = null;
                node.fy = null;
            }
        });
    }, 3000);
}

// Store original positions for reset functionality
function storeOriginalPositions() {
    futuresWheelData.nodes.forEach(node => {
        originalNodePositions.set(node.id, {
            x: node.x,
            y: node.y,
            fx: node.fx,
            fy: node.fy
        });
    });
}

// Helper functions
function getNodeRadius(level) {
    switch(level) {
        case 0: return 60; // Center (20 * 3)
        case 1: return 45; // First order (15 * 3)
        case 2: return 36; // Second order (12 * 3)
        case 3: return 30; // Third order (10 * 3)
        default: return 24; // (8 * 3)
    }
}

function getNodeColor(level) {
    switch(level) {
        case 0: return "#95BAEB"; // Center - light blue
        case 1: return "#E8D541"; // First order - yellow
        case 2: return "#E84196"; // Second order - pink
        case 3: return "#41D5E8"; // Third order - cyan
        default: return "#ddd";
    }
}

// Drag functions
function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    if (d.id !== "center") {
        d.fx = null;
        d.fy = null;
    }
}

// Handle node clicks for highlighting
function handleNodeClick(event, d) {
    // Hide tooltip to prevent interference
    hideTooltip();
    
    // Call the nodeClicked logic for highlighting
    nodeClicked(event, d);
}

// Node click handler
function nodeClicked(event, d) {
    // Hide tooltip to prevent interference
    hideTooltip();
    
    // Check if clicking the same node (deselection)
    if (selectedNode && selectedNode.id === d.id) {
        // Deselect everything
        nodes.classed("selected", false);
        nodes.classed("highlighted", false);
        links_g.classed("highlighted", false);
        selectedNode = null;
        updateInfoPanel({name: "Click on any node to explore its connected impacts.", level: -1});
        return;
    }
    
    // Remove previous selection
    nodes.classed("selected", false);
    nodes.classed("highlighted", false);
    links_g.classed("highlighted", false);

    // Highlight selected node
    d3.select(event.target).classed("selected", true);
    selectedNode = d;

    // Find the complete chain (all ancestors and descendants)
    const chainNodes = new Set();
    chainNodes.add(d.id);

    // Find all ancestors (upstream to center)
    function findAncestors(nodeId) {
        links.forEach(link => {
            const sourceId = link.source.id || link.source;
            const targetId = link.target.id || link.target;
            if (targetId === nodeId) {
                chainNodes.add(sourceId);
                findAncestors(sourceId);
            }
        });
    }

    // Find all descendants (downstream from center)
    function findDescendants(nodeId) {
        links.forEach(link => {
            const sourceId = link.source.id || link.source;
            const targetId = link.target.id || link.target;
            if (sourceId === nodeId) {
                chainNodes.add(targetId);
                findDescendants(targetId);
            }
        });
    }

    // Find complete chain
    findAncestors(d.id);
    findDescendants(d.id);

    console.log("Complete chain nodes:", Array.from(chainNodes));

    // Highlight all nodes in the chain
    const highlightedNodes = nodes.filter(node => chainNodes.has(node.id));
    console.log("Highlighting nodes count:", highlightedNodes.size());
    highlightedNodes.classed("highlighted", true);

    // Highlight all links between chain nodes
    const highlightedLinks = links_g.filter(link => {
        const linkData = link.__data__;
        const sourceId = linkData.source.id || linkData.source;
        const targetId = linkData.target.id || linkData.target;
        return chainNodes.has(sourceId) && chainNodes.has(targetId);
    });
    console.log("Highlighting links count:", highlightedLinks.size());
    highlightedLinks.classed("highlighted", true);

    // Update info panel
    updateInfoPanel(d);
}

// Update links visualization (simplified - no custom links)
function updateLinks() {
    links_g = g.select(".links")
        .selectAll("line")
        .data(links);
    
    // Remove old links
    links_g.exit().remove();
    
    // Add new links
    const newLinks = links_g.enter().append("line")
        .attr("class", "link");
    
    // Update all links
    links_g = links_g.merge(newLinks);
}

// Update info panel
function updateInfoPanel(node) {
    const infoPanel = d3.select("#infoPanel");
    
    let content = `<h3>${node.name}</h3>`;
    
    if (node.level === 0) {
        content += `<p><strong>Central Phenomenon:</strong> This is the main issue that triggers all other impacts.</p>`;
    } else {
        content += `<p><strong>Level ${node.level} Impact:</strong> `;
        if (node.level === 1) {
            content += `Direct consequence of the central phenomenon.`;
        } else if (node.level === 2) {
            content += `Secondary effect resulting from first-order impacts.`;
        } else if (node.level === 3) {
            content += `Tertiary effect with long-term implications.`;
        }
        content += `</p>`;
    }

    // Find connected nodes (both upstream and downstream)
    const connectedNodes = [];
    links.forEach(link => {
        if (link.source.id === node.id || link.source === node.id) {
            const targetNode = futuresWheelData.nodes.find(n => n.id === (link.target.id || link.target));
            if (targetNode) {
                connectedNodes.push({...targetNode, direction: 'downstream'});
            }
        }
        if (link.target.id === node.id || link.target === node.id) {
            const sourceNode = futuresWheelData.nodes.find(n => n.id === (link.source.id || link.source));
            if (sourceNode) {
                connectedNodes.push({...sourceNode, direction: 'upstream'});
            }
        }
    });

    if (connectedNodes.length > 0) {
        const downstream = connectedNodes.filter(n => n.direction === 'downstream');
        const upstream = connectedNodes.filter(n => n.direction === 'upstream');
        
        if (upstream.length > 0) {
            content += `<p><strong>Upstream Causes (${upstream.length}):</strong></p><ul>`;
            upstream.forEach(connectedNode => {
                content += `<li>${connectedNode.name}</li>`;
            });
            content += `</ul>`;
        }
        
        if (downstream.length > 0) {
            content += `<p><strong>Downstream Effects (${downstream.length}):</strong></p><ul>`;
            downstream.forEach(connectedNode => {
                content += `<li>${connectedNode.name}</li>`;
            });
            content += `</ul>`;
        }
    }

    infoPanel.html(content);
}

// Control functions
function resetVisualization() {
    // Reset selection
    nodes.classed("selected", false);
    nodes.classed("highlighted", false);
    links_g.classed("highlighted", false);
    selectedNode = null;

    // Reset info panel
    d3.select("#infoPanel").html(`
        <h3>Instructions</h3>
        <p>Click on any node to explore its connected impacts. The visualization will highlight the selected node and all its downstream effects. Use the controls above to reset the view or toggle labels.</p>
        <p><strong>Navigation:</strong> Drag to pan, scroll to zoom, or use the control buttons for quick navigation.</p>
    `);

    // Reset zoom to center the central phenomenon
    const container = d3.select("#visualization");
    const width = container.node().offsetWidth;
    const height = container.node().offsetHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Calculate the transform to center the central phenomenon
    const scale = 0.8; // Slightly zoomed out to show the full wheel
    const translateX = centerX - 400; // 400 is the center of the visualization
    const translateY = centerY - 300; // 300 is the center of the visualization
    
    svg.transition().duration(750).call(
        d3.zoom().transform,
        d3.zoomIdentity.translate(translateX, translateY).scale(scale)
    );
    
    // Reset node positions to original layout
    resetNodePositions();
    
    // Restart simulation
    simulation.alpha(0.3).restart();
}

// Reset node positions to proper radial layout
function resetNodePositions() {
    const container = d3.select("#visualization");
    const width = container.node().offsetWidth;
    const height = container.node().offsetHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Group nodes by level
    const nodesByLevel = {};
    futuresWheelData.nodes.forEach(node => {
        if (!nodesByLevel[node.level]) {
            nodesByLevel[node.level] = [];
        }
        nodesByLevel[node.level].push(node);
    });
    
    // Position nodes in each level
    Object.keys(nodesByLevel).forEach(level => {
        const levelNodes = nodesByLevel[level];
        const levelNum = parseInt(level);
        
        if (levelNum === 0) {
            // Center node - position at center
            const centerNode = levelNodes[0];
            centerNode.x = centerX;
            centerNode.y = centerY;
            centerNode.fx = centerX;
            centerNode.fy = centerY;
        } else {
            // Calculate radius for this level
            const radius = levelNum === 1 ? 150 : levelNum === 2 ? 280 : 400;
            
            // Distribute nodes evenly around the circle
            levelNodes.forEach((node, index) => {
                const angle = (2 * Math.PI * index) / levelNodes.length;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                
                // Set position
                node.x = x;
                node.y = y;
                
                // For first order nodes, fix position to establish proper layout
                if (levelNum === 1) {
                    node.fx = x;
                    node.fy = y;
                } else {
                    node.fx = null;
                    node.fy = null;
                }
            });
        }
    });
    
    // After a delay, release the fixed positions for first order nodes
    setTimeout(() => {
        futuresWheelData.nodes.forEach(node => {
            if (node.id !== "center") {
                node.fx = null;
                node.fy = null;
            }
        });
    }, 2000);
}


function toggleLabels() {
    showLabels = !showLabels;
    d3.selectAll(".node-label-group")
        .style("display", showLabels ? "block" : "none");
}

function exportVisualization() {
    // Create a temporary canvas to export the visualization
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const width = svg.attr('width');
    const height = svg.attr('height');
    
    canvas.width = width;
    canvas.height = height;
    
    // Convert SVG to canvas
    const svgData = new XMLSerializer().serializeToString(svg.node());
    const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
    const svgUrl = URL.createObjectURL(svgBlob);
    
    const img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(svgUrl);
        
        // Download the image
        const link = document.createElement('a');
        link.download = 'futures-wheel-visualization.png';
        link.href = canvas.toDataURL();
        link.click();
    };
    img.src = svgUrl;
}

// Tooltip functions with debouncing
let tooltipTimeout;
let isTooltipVisible = false;

function showTooltip(event, d) {
    // Clear any existing timeout
    if (tooltipTimeout) {
        clearTimeout(tooltipTimeout);
    }
    
    // Add a small delay to prevent interference with clicks
    tooltipTimeout = setTimeout(() => {
        if (!isTooltipVisible) {
            const fullText = d.fullName || d.name;
            tooltip
                .html(fullText)
                .classed("show", true);
            isTooltipVisible = true;
        }
    }, 200);
}

function hideTooltip() {
    // Clear timeout if tooltip hasn't shown yet
    if (tooltipTimeout) {
        clearTimeout(tooltipTimeout);
        tooltipTimeout = null;
    }
    tooltip.classed("show", false);
    isTooltipVisible = false;
}

function moveTooltip(event) {
    const [x, y] = d3.pointer(event, document.body);
    tooltip
        .style("left", (x + 10) + "px")
        .style("top", (y - 10) + "px");
}

// Welcome overlay functions
function closeWelcomeOverlay() {
    const overlay = document.getElementById('welcomeOverlay');
    if (overlay) {
        overlay.classList.add('hidden');
        overlay.style.display = 'none';
        
        // Start the visualization after closing the overlay
        setTimeout(() => {
            initVisualization();
        }, 300);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Show welcome overlay first, don't initialize visualization yet
    const overlay = document.getElementById('welcomeOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
    }
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            if (svg && g) {
                const container = d3.select("#visualization");
                const width = container.node().offsetWidth;
                const height = container.node().offsetHeight;
                
                svg.attr("width", width).attr("height", height);
                simulation.force("center", d3.forceCenter(width / 2, height / 2));
                simulation.alpha(0.1).restart();
            }
        }, 250);
    });
});
