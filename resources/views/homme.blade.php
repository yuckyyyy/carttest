@extends('partials.layouts.base')

@section('content')

    <main class="light">
        <div>
            <section class="catalog">
                <div class="container-full">
                    <div class="catalog__filter">
                        <div class="catalog__filter-list">
{{--                            <button class="catalog__filter-btn">--}}
{{--									<span>--}}
{{--										<em>@if(Session::get('lang') == 'en')--}}
{{--                                                filters--}}
{{--                                            @else--}}
{{--                                                фільтри--}}
{{--                                            @endif</em>--}}
{{--									</span>--}}
{{--                                <span>--}}
{{--										<em>@if(Session::get('lang') == 'en')--}}
{{--                                                filters--}}
{{--                                            @else--}}
{{--                                                фільтри--}}
{{--                                            @endif</em>--}}
{{--									</span>--}}
{{--                            </button>--}}
                        </div>
                    </div>
                    <div class="catalog__cards">

                        @foreach($products as $product)
                            <article class="card">
{{--                                <a href="/products/{{ $product->id }}" class="card__link"></a>--}}
                                <div class="card__photo">
                                    <picture>
                                        <source
                                            srcset="../img/product/{{$product->image}} 1x, ../img/product/{{$product->image}}"
                                            type="image/png"/>
                                        <img src="../img/product/{{$product->image}}" alt="Bowling Bag"
                                             class="card__img"/>
                                    </picture>
                                    @if($product->additional_image !== null)
                                        <picture>
                                            <source
                                                srcset="../img/product/{{$product->additional_image}} 1x, ../img/product/{{$product->additional_image}} 2x"
                                                type="image/png"/>
                                            <img src="../img/product/{{$product->additional_image}}" alt="Bowling Bag"
                                                 class="card__img"/>
                                        </picture>
                                    @else
                                        <picture>
                                            <source
                                                srcset="../img/product/{{$product->image}} 1x, ../img/product/{{$product->image}} 2x"
                                                type="image/png"/>
                                            <img src="../img/product/{{$product->image}}" alt="Bowling Bag"
                                                 class="card__img"/>
                                        </picture>
                                    @endif
                                </div>

                                <div class="card__desc">
                                    <div class="card__name">{{$product->name}}</div>
                                    <div class="card__price">@if($product->solt_out == 1) SOLD OUT @elseif($product->soon == 1) SOON @else €{{$product->price}}  @endif</div>
                                    <button id="add_to_cart_button" onclick="addToCart({{ $product->id }})"
                                            class="product__buy">@if(Session::get('lang') == 'en')
                                            Add To&#160;Cart&#160;&#8212;
                                        @else
                                            Додати у кошик
                                        @endif €{{$product->price}} </button>
                                </div>
                            </article>


                        @endforeach


                    </div>
                    {{--                    <button class="load-more">load more</button>--}}
                </div>
            </section>
        </div>
    </main>

@endsection
