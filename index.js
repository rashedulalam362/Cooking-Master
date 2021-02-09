
document.getElementById('btn_search').addEventListener('click',()=>{
    document.getElementById('search_result').innerHTML='';
    const inputValue=document.getElementById("search_input").value;
   
    
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        // fetchData=data;
     for (let i = 0; i < data.meals.length; i++) {
       const meal = data.meals[i];
    
      
       const mealImage=data.meals[i].strMealThumb;
       
       const mealName=data.meals[i].strMeal;
      
       document.getElementById('search_result').innerHTML +=` meaLImage: <img src=${mealImage}>
        
       mealName:${mealName}
       
       <button onclick="getDetail('${data.meals[i].strMealThumb}','${data.meals[i].strMeal}')" class="btn btn-success">Get Detail</button>
       
     
        `
    
     }
  
   
  
   
    
    })
    
   
    
    })
  


    const  getDetail=(mealImage,mealName)=>{

   const url=`https://www.themealdb.com/api/json/v1/1/list.php?i=${mealImage}${mealName}`
   fetch(url)
   .then(data=>{
    console.log(data);
    
 for (let i = 0; i < data.meals[i].length; i++) {
   const meal = data.meals[i];

  
   const mealImage=data.meals[i].strMealThumb;
   
   const mealName=data.meals[i].strMeal;
  
   document.getElementById('search_result').innerHTML +=` meaLImage: <img src=${mealImage}>
    
   mealName:${mealName}
   
   
 
    `

 }





})
    
    }
    
// const renderMealInfo=strIngredient=>{
//     console.log(strIngredient);
// const mealDiv=document.getElementById("mealDetail")
// // mealDiv.innerHTML=``


// }