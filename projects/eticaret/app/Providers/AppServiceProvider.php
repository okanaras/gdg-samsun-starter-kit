<?php

namespace App\Providers;

use App\Models\User;
use App\Observers\UserObserver;
use App\Events\UserRegisterEvent;
use Illuminate\Pagination\Paginator;
use App\Listeners\UserRegisterListener;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    protected $listen = [
        UserRegisterEvent::class => [
            UserRegisterListener::class,
        ],
    ];

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        /**
         * user modeline asagidaki kodu yapistirmistik.
         * #[ObservedBy([UserObserver::class])]
         *
         * yukardakini kaldirip asagidaki kodu buraya yapistirsak da ayni islevi gorecekti.
         *
         ** User::observe(UserObserver::class);
         */

        Paginator::useBootstrapFive();
    }
}