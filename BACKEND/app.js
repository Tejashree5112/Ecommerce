const express= require("express");
const mongoose=require('mongoose');

const categoryRoutes=require('./routes/categoryroute');
const brandRoutes=require('./routes/brandroute');

const productRoutes=require("./routes/productroute");

const app=express();
const port=3000;
const cors=require('cors')
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Server running");
});
app.use(cors());
app.use("/category", categoryRoutes);
app.use("/brand", brandRoutes);
app.use("/product", productRoutes);

async function connectDb(){
    mongoose.connect("mongodb://localhost:27017",{
        dbName:"ecom-store-db",
    });
    console.log("Mongodb Connected ");
}
connectDb().catch((err)=>{
    console.error(err);
})


app.listen(port,()=>{
    console.log("Server running on port", port);
})