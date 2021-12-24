const submitbtn = document.getElementById('submitBtn');

const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');

const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
        event.preventDefault();
        let cityVal = cityName.value;

        
        if (cityVal == "") {
                city_name.innerText = 'Plz enter the City name before search';
                datahide.classList.add('data_hide');
        }
        else {
                try {
                        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=12f4674093e9ac53e33f5284cbcd2f64`;
                        const response = await fetch(url);
                        const data = await response.json();
                        const arrData= [data];
                        console.log(arrData);
                        city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
                  
                        temp_real_val.innerText= arrData[0].main.temp;
                     // temp_status.innerText=arrData[0].weather[0].main;

                        const temp_mod = arrData[0].weather[0].main;
                        
                      
                        //conditions for weather icon
                        if(temp_mod =="clear")
                        {
                                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>"
                        }
                        else if(temp_mod =="Clouds")
                        {
                                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:skyblue'></i>"
                        }
                        else if(temp_mod =="Rain")
                        {
                                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>"
                        }
                        else
                        {
                                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>"
                        }

                        datahide.classList.remove('data_hide');

                        
                }
                catch {
                        city_name.innerText = 'Enter Valid city';
                        datahide.classList.add('data_hide');
                }
        }
}
submitbtn.addEventListener('click', getInfo);

