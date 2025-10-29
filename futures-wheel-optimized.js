// Optimized Futures Wheel Visualization
// Load data from external JSON file for easy editing

let futuresWheelData = null;

// Generate nodes programmatically from loaded data
function generateNodes() {
    const nodes = [futuresWheelData.center];
    const links = [];
    
    // Level 1 nodes (direct from center)
    futuresWheelData.impacts[1].forEach((impact, index) => {
        const nodeId = `l1_${index + 1}`;
        nodes.push({
            id: nodeId,
            title: impact.title,
            description: impact.description,
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
            title: impact.title,
            description: impact.description,
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
            title: impact.title,
            description: impact.description,
            level: 3
        });
        links.push({ source: parentId, target: nodeId });
    });
    
    return { nodes, links };
}

// Visualization variables
let svg, simulation, nodes, links, nodeData, linkData, selectedNode = null;

// Load data and initialize visualization
async function loadDataAndInit() {
    try {
        const response = await fetch('data.json');
        futuresWheelData = await response.json();
        initVisualization();
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('visualization').innerHTML = '<div style="text-align: center; padding: 50px; color: #666;">Error loading data. Please check that data.json exists.</div>';
    }
}

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
    
    // Add gradients for nodes
    const defs = svg.append("defs");
    
    // Gradient for center node
    const centerGradient = defs.append("radialGradient")
        .attr("id", "centerGradient");
    centerGradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#B5D6F5");
    centerGradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#95BAEB");
    
    // Gradient for level 1
    const level1Gradient = defs.append("radialGradient")
        .attr("id", "level1Gradient");
    level1Gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#F5E871");
    level1Gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#E8D541");
    
    // Gradient for level 2
    const level2Gradient = defs.append("radialGradient")
        .attr("id", "level2Gradient");
    level2Gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#F571B6");
    level2Gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#E84196");
    
    // Gradient for level 3
    const level3Gradient = defs.append("radialGradient")
        .attr("id", "level3Gradient");
    level3Gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#71E5F5");
    level3Gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#41D5E8");
    
    // Generate data
    const generated = generateNodes();
    nodeData = generated.nodes;
    linkData = generated.links;
    console.log("Generated nodes:", nodeData.length);
    console.log("Generated links:", linkData.length);
    
    // Position all nodes immediately in circular layout
    positionNodesInRings(nodeData, width, height);
    
    // Create a lookup map for nodes by id
    const nodeMap = {};
    nodeData.forEach(node => nodeMap[node.id] = node);
    
    // Update link data to have actual node references
    linkData.forEach(link => {
        link.source = nodeMap[link.source];
        link.target = nodeMap[link.target];
    });
    
    // Create links (static, no animation) with better styling
    links = g.append("g")
        .selectAll("line")
        .data(linkData)
        .enter().append("line")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 2.5)
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
    
    // Create nodes (static, no animation) with bigger sizes, gradients and shadows
    nodes = g.append("g")
        .selectAll("circle")
        .data(nodeData)
        .enter().append("circle")
        .attr("r", d => d.level === 0 ? 50 : d.level === 1 ? 40 : d.level === 2 ? 32 : 26)
        .attr("fill", d => {
            if (d.level === 0) return "url(#centerGradient)";
            if (d.level === 1) return "url(#level1Gradient)";
            if (d.level === 2) return "url(#level2Gradient)";
            return "url(#level3Gradient)";
        })
        .attr("stroke", "#fff")
        .attr("stroke-width", 3)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .style("cursor", "pointer")
        .style("filter", "drop-shadow(0 3px 6px rgba(0,0,0,0.15))")
        .on("click", handleNodeClick)
        .on("mouseover", function(event, d) {
            d3.select(this)
                .style("filter", "drop-shadow(0 6px 12px rgba(0,0,0,0.25))")
                .transition()
                .duration(200)
                .attr("r", d => (d.level === 0 ? 50 : d.level === 1 ? 40 : d.level === 2 ? 32 : 26) * 1.1);
            showTooltip(event, d);
        })
        .on("mouseout", function(event, d) {
            d3.select(this)
                .style("filter", "drop-shadow(0 3px 6px rgba(0,0,0,0.15))")
                .transition()
                .duration(200)
                .attr("r", d => d.level === 0 ? 50 : d.level === 1 ? 40 : d.level === 2 ? 32 : 26);
            hideTooltip();
        });
    
    // Add title labels to nodes
    const titleLabels = g.append("g")
        .selectAll("text")
        .data(nodeData)
        .enter().append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .attr("font-size", d => d.level === 0 ? "12px" : d.level === 1 ? "10px" : d.level === 2 ? "9px" : "8px")
        .attr("font-weight", "bold")
        .attr("fill", "#333")
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        .text(d => {
            const title = d.title || d.name || "Untitled";
            const maxLength = d.level === 0 ? 20 : d.level === 1 ? 15 : d.level === 2 ? 12 : 10;
            return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
        });
    
    console.log("Visualization rendered - all nodes are static");
}

// Position nodes in structured hierarchical layout
function positionNodesInRings(nodeData, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Position center node first
    const centerNode = nodeData.find(d => d.id === "center");
    if (centerNode) {
        centerNode.x = centerX;
        centerNode.y = centerY;
    }
    
    // Group nodes by level
    const nodesByLevel = {};
    nodeData.forEach(node => {
        if (!nodesByLevel[node.level]) {
            nodesByLevel[node.level] = [];
        }
        nodesByLevel[node.level].push(node);
    });
    
    // Position Level 1 nodes in a circle around center
    const level1Nodes = nodesByLevel[1] || [];
    const level1Radius = 180;
    level1Nodes.forEach((node, index) => {
        const angle = (2 * Math.PI * index) / level1Nodes.length;
        node.x = centerX + level1Radius * Math.cos(angle);
        node.y = centerY + level1Radius * Math.sin(angle);
    });
    
    // Position Level 2 nodes in branches from Level 1
    const level2Nodes = nodesByLevel[2] || [];
    const level2Radius = 140; // Increased distance from level 1 to level 2
    const level2Spread = 45; // Reduced spread to prevent overlap
    
    level2Nodes.forEach((node, index) => {
        const parentIndex = Math.floor(index / 3); // 3 level 2 nodes per level 1 node
        const parentNode = level1Nodes[parentIndex];
        if (parentNode) {
            const branchAngle = (2 * Math.PI * parentIndex) / level1Nodes.length;
            const nodeInBranch = index % 3;
            const spreadAngle = (nodeInBranch - 1) * (level2Spread * Math.PI / 180); // -45, 0, +45 degrees
            
            const finalAngle = branchAngle + spreadAngle;
            node.x = parentNode.x + level2Radius * Math.cos(finalAngle);
            node.y = parentNode.y + level2Radius * Math.sin(finalAngle);
        }
    });
    
    // Position Level 3 nodes in branches from Level 2
    const level3Nodes = nodesByLevel[3] || [];
    const level3Radius = 120; // Increased distance from level 2 to level 3
    const level3Spread = 30; // Reduced spread to prevent overlap
    
    level3Nodes.forEach((node, index) => {
        const parentIndex = Math.floor(index / 3); // 3 level 3 nodes per level 2 node
        const parentNode = level2Nodes[parentIndex];
        if (parentNode) {
            const nodeInBranch = index % 3;
            const spreadAngle = (nodeInBranch - 1) * (level3Spread * Math.PI / 180); // -30, 0, +30 degrees
            
            // Calculate angle from parent to center to determine branch direction
            const parentAngle = Math.atan2(parentNode.y - centerY, parentNode.x - centerX);
            const finalAngle = parentAngle + spreadAngle;
            
            node.x = parentNode.x + level3Radius * Math.cos(finalAngle);
            node.y = parentNode.y + level3Radius * Math.sin(finalAngle);
        }
    });
}

// Event handlers
function handleNodeClick(event, d) {
    // Remove previous selection
    nodes.classed("selected", false);
    
    // Add selection to clicked node
    d3.select(event.target).classed("selected", true);
    
    // Update selected node
    selectedNode = d;
    
    // Update sidebar
    updateSidebar(d);
}

function showTooltip(event, d) {
    const title = d.title || d.name || "Untitled";
    d3.select("#tooltip")
        .style("opacity", 1)
        .html(title)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
}

function hideTooltip() {
    d3.select("#tooltip").style("opacity", 0);
}

function updateSidebar(node) {
    const title = node.title || node.name || "Untitled";
    const description = node.description || "No description available.";
    const levelNames = ["Central Phenomenon", "First Order Impact", "Second Order Impact", "Third Order Impact"];
    
    d3.select("#sidebar").html(`
        <div class="sidebar-content">
            <h3>${title}</h3>
            <div class="level-badge level-${node.level}">${levelNames[node.level]}</div>
            <div class="description">
                <h4>Description:</h4>
                <p>${description}</p>
            </div>
        </div>
    `);
}


// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadDataAndInit();
});
