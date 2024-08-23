
// let enterurl = 'https%3A%2F%2Frapidapi.com%2Fmarketplace'
let loader = document.querySelector('.loader') 

function getValue(){
    let inputvalue = document.getElementById('inputvalue');
    return inputvalue.value       
}




async function featchdata() {
    loader.style.display = 'inline-block'
    let enterurl = getValue()
    const url = `https://screenshot-url-to-image.p.rapidapi.com/screenshot?url=${encodeURIComponent(enterurl)}&width=1920&height=1080&fullscreen=true`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ab7c50179dmsh2f52b7754163372p121ca8jsn0bbdf3356bf9',
            'x-rapidapi-host': 'screenshot-url-to-image.p.rapidapi.com'
        }
    };
    
   
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.screenshotUrl);
       

        if(result.screenshotUrl === undefined){
            loader.textContent = 'Enetr a valid url Or Link';
        }else{
            setTimeout(() => {
                loader.textContent = ''
            }, 1000);
            let imgadded = document.getElementById('imgadded')
            imgadded.src = result.screenshotUrl 
            let downloadLink = document.getElementById('downloadLink');
            downloadLink.href = result.screenshotUrl;
            downloadLink.style.display = 'inline-block';
            downloadLink.textContent = 'Download Screenshot';
        }
        


    } catch (error){
        console.error(error);
        loader.textContent = 'Enetr a valid url Or Link'
    } 
   
}




