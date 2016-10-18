<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableLinks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('links')) {
            Schema::create('links', function (Blueprint $t) {
                $t->increments('id');
                $t->string('url', 256);
                $t->string('alias', 100);
                $t->unsignedInteger('clicks')->nullable()->default(0);
                $t->timestamp('created_at');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('links');
    }
}
