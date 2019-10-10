"use strict";
document.addEventListener('DOMContentLoaded',()=>{
    let background = document.getElementById('background');
    var getHeight = window.innerHeight;
    background.innerHTML = `<style>
        html,
        body {
            margin: 0px; 
            background-color: #0e0e0e;
        }
         img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            height: ${getHeight}px;
        }
    </style>`;
    const json = chrome.runtime.getURL('/config.json');
    function inspectImage(arr){
        let countImage = arr.length;
        let randomCountImage = parseInt(Math.random()*countImage);
        let image =  document.createElement('img');
            image.src = arr[randomCountImage];
            background.append(image);
    }
    var contents = fetch(json);
        contents.then(response=>{
            response.json().then(res=>{
                getURIImgage(res.url);
            });
        });
    function getURIImgage(url){
        async function contentsURI(){
            let resultContentsURI = await fetch(url);
            return resultContentsURI;
        }
        let data = contentsURI()
        .then(res=>{
            if(res.status === 200){
                res.text().then(ress=>{
                    let arrayURIImage = ress.split('\n');
                    inspectImage(arrayURIImage);  
                });
            }else{
                console.log("Lỗi URL!!!");
            }
        })
        .catch(err=>{
            console.log(err);
        }) 
    }
}, true);