
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
   .then(res=>res.json())
   .then(data=> renderMealInfo(data.meals[0]))
    // console.log(data);
    //     // const ingredients =data.meals[0].strIngredient;
    //     // const ingredientsDetail =data.meals[0].strDescription;
 
    
    }
    
const renderMealInfo=Ingredient=>{
    console.log(Ingredient);
   const mealDiv=document.getElementById('meal_detail');
   mealDiv.innerHTML=`${Ingredient.strIngredient}`


}