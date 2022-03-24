var myArray = []
	

	$.ajax({
		method:'GET',
		url:'http://172.16.3.15:8080/findall',
		success:function(response){
			myArray = response
			buildTable(myArray)
			console.log(myArray)
		}
	})



	function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
            var colid = `id-${i}`
                    var colnum = `accountnumber-${i}`
                    var colname = `name-${i}`
                    var coladd = `adddress-${i}`
                    var colbal = `balance-${i}`
                    var colemail = `email-${i}`
                    
                    var collink = `linkAccount-${i}`
                    var colphone = `phonenumber-${i}`
                    var row = `<tr>
                                    <td>${data[i].id}</td>
                                    <td>${data[i].accountnumber}</td>
                                    <td>${data[i].name}</td>
                                    <td>${data[i].address}</td>
                                    <td>${data[i].balance}</td>
                                    <td>${data[i].email}</td>
                
                                    <td>${data[i].linkAccount}</td>
                                    <td>${data[i].phonenumber}</td>
                            </tr>`
                    table.innerHTML += row
		}
	}



	function info(){
		let Aname= document.getElementById("Aname").value;
		let Aemail=document.getElementById("Aemail").value;
		 let Aaddress= document.getElementById("Aaddress").value;
		 let Aphone= document.getElementById("Aphone").value;
		 if(Aname=="" || Aemail=="" ||Aphone=="" || Aaddress==""){
		  alert("Please enter all the fields");         
		  return;
		 }
		 
		 var data={name:Aname,phonenumber:Aphone,address:Aaddress,email:Aemail};
		 
		 fetch('http://172.16.3.15:8080/createaccount', {
			method: 'POST', // or 'PUT'
			headers: {
			   'Content-Type': 'application/json',
		   },
		   body: JSON.stringify(data),
		   }).then(res=>res.json()).then(res=>{
			  if(res.reply){
			  alert("registration complete");         
			  location.href="home.html";
			  return;
			  }
			  if(res.msg){
				 alert(res.msg);
				 return;
			  }
		   }).catch(err=>{console.log("error aayo guys"+err)});

		  

	 }

	 function info0(){
		let Aname= document.getElementById("Aname").value;
		let Anumber=document.getElementById("Anumber").value;
		 let Amount= document.getElementById("Amount").value;
		 if(Aname=="" || Anumber=="" ||Amount==""){
		  alert("Please enter all the fields");         
		  return;
		 }
		 var data={name:Aname,accountnumber:Anumber,balance:Amount};
		 fetch('http://172.16.3.15:8080/depositemoney', {
			  method: 'POST', // or 'PUT'
			  headers: {
				 'Content-Type': 'application/json',
			 },
			 body: JSON.stringify(data),
			 }).then(res=>res.json()).then(res=>{
				if(res.reply){
				alert(res.reply);         
				location.href="home.html";
				return;
				}
				if(res.msg){
				   alert(res.msg);
				   return;
				}
			 }).catch(err=>{console.log("error aayo guys"+err)});
		   
	 }

	 function infoL(){
		// let Aname= document.getElementById("Aname").value;
		let accountnumber=document.getElementById("accountnumber").value;
		 let phonenumber= document.getElementById("phonenumber").value;
		 if(accountnumber=="" ||phonenumber==""){
		  alert("Please enter all the fields");         
		  return;
		 }
		 var data={accountnumber:accountnumber,phonenumber:phonenumber};
	   fetch('http://172.16.3.15:8080/linkaccountforbank', {
			method: 'POST', // or 'PUT'
			headers: {
			   'Content-Type': 'application/json',
		   },
		   body: JSON.stringify(data),
		   }).then(res=>res.json()).then(res=>{
			  if(res.reply){
			  alert("linked account number "+res.reply);         
			  location.href="home.html";
			  return;
			  }
			  if(res.msg){
				 alert(res.msg);
				 return;
			  }
		   }).catch(err=>{console.log("error aayo guys"+err)});
		 

	 }

	 function info1(){
		location.href = "registration.html";
		}
		function info2(){
		location.href = "deposit.html";
		}
		function info3(){
		location.href = "link.html";
		}
		function info4(){
		location.href = "table.html";
		}