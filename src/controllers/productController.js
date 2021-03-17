exports.getAllProducts = (req, res , next) => { 
    res.json({ message : 'Get all products'});
}

exports.CreateProduct = (req, res , next) => { 
    res.json({ message : 'Create product'});
}

exports.UpdateProduct = (req, res , next) => { 
    res.json({ message : 'Update product'});
}

exports.DeleteProduct = (req, res , next) => { 
    res.json({ message : 'Delete product'});
}

exports.getProductById = (req, res , next) => { 
    res.json({ message : 'Get product by id'});
}

exports.getProductStyles = (req, res , next) => { 
    res.json({ message : 'Get product Styles'});
}

exports.getRelatedProducts = (req, res , next) => { 
    res.json({ message : 'Get related products'});
}