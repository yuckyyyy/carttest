<?php

namespace App\Services;

use App\Models\Product;

class ShopProductService
{
    public function getProducts()
    {
        return Product::get();
    }

}
