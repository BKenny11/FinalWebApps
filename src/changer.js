function changer(){

	document.querySelector("#Content").innerHTML = "";

	var line = "";
	var bigString = "";
	var option = document.getElementById('select1').value;
	
	if (option == "Bills"){
		line += "<form id=\"payForm\" name=\"payForm\" action=\"\/details\" method=\"POST\" class=\"payForm\">";
		line += "  <input id=\"payItem\" type=\"hidden\" name=\"name\" value=\"Paid Bills\"\/>";
		line += "  <div><\/div>";
		line += "  <label for=\"type\">Pay Bills: <\/label>";
		line += "  <input id=\"typeItem\" type=\"hidden\" name=\"type\" value=\"-\"\/>";
		line += "  <div><\/div>";
		line += "  <input id=\"priceItem\" type=\"text\" name=\"price\"\/><a id=\"paymentsFormSubmit\"  class=\"paymentsFormSubmit\">Create Item<\/a>";
		line += "<\/form>";
		bigString += line;
		console.log(bigString);
	}else
	if (option == "Cash"){
		line += "<form id=\"payForm\" name=\"payForm\" action=\"\/details\" method=\"POST\" class=\"payForm\">";
		line += "  <input id=\"payItem\" type=\"hidden\" name=\"name\" value=\"Cash Deposit\"\/>";
		line += "  <div><\/div>";
		line += "  <label for=\"type\">Cash Deposit: <\/label>";
		line += "  <input id=\"typeItem\" type=\"hidden\" name=\"type\" value=\"+\"\/>";
		line += "  <div><\/div>";
		line += "  <input id=\"priceItem\" type=\"text\" name=\"price\"\/><a id=\"paymentsFormSubmit\"  class=\"paymentsFormSubmit\">Create Item<\/a>";
		line += "<\/form>";
		bigString += line;
		console.log(bigString);
	}else
	if (option == "Purchase"){
		line += "<form id=\"payForm\" name=\"payForm\" action=\"\/details\" method=\"POST\" class=\"payForm\">";
		line += "  <input id=\"payItem\" type=\"hidden\" name=\"name\" value=\"Purchased Groceries\"\/>";
		line += "  <div><\/div>";
		line += "  <label for=\"type\">Purchased Groceries: <\/label>";
		line += "  <input id=\"typeItem\" type=\"hidden\" name=\"type\" value=\"-\"\/>";
		line += "  <div><\/div>";
		line += "  <input id=\"priceItem\" type=\"text\" name=\"price\"\/><a id=\"paymentsFormSubmit\" class=\"paymentsFormSubmit\">Create Item<\/a>";
		line += "<\/form>";
		bigString += line;
		console.log("Purchase");
	}else
	if (option == "Income"){
		line += "<form id=\"payForm\" name=\"payForm\" action=\"\/details\" method=\"POST\" class=\"payForm\">";
		line += "  <input id=\"payItem\" type=\"hidden\" name=\"name\" value=\"Pay Day\"\/>";
		line += "  <div><\/div>";
		line += "  <label for=\"type\">Pay Day: <\/label>";
		line += "  <input id=\"typeItem\" type=\"hidden\" name=\"type\" value=\"+\"\/>";
		line += "  <div><\/div>";
		line += "  <input id=\"priceItem\" type=\"text\" name=\"price\"\/><a id=\"paymentsFormSubmit\" class=\"paymentsFormSubmit\">Create Item<\/a>";
		line += "<\/form>";
		bigString += line;
		console.log("Income");
	}
	document.querySelector("#Content").innerHTML = bigString;
}

document.write("<select id=\"select1\" name=\"select1\" onchange=\"changer()\">");
document.write("  <option value=\"Bills\">Pay Bills<\/option>");
document.write("  <option value=\"Cash\" selected=\"selected\">Received Cash<\/option>");
document.write("  <option value=\"Purchase\">Purchased Groceries<\/option>");
document.write("  <option value=\"Income\">Pay Day<\/option>");
document.write("<\/select>");