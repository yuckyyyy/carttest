@extends('partials.layouts.base')

@section('content')

    <div class="mobile-nav">
        <div class="mobile-nav__header">
            <a href="..//" class="logo">PHSPHNES<br/>2000
                <button class="mobile-nav__close"><img src="./img/icons/close.svg" alt="Close"/></button>
        </div>
        <div class="container-full">
            <ul class="mobile-nav__list">
                <li><a href="/">Homme</a></li>
                <li><a href="docs.html">Femme</a></li>
                <li><a href="docs.html">Archive</a></li>
                <li><a href="docs.html">PHSPHNES</a></li>
            </ul>
        </div>
    </div>

    <main class="light">
        <section class="product">
            <div class="container-full">
                <div class="product__row">
                    <div class="title-mob">
                        <a href="{{ route('shop') }}" class="product__back "><img src="../img/icons/arrow-black.svg"
                                                                                  alt="Back"/>@if(Session::get('lang') == 'en')
                                Back
                            @else
                                Назад
                            @endif</a>
                        <h1 class="product__title ">@if(Session::get('lang') == 'en')
                                {!! $name_en !!}
                            @else
                                {!! $name !!}
                            @endif</h1>
                    </div>

                    <aside class="product__details">
                        <div class="title-pc">
                            <a href="{{ route('back') }}" class="product__back "><img src="../img/icons/arrow-black.svg"
                                                                                      alt="Back"/>@if(Session::get('lang') == 'en')
                                    Back
                                @else
                                    Назад
                                @endif</a>
                        </div>
                        <div class="product__main">
                            <h1 class="product__title title-pc">@if(Session::get('lang') == 'en')
                                    {!! $name_en !!}
                                @else
                                    {!! $name !!}
                                @endif</h1>
                            <div class="product__description">
                                <p>
                                    @if(Session::get('lang') == 'en')
                                        {!! $description !!}
                                    @else
                                        {!! $description_ua !!}
                                    @endif

                                </p>
                            </div>

                            @if($cat_id == 6)

                            @else
                                <div class="product__sizes form-select-size">
                                    {{--									<button class="@if($xs == 'on') black-border @else sold-out @endif ">xs</button>--}}
                                    <button class="@if($s == 'on') black-border @else sold-out @endif">s</button>
                                    <button class="@if($m == 'on') black-border @else sold-out @endif">m</button>
                                    <button class="@if($l == 'on') black-border @else sold-out @endif">l</button>
                                    {{--									<button class="@if($xl == 'on') black-border @else sold-out @endif">xl</button>--}}
                                </div>
                            @endif

                            @if($soon == 1)
                                <button
                                    class="product__buy">@if(Session::get('lang') == 'en')
                                        SOON
                                    @else
                                        СКОРО
                                    @endif
                                </button>
                            @elseif($sold_out == 1)
                                <button
                                    class="product__buy">@if(Session::get('lang') == 'en')
                                        SOLD OUT
                                    @else
                                        РОЗПРОДАНО
                                    @endif
                                </button>
                            @else
                                <button id="add_to_cart_button" onclick="addToCart({{ $id }})"
                                        class="product__buy">@if(Session::get('lang') == 'en')
                                        Add To&#160;Cart&#160;&#8212;
                                    @else
                                        Додати у кошик
                                    @endif €{{$price}} </button>

                            @endif


                        </div>
                    </aside>
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <picture>
                                    <source srcset="../img/product/{{$image}} 1x, ../img/product/{{$image}} 2x"
                                            type="image/png"/>
                                    <img src="../img/product/{{$image}}" alt="Image 1"/>
                                </picture>
                            </div>
                            @foreach($productImages as $productImage)
                                <div class="swiper-slide">
                                    <picture>

                                        <source
                                            srcset="../img/product/{{$productImage->image}} 1x, ../img/product/{{$productImage->image}} 2x"
                                            type="image/png"/>
                                        <img src="../img/product/{{$productImage->image}}" alt="Image 1"/>
                                    </picture>
                                </div>
                            @endforeach
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
                <h2 class="product__related">@if(Session::get('lang') == 'en')
                        Similar
                    @else
                        Схожі
                    @endif</h2>
                <div class="product__related-wrapper">
                    @foreach($AddedProduct as $Product)
                        <article class="card">
                            <a href="/products/{{$Product['id']}}" class="card__link"></a>
                            <div class="card__photo">
                                <picture>
                                    <source
                                        srcset="../img/product/{{$Product['image']}} 1x, ../img/product/{{$Product['image']}} 2x"
                                        type="image/png"/>
                                    <img src="../img/product/{{$Product['image']}}" alt="Bowling Bag"
                                         class="card__img"/>
                                </picture>
                                <picture>
                                    <source
                                        srcset="../img/product/{{$Product['image']}} 1x, ../img/product/{{$Product['image']}} 2x"
                                        type="image/png"/>
                                    <img src="../img/product/{{$Product['image']}}" alt="Bowling Bag"
                                         class="card__img"/>
                                </picture>
                            </div>
                            <div class="card__desc">
                                <div class="card__name">{{$Product['name']}}</div>
                                <div class="card__price">€ {{$Product['price']}}</div>
                            </div>
                        </article>
                    @endforeach
                </div>
            </div>
        </section>
    </main>

@endsection
