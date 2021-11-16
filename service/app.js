const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const bcrypt = require('bcrypt');
const saltRounds = 10;



app.use(cors());
app.use(express.json());

const url = 'mongodb+srv://khanh:khanh123456@cluster0.7af3z.mongodb.net/anhvu-window';

mongoose.connect(url);

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});
// userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);

app.post('/register', function (req, res) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        const newUser = new User({
            username: req.body.username,
            password: hash
        });
        console.log('login', newUser);

        newUser.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.send({ register: 'ok' })
            };
        });
    });
});

app.post('/login', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username: username }, function (err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            console.log('k loi');
            if (foundUser) {
                console.log('tim thay');
                if (bcrypt.compareSync(password, foundUser.password)) {
                    res.send({ isLogin: 'true' })
                } else {
                    res.send({ isLogin: 'false' })
                }
            }
        }
    })
});

app.post('/logout', function (req, res) {
    console.log("logout !!");
    res.send({ isLogin: 'false' });
})


const listProductSchema = {
    nameProduct: String,
    imgUrl: String,
    price: Number
};
const productSchema = {
    product: String,
    listProduct: [listProductSchema]
};

const products = mongoose.model('testproduct', productSchema);
const listProduct = mongoose.model('', listProductSchema);


app.get('/', function (req, res) {
    products.find({}, function (err, foundItems) {
        if (foundItems.length === 0) {
            res.send(foundItems);
        } else {
            res.send(foundItems);
        }
    })
});

app.get('/:id', function (req, res) {
    const idProduct = req.params.id;
    console.log("id:", idProduct);
    products.findOne({ product: idProduct }, function (err, foundList) {
        if (!foundList) {
            console.log('khong tim thay product');
            res.send(foundList);
        }
        else {
            console.log("find success");
            res.send(foundList.listProduct);
        }
    })
});

app.get('/modify/:id-:product', function (req, res) {
    const id = req.params.id;
    const product = req.params.product;
    console.log("id modify:", id);
    console.log("product modify", product);
    products.findOne({ product: product }, function (err, foundList) {
        if (foundList) {
            for (let i = 0; i < foundList.listProduct.length; i++) {
                if (foundList.listProduct[i]._id.equals(id)) {
                    console.log("modify product in for:", foundList.listProduct[i]);
                    res.send(foundList.listProduct[i]);
                    break;

                }
            }
        }
        else {
            console.log("k tim thay san pham can sua");
            res.send({ canFind: 'err' });
        }
    })
});
app.patch('/:product', function (req, res) {
    const price = req.body.price;
    const nameProduct = req.body.nameProduct;
    const imgUrl = req.body.imgUrl;
    console.log("params:", req.body._id);
    console.log("put modify:", req.body);
    console.log("put img:", nameProduct);
    products.findOneAndUpdate(
        { product: req.params.product, "listProduct._id": req.body._id },
        {
            $set: {
                "listProduct.$.nameProduct": nameProduct,
                "listProduct.$.price": price,
                "listProduct.$.imgUrl": imgUrl
            }
        },
        function (err) {
            if (!err) {
                console.log("done put");
                res.send({ modify: "done" });
            }
            else {
                console.log('k the patch');
                res.send(err);
            }
        })
})

app.delete('/:id-:product', function (req, res) {
    const id = req.params.id;
    const product = req.params.product;
    console.log('item delete', product);
    products.findOneAndUpdate({ product: product }, { $pull: { listProduct: { _id: id } } }, function (err, foundList) {
        if (!err) {
            res.json({ done: "delete" });
            console.log('return:', foundList);
        }
    })

});

app.delete('/:product', function (req, res) {
    const product = req.params.product;
    console.log("Product delete params:", product);
    products.deleteOne(
        { product: product },
        function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.send({ deleteStatus: "done" });
            }
        }
    )
});


app.post('/', function (req, res) {
    const product = req.body.product;
    const nameProduct = req.body.nameProduct;
    const imgUrl = req.body.imgUrl;
    const price = req.body.price;
    const sanpham = new listProduct({
        nameProduct: nameProduct,
        imgUrl: imgUrl,
        price: price
    });
    products.findOneAndUpdate(
        { product: product },
        { $push: { listProduct: sanpham } },
        function (err) {
            if (!err) {
                console.log('done push');
                res.send({ push: 'done' });
            }
            else {
                console.log('err:', err);
                res.send(err);
            }
        }
    );
    
    
});

app.post('/addproduct', function (req, res) {
    const product = req.body.product;
    const nameProduct = req.body.nameProduct;
    const imgUrl = req.body.imgUrl;
    const price = req.body.price;
    const sanpham = new products({
        product: product,
        listProduct: [
            {
                nameProduct: nameProduct,
                imgUrl: imgUrl,
                price: price
            }
        ]
    });
    sanpham.save();
    console.log("đã thêm danh mục sản phẩm mới");
    console.log('req body:', req.body);
    res.json({ status: "done" });
});


app.listen(PORT, function () {
    console.log(`sever running on port ${PORT}`);
});