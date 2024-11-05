ASP- ACTIVE SERVER PAGE

asp .net :- windows only
asp .net core :- supports all linux,windows and mac

Pages : contains the cshtml pages which has cs files containing controllers 

layout:default layout for all the pages


programs.cs :entry point for the program also contains middlewares




appsettings.json contains the app configurations



pages->index.cshtml,index.cs

cshtml:- Razor pages
just like scripplets @ is used to add the cs in the cshtml which is known as razor syntax
@() if there r multi line statements

cs: is used for providde the pagemodel which contains logics to be handled in that page
onGet()->handles the get requests
onPost()...


@page "Privacy/legals" it uses the custom routing which mean the url will be changed accordingly but the locaton will be the statements

razor syntax is used to write cs statements within cshtml inisde the{} block

asp tag helpers :  server side component used to render html elements in  razor pages more effectively

html helpers:c# statements used to render html elements dynamically
ex:
@Html.TextBox("Contact_No","",new{@class="contact",@placeholder="Enter your contact number"});
@Html.Label("Contact_No","Contact_No");


Annotations :

specified before the datatypes inside the [] 

Required : makes it non nullable and gives default error msg if the value is empty
emailaddress: validates the email adress
phone:to validate the valid phone 
string length : to specify the lengths of the string value 
comapre : used to compare two input fields 
regularexpression : used for match given pattern


db connection steps:
1.install ll the required properties
2.Create a database in the sql
3.modify the appsettings.json file with the proper connection strings 
4.create a entity class based on the table required and provide the properties withdatatype and annotations which resembles the column database
4.Create the dbcontext (once per project) and then specify the entity class object wrt dbset
once done just migrate the db changes using the Add-Migration Migration_name 
Update-Database will physically make changes  to the db specified 


Inserting values to the d:


Create a Application dbcontext that is definded in the dbcontext class
 
 private readonly AppDbContext _context;

 public RegisterModel(AppDbContext context)
 {
     _context = context;
 }

 create a pagemodel constructors set the context to the current dbcontext

 var newCus = new Customer
{
    Name = RegistredUser.Username,
    Email = RegistredUser.Email,
    Password = RegistredUser.Password,
    Age = RegistredUser.Age
}; 
_context.customers.Add(newCus);
_context.SaveChanges();


pass the values through the constructors to the entity class and pass the reference to the add method using the current dbcontext object and also the dbset object of the entity class
use the save changes method to save the all the operation done to the physical sql db


layouts are designed in the shared -> _layouts which is the default which is defined in the _viewstart.cshtml

for custom layouts either we can define it in the {} block as 

@{
    Layout = "_Layout";
}

or else create a folder and place razor pages related to that specific layout and add _viewstart  file to specify common layout 


_viewimports are used to import namespace which is used in all razor page of that subfolder




Version Control :-

Git :
