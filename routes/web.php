<?php



use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/products', 'App\Http\Controllers\ShopController@shop', );

//#cart
Route::post('/cart/add', 'App\Http\Controllers\CartController@addToCart')->name('cart.add');
Route::get('/cart', 'App\Http\Controllers\CartController@showCart')->name('cart.view');
Route::post('/cart/remove', 'App\Http\Controllers\CartController@removeProduct')->name('cart.remove');
Route::post('/cart/remove_all', 'App\Http\Controllers\CartController@removeAll')->name('cart.remove.all');
Route::get('/cart/count', 'App\Http\Controllers\CartController@getCartCount')->name('cart.count');
//#cart
