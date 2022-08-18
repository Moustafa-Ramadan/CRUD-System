var productNameInput=document.getElementById("productNameInput");
var productPriceInput=document.getElementById("productPriceInput");
var productCategoryInput=document.getElementById("productCategoryInput");
var productDescriptionInput=document.getElementById("productDescriptionInput");
var tableBody =document.getElementById("tableBody");
var productContainer ;
let currentIndexUpdate ;
var addBtn=document.getElementById("addBtn");
var editBtn=document.getElementById("editBtn");
var updtedbtn=document.getElementById("updtedbtn")

if(localStorage.getItem("myProducts") == null)
{
    productContainer=[];
}
else
{
    productContainer= JSON.parse (localStorage.getItem("myProducts"));
    displayProduct(productContainer);
};

function AddProduct()
{
    if(validateProductName() == true)
    {
        var product={
            name:productNameInput.value,
            price:productPriceInput.value,
            cate:productCategoryInput.value,
            disc:productDescriptionInput.value
        }
        productContainer.push(product);
        localStorage.setItem("myProducts",JSON.stringify(productContainer));
        
            clearForm();
            displayProduct(productContainer);
    }
    else
    {
        alert("UnvalidproductName")
    }
    

};

function clearForm()
{
    productNameInput.value = "" ,
    productPriceInput.value = "" ,
    productCategoryInput.value = "" ,
    productDescriptionInput.value = ""
};

function displayProduct(list)
{
    var productlist = ``; 
    for(var i = 0; i < list.length ; i++)
    {
        productlist += `<tr>
        <td>${i}</td>
        <td>${list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].cate}</td>
        <td>${list[i].disc}</td>
        <td><i onclick="setFormForUpdete(${i}) " id='updtedbtn' class="btn  fas fa-edit btnedit alert-dismissible  text-success"> </i></td>
       
        <td><i onclick="deleteProducts(${i}) "  class="  btn  fas fa-trash-alt btndelete text-danger "> </i> </td>
       


        

    </tr>`;     
    }
    tableBody.innerHTML=productlist;
};




function searchProduct(searchTerm)
{
    var searchResult=[];
    for(var i=0 ; i< productContainer.length ; i++)
    {
        if(productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true)
        {
            searchResult.push(productContainer[i])
           
        }
        }
        displayProduct(searchResult);
        console.log(searchResult);
}


function validateProductName()
{
 var regex=/^[A-Z]?[a-z]{3,8}[0-9]+$/;
 if(regex.test(productNameInput.value) == true)
 {
     return true;
 }   
 else
 {
     return false;
 }
}


function deleteProducts(indexProduct)
{
productContainer.splice(indexProduct,1);
localStorage.setItem("myProducts",JSON.stringify(productContainer));
displayProduct(productContainer);
}

function setFormForUpdete(updetedIndex)
{
    productNameInput.value =productContainer[updetedIndex].name ,
    productPriceInput.value = productContainer[updetedIndex].price ,
    productCategoryInput.value =productContainer[updetedIndex].cate ,
    productDescriptionInput.value = productContainer[updetedIndex].disc,
   currentIndexUpdate=updetedIndex;

    addBtn.classList.add("d-none")
    editBtn.classList.replace("d-none","d-inline-block");

};


function updetedProducts()
{
    productNameInput.value =productContainer[currentIndexUpdate].name ,
    productPriceInput.value = productContainer[currentIndexUpdate].price ,
    productCategoryInput.value =productContainer[currentIndexUpdate].cate ,
    productDescriptionInput.value = productContainer[currentIndexUpdate].disc,
    
    clearForm();
    localStorage.setItem("myProducts",JSON.stringify(productContainer));
    displayProduct(productContainer);

    // productContainer[updetedIndex].splice(0,1,productNameInput.value)
    // localStorage.setItem("myProducts",JSON.stringify(productContainer));
    // displayProduct(productContainer);
};

function updetedProducts(addUpdateIndex)
{
    let  product =
    {
        name: productNameInput.value ,
       price:productPriceInput.value,
       cate:productCategoryInput.value,
       disc: productDescriptionInput.value
    }
  
    productContainer.splice(addUpdateIndex , 1 ,  product);
    localStorage.setItem('myProducts', JSON.stringify(productContainer));
  
    editBtn.classList.add("d-none")
    addBtn.classList.replace("d-none","d-inline-block");
    
    clearForm();
    displayProduct(productContainer);
}
// Get Update Info
// function getUpdateInfo(index) {
//     btnAddProduct.classList.add("d-none");
//     btnUpdateProduct.classList.remove("d-none");
//     curentIndexUpdate = index;
//     let productsValue = Object.values(products[index]);
//     inputs.forEach((input, indexInput) => {
//        input.value = productsValue[indexInput];
//     });
//  }
//  // Update Row
//  function updateRow() {
//     let product = {
//        name: productInputName.value,
//        price: productInputPrice.value,
//        category: productInputCategory.value,
//        descrip: productInputDes.value,
//     };
//     if (!inputs.find((input) => input.classList.contains("is-invalid"))) {
//        products[curentIndexUpdate] = product;
//        displayProducts(true);
//        setStorage();
//        resetForm();
//        Swal.fire("Updated!", "Success", "success");
//        btnAddProduct.classList.remove("d-none");
//        btnUpdateProduct.classList.add("d-none");
//     }
//  }
// function updateItem(indexUpdate)
// {
//     clientNameInput.value = clientsContainer[indexUpdate].name;
//     clientAuthorizationInput.value = clientsContainer[indexUpdate].authorization;
//     issueNumberInput.value = clientsContainer[indexUpdate].issueNumber;
//     courtNameInput.value = clientsContainer[indexUpdate].courtName;
//     issueTypeInput.value = clientsContainer[indexUpdate].issueType;
//     clientPhoneInput.value = clientsContainer[indexUpdate].Phone;
//     clientDescInput.value = clientsContainer[indexUpdate].desc;

//     updateBtn.classList.replace('d-none', 'inline-block');
//     addBtn.classList.replace('d-inline-block', 'd-none');

//     updateBtn.value=indexUpdate
// }

