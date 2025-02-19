<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

use App\Services\CartService;

class CartController extends Controller
{
    protected CartService $cartService;

    public function __construct(CartService $cartService)
    {
        $this->cartService = $cartService;
    }

    public function addToCart(Request $request): JsonResponse
    {
        return $this->cartService->addToCart($request);
    }

    public function removeProduct(Request $request): JsonResponse
    {
        return $this->cartService->removeProduct($request);
    }

    public function removeAll(): JsonResponse
    {
        return $this->cartService->removeAll();
    }

    public function showCart()
    {
        return $this->cartService->showCart();
    }

    public function getCartCount(): JsonResponse
    {
        return $this->cartService->getCartCount();
    }
}
