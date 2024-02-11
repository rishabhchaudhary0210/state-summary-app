export const stateLoc = [
    { state: 'Andaman & Nicobar Islands', latitude: 11.7401, longitude: 92.6586 },
    { state: 'Andhra Pradesh', latitude: 15.9129, longitude: 79.74 },
    { state: 'Arunachal Pradesh', latitude: 28.2180, longitude: 94.7278 },
    { state: 'Assam', latitude: 26.2006, longitude: 92.9376 },
    { state: 'Bihar', latitude: 25.0961, longitude: 85.3131 },
    { state: 'Chandigarh', latitude: 30.7333, longitude: 76.7794 },
    { state: 'Chhattisgarh', latitude: 21.2787, longitude: 81.8661 },
    { state: 'Dadra & Nagar Haveli', latitude: 20.1809, longitude: 73.0169 },
    { state: 'Daman & Diu', latitude: 20.4283, longitude: 72.8397 },
    { state: 'Delhi', latitude: 28.7041, longitude: 77.1025 },
    { state: 'Goa', latitude: 15.2993, longitude: 74.1240 },
    { state: 'Gujarat', latitude: 22.2587, longitude: 71.1924 },
    { state: 'Haryana', latitude: 29.0588, longitude: 76.0856 },
    { state: 'Himachal Pradesh', latitude: 31.1048, longitude: 77.1734 },
    { state: 'Jammu & Kashmir', latitude: 33.7782, longitude: 76.5762 },
    { state: 'Jharkhand', latitude: 23.6102, longitude: 85.2799 },
    { state: 'Karnataka', latitude: 15.3173, longitude: 75.7139 },
    { state: 'Kerala', latitude: 10.8505, longitude: 76.2711 },
    { state: 'Lakshadweep', latitude: 10.5667, longitude: 72.6417 },
    { state: 'Madhya Pradesh', latitude: 22.9734, longitude: 78.6569 },
    { state: 'Maharashtra', latitude: 19.7515, longitude: 75.7139 },
    { state: 'Manipur', latitude: 24.6637, longitude: 93.9063 },
    { state: 'Meghalaya', latitude: 25.4670, longitude: 91.3662 },
    { state: 'Mizoram', latitude: 23.1645, longitude: 92.9376 },
    { state: 'Nagaland', latitude: 26.1584, longitude: 94.5624 },
    { state: 'Odisha', latitude: 20.9517, longitude: 85.0985 },
    { state: 'Puducherry', latitude: 11.9416, longitude: 79.8083 },
    { state: 'Punjab', latitude: 31.1471, longitude: 75.3412 },
    { state: 'Rajasthan', latitude: 27.0238, longitude: 74.2179 },
    { state: 'Sikkim', latitude: 27.5330, longitude: 88.5122 },
    { state: 'Tamil Nadu', latitude: 11.1271, longitude: 78.6569 },
    { state: 'Tripura', latitude: 23.9408, longitude: 91.9882 },
    { state: 'Uttar Pradesh', latitude: 26.8467, longitude: 80.9462 },
    { state: 'Uttarakhand', latitude: 30.0668, longitude: 79.0193 },
    { state: 'West Bengal', latitude: 22.9868, longitude: 87.8550 },
]
export const mockData = [
    { state: 'Andaman & Nicobar Islands', temperature: 30, scaledTemp: 3 },
    { state: 'Andhra Pradesh', temperature: 35, scaledTemp: 4 },
    { state: 'Arunachal Pradesh', temperature: 25, scaledTemp: 2 },
    { state: 'Assam', temperature: 28, scaledTemp: 3 },
    { state: 'Bihar', temperature: 32, scaledTemp: 4 },
    { state: 'Chandigarh', temperature: 20, scaledTemp: 2 },
    { state: 'Chhattisgarh', temperature: 30, scaledTemp: 3 },
    { state: 'Dadra & Nagar Haveli', temperature: 27, scaledTemp: 3 },
    { state: 'Daman & Diu', temperature: 28, scaledTemp: 3 },
    { state: 'Delhi', temperature: 22, scaledTemp: 2 },
    { state: 'Goa', temperature: 29, scaledTemp: 3 },
    { state: 'Gujarat', temperature: 32, scaledTemp: 4 },
    { state: 'Haryana', temperature: 25, scaledTemp: 2 },
    { state: 'Himachal Pradesh', temperature: 20, scaledTemp: 2 },
    { state: 'Jammu & Kashmir', temperature: 15, scaledTemp: 1 },
    { state: 'Jharkhand', temperature: 28, scaledTemp: 3 },
    { state: 'Karnataka', temperature: 30, scaledTemp: 3 },
    { state: 'Kerala', temperature: 28, scaledTemp: 3 },
    { state: 'Lakshadweep', temperature: 30, scaledTemp: 3 },
    { state: 'Madhya Pradesh', temperature: 35, scaledTemp: 4 },
    { state: 'Maharashtra', temperature: 33, scaledTemp: 4 },
    { state: 'Manipur', temperature: 22, scaledTemp: 2 },
    { state: 'Meghalaya', temperature: 25, scaledTemp: 2 },
    { state: 'Mizoram', temperature: 20, scaledTemp: 2 },
    { state: 'Nagaland', temperature: 23, scaledTemp: 2 },
    { state: 'Odisha', temperature: 28, scaledTemp: 3 },
    { state: 'Puducherry', temperature: 32, scaledTemp: 4 },
    { state: 'Punjab', temperature: 20, scaledTemp: 2 },
    { state: 'Rajasthan', temperature: 35, scaledTemp: 4 },
    { state: 'Sikkim', temperature: 18, scaledTemp: 2 },
    { state: 'Tamil Nadu', temperature: 32, scaledTemp: 4 },
    { state: 'Tripura', temperature: 25, scaledTemp: 2 },
    { state: 'Uttar Pradesh', temperature: 30, scaledTemp: 3 },
    { state: 'Uttarakhand', temperature: 20, scaledTemp: 2 },
    { state: 'West Bengal', temperature: 28, scaledTemp: 3 },
    { state: 'ALL INDIA', temperature: 30, scaledTemp: 3 }
  ];
export const getTempData = ()=>{
    var result = [];
    try{
        stateLoc.forEach(async (ele) => {

            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${ele.latitude}&longitude=${ele.longitude}&current=temperature_2m`);
            const data = await response.json();

            const obj = {
                state: ele.state,
                temperature: data.current.temperature_2m,
                scaledTemp: Number(data.current.temperature_2m)*5,
            }
            result.push(obj);  
        })
        return result;
    }   
    catch(err){
        console.log(err);
        return mockData;
    }
}