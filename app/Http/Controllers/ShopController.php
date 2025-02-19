<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Services\ShopProductService;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    protected ShopProductService $productService;

    public function __construct(ShopProductService $productService)
    {
        $this->productService = $productService;
    }

    public function shop($cat_id = null)
    {

        $pageTitle = "Shop";
        $products = $this->productService->getProducts($cat_id);

        return view('homme', compact('products', 'pageTitle', 'cat_id'));
    }

}

