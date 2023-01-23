let table = [[[]]]
let currColor = "Red"
let width = 3
let height = 3

colors = {
    "Red": "#9e2b27",
    "Orange": "#ea7e35",
    "Yellow": "#c2b51c",
    "Green": "#364b18",
    "Lime": "#39ba2e",
    "Blue": "#0000AA",
    "Cyan": "#267191",
    "LightBlue": "#6387d2",
    "Purple": "#7e34bf",
    "Magenta": "#be49c9",
    "Pink": "#d98199",
    "Brown": "#56331c",
    "White": "#e4e4e4",
    "Gray": "#a0a7a7",
    "DarkGray": "#414141",
    "Black": "#181414"
}



usedColors = []

const flatEquals = (target, ...arrays) => {
    return (
        target.length === arrays.flat().length &&
        target.every((el) => arrays.flat().includes(el))
    );
};

function buildBlankTable() {
    let newTable = document.createElement('table')
    height = $("#hei").val()
    width = $("#wid").val()
    usedColors = []
    table = []
    id = 0;
    for(let i = 0; i < height; i++) {
        let row = document.createElement('tr');
        table[i] = []
        for(let j = 0; j < width; j++) {
            let cell = document.createElement('td');
            cell.innerHTML = "<p>_</p>"
            cell.id = id;
            row.appendChild(cell)
            table[i][j] = "_"
            id++;
        }
        newTable.appendChild(row)
    }
    $("#flTable").html(newTable.innerHTML)

    $("td").on('click', function(event) {
        let cellId = event.currentTarget.id
        let row = Math.floor(cellId / height)
        let col = cellId % height
        
        if(table[row][col]==currColor){
            table[row][col] = "_"
            $("#" + cellId).html("<p>_</p>")
            checkColor(currColor)
            return
        }
        
        let circle = document.createElement('span')
        circle.classList.add("innercirc")
        circle.style.backgroundColor = colors[currColor]
        if(!(usedColors.includes(currColor))){
            usedColors.push(currColor)
        }

        table[row][col] = currColor
        $("#" + cellId).html(circle)
    })
}

buildBlankTable()

function makeTableElement(sub, i){
    if(sub == 1){
        let elem = document.createElement('span')
        elem.classList.add(sub == 1 ? "leftcorn" : sub == -1 ? "rightcorn" : sub == width ? "upcorn" : "downcorn")
        elem.style.backgroundColor = colors[usedColors[i]]
        return elem
    }
}

function buildTable(solution) {
    for(let i = 0; i < usedColors.length; i++){
        for(let j = 1; j < (solution[i].length)-1; j++){
            if(Math.abs(solution[i][j]-solution[i][j-1]) <= 1){
                if(Math.abs(solution[i][j]-solution[i][j+1]) <= 1){
                    let elem = document.createElement('span')
                    elem.classList.add("horizontal")
                    elem.style.backgroundColor = colors[usedColors[i]]
                    
                    $("#" + solution[i][j]).html(elem)
                }
                else{
                    if(solution[i][j]-solution[i][j+1] == width){
                        if(j==1){
                            if(solution[i][j-1]-solution[i][j] == -width){
                                let elem = document.createElement('span')
                                elem.classList.add("upcorn")
                                elem.style.backgroundColor = colors[usedColors[i]]
                                let elem2 = document.createElement('span')
                                elem2.classList.add("downcorn")
                                elem2.style.backgroundColor = colors[usedColors[i]]
                                $("#" + solution[i][j]).html(elem).append(elem2) 
                            }
                            else if(solution[i][j-1]-solution[i][j] == 1){
                                let elem = document.createElement('span')
                                elem.classList.add("upcorn")
                                elem.style.backgroundColor = colors[usedColors[i]]
                                let elem2 = document.createElement('span')
                                elem2.classList.add("rightcorn")
                                elem2.style.backgroundColor = colors[usedColors[i]]
                                $("#" + solution[i][j]).html(elem).append(elem2) 
                            }
                            else {
                                let elem = document.createElement('span')
                                elem.classList.add("upcorn")
                                elem.style.backgroundColor = colors[usedColors[i]]
                                let elem2 = document.createElement('span')
                                elem2.classList.add("leftcorn")
                                elem2.style.backgroundColor = colors[usedColors[i]]
                                $("#" + solution[i][j]).html(elem).append(elem2) 
                            }
                        }
                        else{
                            let elem = document.createElement('span')
                            elem.classList.add("upcorn")
                            elem.style.backgroundColor = colors[usedColors[i]]
                            
                            $("#" + solution[i][j]).html(elem)
                        }
                    }
                    else{
                        if(j==1){
                            if(solution[i][j-1]-solution[i][j] == width){
                                let elem = document.createElement('span')
                                elem.classList.add("downcorn")
                                elem.style.backgroundColor = colors[usedColors[i]]
                                let elem2 = document.createElement('span')
                                elem2.classList.add("upcorn")
                                elem2.style.backgroundColor = colors[usedColors[i]]
                                $("#" + solution[i][j]).html(elem).append(elem2) 
                            }
                            else if(solution[i][j-1]-solution[i][j] == 1){
                                let elem = document.createElement('span')
                                elem.classList.add("downcorn")
                                elem.style.backgroundColor = colors[usedColors[i]]
                                let elem2 = document.createElement('span')
                                elem2.classList.add("rightcorn")
                                elem2.style.backgroundColor = colors[usedColors[i]]
                                $("#" + solution[i][j]).html(elem).append(elem2) 
                            }
                            else {
                                let elem = document.createElement('span')
                                elem.classList.add("downcorn")
                                elem.style.backgroundColor = colors[usedColors[i]]
                                let elem2 = document.createElement('span')
                                elem2.classList.add("leftcorn")
                                elem2.style.backgroundColor = colors[usedColors[i]]
                                $("#" + solution[i][j]).html(elem).append(elem2) 
                            }
                        }
                        else {
                            let elem = document.createElement('span')
                            elem.classList.add("downcorn")
                            elem.style.backgroundColor = colors[usedColors[i]]
                            
                            $("#" + solution[i][j]).html(elem)
                        }
                    }
                }
            }
            else{
                if(!(Math.abs(solution[i][j]-solution[i][j+1]) <= 1)){
                    let elem = document.createElement('span')
                    elem.classList.add("vertical")
                    elem.style.backgroundColor = colors[usedColors[i]]
                    $("#" + solution[i][j]).html(elem)
                }
                else{
                    if((solution[i][j]-solution[i][j+1]) == 1){
                        if(j==1){
                            if(solution[i][j-1]-solution[i][j] == 1){
                                let elem = document.createElement('span')
                                elem.classList.add("leftcorn")
                                elem.style.backgroundColor = colors[usedColors[i]]
                                let elem2 = document.createElement('span')
                                elem2.classList.add("rightcorn")
                                elem2.style.backgroundColor = colors[usedColors[i]]
                                $("#" + solution[i][j]).html(elem).append(elem2) 
                            }
                            else if(solution[i][j-1]-solution[i][j] == width){
                                let elem = document.createElement('span')
                                elem.classList.add("leftcorn")
                                elem.style.backgroundColor = colors[usedColors[i]]
                                let elem2 = document.createElement('span')
                                elem2.classList.add("downcorn")
                                elem2.style.backgroundColor = colors[usedColors[i]]
                                $("#" + solution[i][j]).html(elem).append(elem2) 
                            }
                            else {
                                let elem = document.createElement('span')
                                elem.classList.add("leftcorn")
                                elem.style.backgroundColor = colors[usedColors[i]]
                                let elem2 = document.createElement('span')
                                elem2.classList.add("upcorn")
                                elem2.style.backgroundColor = colors[usedColors[i]]
                                $("#" + solution[i][j]).html(elem).append(elem2) 
                            }
                        }
                        else{
                            let elem = document.createElement('span')
                            elem.classList.add("leftcorn")
                            elem.style.backgroundColor = colors[usedColors[i]]
                            $("#" + solution[i][j]).html(elem)
                        }
                    }
                    else{
                        if(j==1){
                            if(solution[i][j-1]-solution[i][j] == -1){
                                let elem = document.createElement('span')
                                elem.classList.add("rightcorn")
                                elem.style.backgroundColor = colors[usedColors[i]]
                                let elem2 = document.createElement('span')
                                elem2.classList.add("leftcorn")
                                elem2.style.backgroundColor = colors[usedColors[i]]
                                $("#" + solution[i][j]).html(elem).append(elem2) 
                            }
                            else if(solution[i][j-1]-solution[i][j] == width){
                                let elem = document.createElement('span')
                                elem.classList.add("rightcorn")
                                elem.style.backgroundColor = colors[usedColors[i]]
                                let elem2 = document.createElement('span')
                                elem2.classList.add("downcorn")
                                elem2.style.backgroundColor = colors[usedColors[i]]
                                $("#" + solution[i][j]).html(elem).append(elem2) 
                            }
                            else {
                                let elem = document.createElement('span')
                                elem.classList.add("rightcorn")
                                elem.style.backgroundColor = colors[usedColors[i]]
                                let elem2 = document.createElement('span')
                                elem2.classList.add("upcorn")
                                elem2.style.backgroundColor = colors[usedColors[i]]
                                $("#" + solution[i][j]).html(elem).append(elem2) 
                            }
                        }
                        else{
                            let elem = document.createElement('span')
                            elem.classList.add("rightcorn")
                            elem.style.backgroundColor = colors[usedColors[i]]
                            $("#" + solution[i][j]).html(elem)
                        }
                    }
                }
            }
        }
    }
}

$("#updateDim").on('click', function() {
    buildBlankTable();
})

$(".color").on('click', function(event) {
    $("#" + currColor).removeClass("active")
    currColor = event.currentTarget.id
    $("#" + currColor).addClass("active")
})

$("#solve").on('click', function() {
    let paths = []
    for(let i = 0; i < usedColors.length; i++){
        [pos1, pos2] = findEndpoints(usedColors[i])
        let path = findPaths(pos1,pos2)
        if(path.length == 0){
            alert("No answer")
            return;
        }
        paths.push(path);
    }
    console.log(paths)
    let solution = findCombination(paths, width*height)
    console.log(solution)
    buildTable(solution)
})

function findEndpoints(color){
    let pos1 = -1, pos2 = -1;
    for(let i = 0; i < height; i++){
        for(let j = 0; j < height; j++){
            if(table[i][j]==color){
                if(pos1==-1){
                    pos1 = i*width + j
                }
                else if(pos2==-1){
                    pos2 = i*width + j
                }
                else{
                    return [-1, -3]
                }
            }
        }
    }
    return [pos1, pos2]
}

const findCombination = (possibilities, length) => {    // Function by Xaridar ()
    const ptrs = Array(possibilities.length).fill(0);
    const target = Array(length)
        .fill(0)
        .map((_, i) => i);
    while (ptrs[0] < possibilities[0].length) {
        const arrs = [];
        for (let i = 0; i < possibilities.length; i++) {
            arrs.push(possibilities[i][ptrs[i]]);
        }
        if (flatEquals(target, ...arrs)) return arrs;
        ptrs[ptrs.length - 1]++;
        while (ptrs.some((el, i) => el >= possibilities[i].length)) {
            const toShift = ptrs
                .map((el, i) => ({ ptr: el, index: i }))
                .filter((el, i) => el.ptr >= possibilities[i].length)[0];
            if (toShift.index === 0) break;
            ptrs[toShift.index] = 0;
            ptrs[toShift.index - 1]++;
        }
    }
    return [];
};


// function findCombination(arrays, y) {
//     let validCombination = []
//     for (let i = 0; i < arrays.length; i++) {
//       for (let j = 0; j < arrays[i].length; j++) {
//         let combination = []
//         combination.push(arrays[i][j])
//         let isValid = true
//         for (let k = 0; k < combination.length; k++) {
//           for (let l = 0; l < combination[k].length; l++) {
//             if (combination[k][l] < 0 || combination[k][l] >= y) {
//               isValid = false;
//               break;
//             }
//           }
//           // check for unique numbers
//           let uniqueNumbers = new Set(combination[k])
//           if (uniqueNumbers.size !== combination[k].length) {
//             isValid = false;
//             break;
//           }
//         }
//         if (isValid) {
//           validCombination.push(combination[0])
//           break
//         }
//       }
//     }
//     return validCombination.length === arrays.length ? validCombination : []
// }


function findPaths(pos1, pos2) {
    let paths = [];
    const [row1, col1] = toXY(pos1);
    const [row2, col2] = toXY(pos2);
    
    function dfs(row, col, path) {
      if (row < 0 || row >= height || col < 0 || col >= width || path.includes(row*width + col) || table[row][col] != "_") {
        if(row*height + col == pos1 && path.includes(row*height + col)) {
            return
        }
        if(!(row*height + col == pos2 || row*height + col == pos1)){
            return
        }
      }
      path.push(row*width + col);
      
      if (row === row2 && col === col2 && path.length != 2) {
        for(const i of paths) {
            if(i.length == path.length){
                if(flatEquals(i, path)){
                    return
                }
            }
        }
        paths.push(path);
      } else {
        dfs(row - 1, col, [...path]);
        dfs(row + 1, col, [...path]);
        dfs(row, col - 1, [...path]);
        dfs(row, col + 1, [...path]);
      }
    }
    
    dfs(row1, col1, []);
    return paths;
}

function isAvailable(pos) {
    if(table[Math.floor(pos/height)][pos % height] == "_"){
        return true;
    }
    return false
}

function toXY(pos) {
    return [Math.floor(pos/height), pos % height];
}

function checkColor(color) {
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            if(table[i][j] == color){
                return
            } 
        }
    }
    usedColors = usedColors.filter(col => col != color)
}