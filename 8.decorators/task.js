function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
        const hash = md5(args); 
        let objectInCache = cache.find((item) => item.hash === hash); 
            if (objectInCache) { 
                console.log("Из кэша: " + objectInCache.result); 
                    return "Из кэша: " + objectInCache.result;
        }
        let result = func(...args); 
            cache.push({hash, result}) ; 
                 if (cache.length > 5) { 
          cache.shift() 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
    }


function debounceDecoratorNew(func, delay) {
  let timeOut = null;
  function wrapper(...args) {
    wrapper.allCount += 1;
         if(timeOut){
              clearInterval(timeOut);
    }
    if (timeOut === null) {
          wrapper.count += 1;
             func(...args);
    }
    timeOut = setTimeout(() => {
         wrapper.count += 1;
            func(...args);
    },     delay);
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
