AFRAME.registerComponent("comic", {
    init: function () {
      this.placesContainer = this.el;
      this.createComics()
    },
  
    createComics: function () {
      const thumbNailsRef = [
        {
          id: "comic1",
          title: "comic1",
          url: "./assets/thumbnails/comic1.jpg",
        },
        {
          id: "comic2",
          title: "comic2",
          url: "./assets/thumbnails/comic2.jpg",
        },
  
        {
          id: "comic3",
          title: "comic3",
          url: "./assets/thumbnails/comic3.jpg",
        },
        {
          id: "comic4",
          title: "comic4",
          url: "./assets/thumbnails/comic4.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const boxEl=this.createBox(position,item.id)
        
        // Thumbnail Element
       const thumbnail=this.createThumbnail(item)
       boxEl.appendChild(thumbnail)
        // Title Text Element
        const titleEL=this.createTitle(position,item)
        boxEl.appendChild(titleEL)
        this.placesContainer.appendChild(boxEl);
      }
    },
    createBox: function(position,id)
    {
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("id",id)
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{primitive:"plane",width:22,height:40})
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{color:"orange",opacity:1})
      return entityEl
    },
    createThumbnail: function(item)
    {
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{primitive:"plane",width:20,height:28})
      entityEl.setAttribute("material",{src:item.url})
      return entityEl
    },
    createTitle:function(position,item)
    {
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("text", { font: "exo2bold", align: "center", width: 70, color: "#e65100", value: item.title, });
      const elementposition=position
      elementposition.y=-20
      entityEl.setAttribute("position",elementposition)
      entityEl.setAttribute("visible",true)
      return entityEl
  
    }
  });
  