function myFunction1() {
    document.getElementById("rightpanel1").style.display ='flex';
    document.getElementById("rightpanel2").style.display = "none";
    document.getElementById("rightpanel3").style.display = "none";
    
}
function myFunction2() {
    document.getElementById("rightpanel1").style.display = "none";
    document.getElementById("rightpanel2").style.display = "block";
    document.getElementById("rightpanel3").style.display = "none";
}
function myFunction3() {
    document.getElementById("rightpanel1").style.display = "none";
    document.getElementById("rightpanel2").style.display = "none";
    document.getElementById("rightpanel3").style.display ='block';
    
}
let ourBase = {
    "091223":{
        "dishes":{
            "1":{
                "name": "fish1",
                "ing":"mooka flover opopo",
                "op":'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed culpa distinctio rerum voluptates ipsam, quas, dolor illum minima unde tempore ab fuga animi. Error natus unde incidunt nostrum placeat expedita?Quaerat veniam delectus natus a accusantium rerum aliquam, quos corrupti nihil fugit quidem, distinctio libero harum exercitationem impedit beatae unde quas iste, veritatis rem. Nisi accusantium iusto consequuntur iste ipsam?Ipsam vel nam consequatur excepturi necessitatibus, totam earum ullam, laborum, maxime molestias aspernatur culpa. Quibusdam, ducimus! Quasi, animi! Laudantium incidunt fuga unde ipsam quaerat nisi similique veniam totam alias animi?'
            },
            "2":{
                "name": "fish2",
                "ing":"mooka flover opopo",
                "op":"asldkjalsjdalsdjalksjdaksdjladjlskdjksjdld"
            },
            "3":{
                "name": "fish3",
                "ing":"mooka flover opopo",
                "op":"asldkjalsjdalsdjalksjdaksdjladjlskdjksjdld"
            }
        },
        name: "trofim",
        favoritedishes: ['5','8','9']
    },
    "091224":{
        "dishes":{
            "4":{
                "name": "fish7",
                "ing":"mooka flover opopo",
                "op":"asldkjalsjdalsdjalksjdaksdjladjlskdjksjdld"
            }
        }
    },
    "0912":{
        "dishes":{
           
            "5":{
                "name": "fish8",
                "ing":"mooka flover opopo",
                "op":"asldkjalsjdalsdjalksjdaksdjladjlskdjksjdld"
            }
        }
    },
    "0912939393":{
        "dishes":{
            "6":{
                "name": "fish5",
                "ing":"mooka flover opopo",
                "op":"asldkjalsjdalsdjalksjdaksdjladjlskdjksjdld"
            },
            "7":{
                "name": "fish3",
                "ing":"mooka flover opopo",
                "op":"asldkjalsjdalsdjalksjdaksdjladjlskdjksjdld"
            },
            "8":{
                "name": "fish8",
                "ing":"mooka flover opopo",
                "op":"asldkjalsjdalsdjalksjdaksdjladjlskdjksjdld"
            },
            "9":{
                "name": "fishiiii8",
                "ing":"mooka floveseerr opopo",
                "op":"asldkjalsjdalersdjalksjdaksdjladjlskdjksjdld"
            }
        }
    }
  }
let a = ourBase["091223"].name;
a.split('')
if(a.length > 30){
  ourBase["091223"].name = ourBase["091223"].name.slice(0, 30)
}
document.querySelector('.one3').innerHTML = ourBase['091223'].name;
let rec = Object.keys(ourBase['091223'].dishes);
if(rec.length > 0){
  rec.forEach((el,i) => {
    document.querySelector('.blydo').insertAdjacentHTML('beforeend',`
            <div class="rec">
              <div class="name">${ourBase['091223'].dishes[el].name}</div>
              <div class="delete" onclick = "deleteFn(${i})"></div>
            </div>
           `)
  })
}
let hum = Object.keys(ourBase);
hum.forEach(el => {
  let r = Object.keys(ourBase[el].dishes)
  r.forEach(ell => {
    ourBase['091223'].favoritedishes.forEach(e => {
      if(e == ell){
        document.querySelector('.blydo1').insertAdjacentHTML('beforeend',`
            <div class="rec1">
              <div class="name">${ourBase[el].dishes[ell].name}</div>
              
            </div>
           `)
      }
    })
  })
})

let recArr =  document.querySelectorAll('.rec');
let deleteFn = (a) =>{

  document.getElementById("asas").style.display ='flex'
  let del = () =>{
    let base = Object.keys(ourBase['091223'].dishes)
  delete ourBase['091223'].dishes[base[a]];
  recArr[a].remove();
  document.getElementById("asas").style.display ='none';
  }
  document.getElementById("yes").addEventListener('click',del) 
  document.getElementById("no").addEventListener('click',()=>{
  document.getElementById("asas").style.display ='none';
  document.getElementById("yes").removeEventListener('click',del) 
    }) 
}