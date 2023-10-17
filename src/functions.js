function resetCanvas() {
    const graphEles = document.getElementsByClassName("graph");
    for (const g of graphEles) {
        const width = g.getBoundingClientRect().width;
        const height = g.getBoundingClientRect().height;

        views.width = width;
        views.height = height;
        downloads.width = width;
        downloads.height = height;
    }
}
function drawGraph(canvas, ctx, name = "sample") {
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, canvas.height - 50);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(50, canvas.height - 50);
    ctx.lineTo(canvas.width - 50, canvas.height - 50);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.font = "20px Pompiere";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(name, canvas.width / 2, 30);
    ctx.closePath();
}
function drawBarGraph(canvas, ctx, data) {
    const width = canvas.getBoundingClientRect().width;
    const height = canvas.getBoundingClientRect().height;

    const barWidth = (width - 100) / data.length;

    let max = 0;
    for (const d of data) {
        if (d > max) {
            max = d;
        }
    }

    const barHeight = (height - 100) / max;

    for (let i = 0; i < data.length; i++) {
        const x = 50 + i * barWidth;
        const y = height - 50 - data[i] * barHeight;
        ctx.beginPath();
        ctx.rect(x, y, barWidth, data[i] * barHeight);
        ctx.fillStyle = "rgb(179, 207, 223)";
        ctx.fill();
        ctx.closePath();

        // draw text
        ctx.beginPath();
        ctx.font = "16px Pompiere";
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.textAlign = "center";
        ctx.fillText(data[i], x + barWidth / 2, y - 10);
        ctx.closePath();
    }
}
function drawLineGraph(canvas, ctx, data) {
    const width = canvas.getBoundingClientRect().width;
    const height = canvas.getBoundingClientRect().height;

    const barWidth = (width - 100) / data.length;

    let max = 0;
    for (const d of data) {
        if (d > max) {
            max = d;
        }
    }

    const barHeight = (height - 100) / max;

    ctx.beginPath();
    ctx.moveTo(50, height - 50 - data[0] * barHeight);
    for (let i = 1; i < data.length; i++) {
        const x = 50 + i * barWidth;
        const y = height - 50 - data[i] * barHeight;
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.closePath();

    // draw points
    for (let i = 0; i < data.length; i++) {
        const x = 50 + i * barWidth;
        const y = height - 50 - data[i] * barHeight;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(179, 207, 223)";
        ctx.fill();
        ctx.closePath();
    }

    // draw text
    for (let i = 0; i < data.length; i++) {
        const x = 50 + i * barWidth;
        const y = height - 50 - data[i] * barHeight;
        ctx.beginPath();
        ctx.font = "16px Pompiere";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText(data[i], x, y - 10);
        ctx.closePath();
    }
}
function drawGraphs(type, vdata, ddata) {
    if (vdata === null || vdata === undefined) {
        vdata = [];
    }
    if (ddata === null || ddata === undefined) {
        ddata = [];
    }
    vtx.clearRect(0, 0, views.width, views.height);
    dtx.clearRect(0, 0, downloads.width, downloads.height);

    drawGraph(views, vtx, "Views");
    drawGraph(downloads, dtx, "Downloads");
    switch (type) {
        case 0:
            drawBarGraph(views, vtx, vdata);
            drawBarGraph(downloads, dtx, ddata);
            break;
        case 1:
            drawLineGraph(views, vtx, vdata);
            drawLineGraph(downloads, dtx, ddata);
    }
}
// ziudhasy8dgas97y8dtas7dtgas68drasd
function changeProject(index, project) {
    currentSelected = index;
    const container = document.getElementById("project-container");
    if (index === 0) {
        const text = document.getElementById("select-text");
        text.style.display = "inline-block";
        container.classList.add("project-container-hide");
        container.classList.remove("project-container-show");
        return;
    } else {
        container.classList.add("project-container-show");
        container.classList.remove("project-container-hide");
        const text = document.getElementById("select-text");
        text.style.display = "none";
        const title = document.getElementById("project-title");
        title.innerText = project.innerText;
    }

    let dataArr = [];
    // get dates
    if (window.projectData !== null && window.projectData !== undefined) {
        for (const date of window.projectData) {
            let links = date.links;
            for (const link of Object.keys(links)) {
                if (link.replaceAll("%20", " ") === project.innerText) {
                    dataArr.push(links[link]);
                }
            }
        }
    }

    resetCanvas();
    drawGraphs(graphType, dataArr, null);

    window.history.pushState('beans', 'Title', '/src/index.html?=' + currentSelected);
}
document.getElementById("project-graph-toggle").onclick = function (e) {
    e.preventDefault();
    const toggleBar = document.getElementById("toggle-bar");
    if (toggleBar.classList.contains("graph-selected")) {
        toggleBar.classList.toggle("graph-deselected");
        toggleBar.classList.toggle("graph-selected");
        toggleBar.innerText = "Bar";
        graphType = 0;
    } else if (toggleBar.classList.contains("graph-deselected")) {
        toggleBar.classList.toggle("graph-selected");
        toggleBar.classList.toggle("graph-deselected");
        toggleBar.innerText = "Line";
        graphType = 1;
    } else {
        toggleBar.classList.add("graph-selected");
        toggleBar.innerText = "Line";
        graphType = 1;
    }
    changeProject(currentSelected, projects[currentSelected - 1]);
};
async function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

window.onload = async () => {
    await wait(300);
    projects = document.getElementsByClassName("project-selectable");
    projects = Array.from(projects);
    for (const project of projects) {
        project.onclick = () => {
            if (project.classList.contains("unselected")) {
                changeProject(projects.indexOf(project) + 1, project);
                project.classList.add("selected");
                project.classList.remove("unselected");

                for (const p of projects) {
                    if (p !== project) {
                        p.classList.add("unselected");
                        p.classList.remove("selected");
                    }
                }
            } else if (project.classList.contains("selected")) {
                project.classList.add("unselected");
                project.classList.remove("selected");
                changeProject(0, null);
            }
        };
    }
    if (location.search.length > 0) {
        const data = location.search.split("?=")[1];
        changeProject(data, projects[data - 1]);
        projects[data-1].classList.add("selected");
        projects[data-1].classList.remove("unselected");
    }
};

document.getElementById("project-download-btn").onclick = function (e) {
    console.log(1);
    if (document.getElementById("dropdown").style.display === "inline-block") {
        document.getElementById("dropdown").style.display = "none";
    } else document.getElementById("dropdown").style.display = "inline-block";
};

window.onresize = function () {
    resetCanvas();
    drawGraphs(graphType, null, null);
};
document.getElementById("view-project").onclick = function (e) {
    // get current selected
    console.log(projects[currentSelected - 1].innerText);
    location.pathname =
        "src/TDFileExplorer/Projects/" +
        projects[currentSelected - 1].innerText.replaceAll(" ", "%20") +
        "/_.html";
};
