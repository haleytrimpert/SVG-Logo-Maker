function generateLogo(data) {
    if (data.shape === "circle") {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill= "${data.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill= "${data.textColor}"> ${data.text} </text>

</svg>
    `
    }else if (data.shape === "triangle") {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
      <polygon points=""200,10 100,200 300,200" fill= "${data.shapeColor}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill= "${data.textColor}"> ${data.text} </text>
    
    </svg>
        ` 
    } else if(data.shape === "square") {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
      <rect x="100" y="50" width="150" height= "150" fill= "${data.shapeColor}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill= "${data.textColor}"> ${data.text} </text>
    
    </svg>
        ` 
    }
}

module.exports = generateLogo;