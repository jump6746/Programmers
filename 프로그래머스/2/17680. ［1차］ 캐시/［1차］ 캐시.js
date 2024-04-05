function solution(cacheSize, cities) {
    
    const cache = [];
    let runTime = 0;
    
    cities.forEach((city) => {
         if(checkCache(cache, city)){
             runTime = cacheHit(cache, city, runTime);
         }else{
             runTime = cacheMiss(cacheSize, cache, city, runTime);
         }
    })
    return runTime;
}

function checkCache(cache, city){
    const cityName = city.toLowerCase();
    
    return cache.includes(cityName);
}

function cacheHit(cache, city, runTime){
    const cityName = city.toLowerCase();    
    const cityIndex = cache.indexOf(cityName);
    cache.splice(cityIndex, 1);
    cache.push(cityName);
    
    runTime++;
    
    return runTime;    
}

function cacheMiss(cacheSize, cache, city, runTime){
    const cityName = city.toLowerCase();
    if(cacheSize === 0){
        runTime += 5;
        return runTime;
    }
    
    if(cache.length < cacheSize){
        cache.push(cityName);
        runTime += 5;
    }else{
        cache.shift();
        cache.push(cityName);
        runTime += 5;
    }
    
    return runTime;
}

