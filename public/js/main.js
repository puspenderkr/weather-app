const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(e) => {
    e.preventDefault();

    let cityVal  = cityName.value;
    
    if(cityVal === ""){
        city_name.innerText = "Please enter the name of city.";
        datahide.classList.add('data_hide');
    }
    else{
        try{

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a16b6eae3525420f8a894f7845aad06f`;
           const response = await fetch(url);
           const data = await response.json();
           const arrData = [data];

           city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
           temp_real_val.innerText = arrData[0].main.temp;
           temp_status.innerText = arrData[0].weather[0].main;

           const tempmood = arrData[0].weather[0].main

           if(tempmood == "Sunny"){
            temp_status.innerHTML = "<i class = 'fa fa-sun' style = 'color: #eccc68;'> </i> "
        }
        else if(tempmood == "Clouds"){
            temp_status.innerHTML = "<i class = 'fa fa-cloud' style = 'color: #f1f2f6;'> </i> "
        }
        else if(tempmood == "Rainy"){
            temp_status.innerHTML = "<i class = 'fa fa-sun' style = 'color: #a4b0be;'> </i> "
        }
        else {
            temp_status.innerHTML = "<i class = 'fa fa-sun' style = 'color: yellow;'> </i> "
        }
  
        datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText = "Please enter the city name correctly."
            datahide.classList.add('data_hide');
        }

    }
}

submitBtn.addEventListener('click', getInfo)