const mongoose=require('mongoose');
mongoose.set('strictQuery',true);

const URL="mongodb+srv://sahilkhilari16:Sahil%40369@cluster0.hs2wlla.mongodb.net/Hostafe_DB?retryWrites=true&w=majority&appName=AtlasApp"

module.exports=mongoose.connect(URL,
//     {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
)