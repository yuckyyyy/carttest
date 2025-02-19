<?php

namespace App\Services;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\JsonResponse;

class CartService
{
    public function addToCart($request): JsonResponse
    {

//        $userId = Auth::id();
        $userId = 1;
        $productId = $request->input('product_id');
        $product = Product::find($productId);

        if (!$product) {
            return response()->json(['success' => false, 'message' => 'Product not found.']);
        }

        $cartItem = Cart::where('user_id', $userId)->where('product_id', $productId)->first();

        if ($cartItem) {
            $cartItem->increment('quantity');
        } else {
            Cart::create([
                'user_id' => $userId,
                'product_id' => $productId,
                'quantity' => 1,
            ]);
        }

        return response()->json(['success' => true, 'message' => 'Added to cart.']);
    }

    public function removeProduct($request): JsonResponse
    {
        $userId = 1;
        $productId = $request->input('product_id');
        $cartItem = Cart::where('user_id', $userId)->where('product_id', $productId)->first();

        if ($cartItem) {
            if ($cartItem->quantity > 1) {
                $cartItem->decrement('quantity');
            } else {
                $cartItem->delete();
            }
            return response()->json(['success' => true]);
        }

        return response()->json(['success' => false, 'message' => 'Item not found in cart.']);
    }

    public function removeAll(): JsonResponse
    {
        $userId = 1;
        Cart::where('user_id', $userId)->delete();
        return response()->json(['success' => true]);
    }

    public function showCart()
    {
        $userId = 1;
        $cartItems = Cart::where('user_id', $userId)->with('product')->get();

        $cartItemsData = $cartItems->map(function ($item) {
            return [
                'product_id' => $item->product->id,
                'name' => $item->product->name,
                'image' => $item->product->image,
                'price' => $item->product->price,
                'quantity' => $item->quantity,
            ];
        });

        $cartTotal = $cartItems->sum(fn($item) => $item->product->price * $item->quantity);

        return view('partials.cart.cart-partial', compact('cartItemsData', 'cartTotal'));
    }

    public function getCartCount(): JsonResponse
    {
        $userId = 1;
        $cartCount = Cart::where('user_id', $userId)->sum('quantity');
        return response()->json(['count' => $cartCount]);
    }

}
