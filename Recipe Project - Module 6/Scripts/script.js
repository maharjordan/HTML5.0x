var nav_flag = false;
function display_menu(){
    if(!nav_flag){
        document.getElementById("nav_bar").style.display = "block";
        nav_flag = true;
    }
    else{
        document.getElementById("nav_bar").style.display = "none";
        nav_flag = false;
    }
}

function site_load(){
	document.getElementById("recipe_title").style.display = "none";
	document.getElementById("cookbook_description").style.display = "none";
	document.getElementById("original_recipe").style.display = "none";
	document.getElementById("ingredient_list").style.display = "none";
	document.getElementById("preperation_description").style.display = "none";
	
}

function load_recipe(recipe_name){
	document.getElementById("recipe_title").style.display = "block";
	document.getElementById("cookbook_description").style.display = "block";
	document.getElementById("original_recipe").style.display = "block";
	document.getElementById("ingredient_list").style.display = "block";
	document.getElementById("preperation_description").style.display = "block";
	document.getElementById("website_info").style.display = "none";
	

	document.getElementById("main_title").innerText = recipes[recipe_name].title;
	document.getElementById("img_source").src = recipes[recipe_name].imag;
	document.getElementById("orig_cookbook_details").innerText = recipes[recipe_name].cb_desc;
	document.getElementById("orig_recipe_description").innerText = recipes[recipe_name].or_recipe;
	
	var table_string = "<tr><th>Quantity</th><th>Ingredient</th></tr>";
	for(var i in recipes[recipe_name].ingredients){
		table_string = table_string + 
			"<tr><td>" + 
			recipes[recipe_name].ingredients[i][0] +
			"</td><td>" +
			recipes[recipe_name].ingredients[i][1] +
			"</td></tr>";
	}
	document.getElementById("ingredients_table").innerHTML = table_string;
	
	var prep_string = "";
	for(var i in recipes[recipe_name].preperation){
		prep_string = prep_string + "<li>" + recipes[recipe_name].preperation[i] + "</li>"; 
	}
	document.getElementById("prep_steps").innerHTML = prep_string;
	

}

document.getElementById("game_pie").addEventListener('click', 
	function(){
		load_recipe("game_pie"); 
	}
);

document.getElementById("yeast").addEventListener('click', 
	function(){
		load_recipe("yeast"); 
	}
);

document.getElementById("beef_steak_pie").addEventListener('click', 
	function(){
		load_recipe("beef_steak_pie"); 
	}
);